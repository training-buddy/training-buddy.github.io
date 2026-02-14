import { a2 as getDefaultExportFromCjs } from "./index-C1uuhD5W.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  function diff2(options) {
    var options = options || {};
    this.Timeout = options.timeout || 1;
    this.EditCost = options.editCost || 4;
  }
  var DIFF_DELETE = -1;
  var DIFF_INSERT = 1;
  var DIFF_EQUAL = 0;
  diff2.Diff;
  diff2.prototype.main = function(text1, text2, opt_checklines, opt_deadline) {
    if (typeof opt_deadline == "undefined") {
      if (this.Timeout <= 0) {
        opt_deadline = Number.MAX_VALUE;
      } else {
        opt_deadline = (/* @__PURE__ */ new Date()).getTime() + this.Timeout * 1e3;
      }
    }
    var deadline = opt_deadline;
    if (text1 == null || text2 == null) {
      throw new Error("Null input. (diff_main)");
    }
    if (text1 == text2) {
      if (text1) {
        return [[DIFF_EQUAL, text1]];
      }
      return [];
    }
    if (typeof opt_checklines == "undefined") {
      opt_checklines = true;
    }
    var checklines = opt_checklines;
    var commonlength = this.commonPrefix(text1, text2);
    var commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength);
    text2 = text2.substring(commonlength);
    commonlength = this.commonSuffix(text1, text2);
    var commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength);
    text2 = text2.substring(0, text2.length - commonlength);
    var diffs = this.compute_(text1, text2, checklines, deadline);
    if (commonprefix) {
      diffs.unshift([DIFF_EQUAL, commonprefix]);
    }
    if (commonsuffix) {
      diffs.push([DIFF_EQUAL, commonsuffix]);
    }
    this.cleanupMerge(diffs);
    return diffs;
  };
  diff2.prototype.compute_ = function(text1, text2, checklines, deadline) {
    var diffs;
    if (!text1) {
      return [[DIFF_INSERT, text2]];
    }
    if (!text2) {
      return [[DIFF_DELETE, text1]];
    }
    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    var i = longtext.indexOf(shorttext);
    if (i != -1) {
      diffs = [
        [DIFF_INSERT, longtext.substring(0, i)],
        [DIFF_EQUAL, shorttext],
        [DIFF_INSERT, longtext.substring(i + shorttext.length)]
      ];
      if (text1.length > text2.length) {
        diffs[0][0] = diffs[2][0] = DIFF_DELETE;
      }
      return diffs;
    }
    if (shorttext.length == 1) {
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }
    var hm = this.halfMatch_(text1, text2);
    if (hm) {
      var text1_a = hm[0];
      var text1_b = hm[1];
      var text2_a = hm[2];
      var text2_b = hm[3];
      var mid_common = hm[4];
      var diffs_a = this.main(text1_a, text2_a, checklines, deadline);
      var diffs_b = this.main(text1_b, text2_b, checklines, deadline);
      return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
    }
    if (checklines && text1.length > 100 && text2.length > 100) {
      return this.lineMode_(text1, text2, deadline);
    }
    return this.bisect_(text1, text2, deadline);
  };
  diff2.prototype.lineMode_ = function(text1, text2, deadline) {
    var a = this.linesToChars_(text1, text2);
    text1 = a.chars1;
    text2 = a.chars2;
    var linearray = a.lineArray;
    var diffs = this.main(text1, text2, false, deadline);
    this.charsToLines_(diffs, linearray);
    this.cleanupSemantic(diffs);
    diffs.push([DIFF_EQUAL, ""]);
    var pointer = 0;
    var count_delete = 0;
    var count_insert = 0;
    var text_delete = "";
    var text_insert = "";
    while (pointer < diffs.length) {
      switch (diffs[pointer][0]) {
        case DIFF_INSERT:
          count_insert++;
          text_insert += diffs[pointer][1];
          break;
        case DIFF_DELETE:
          count_delete++;
          text_delete += diffs[pointer][1];
          break;
        case DIFF_EQUAL:
          if (count_delete >= 1 && count_insert >= 1) {
            diffs.splice(
              pointer - count_delete - count_insert,
              count_delete + count_insert
            );
            pointer = pointer - count_delete - count_insert;
            var a = this.main(text_delete, text_insert, false, deadline);
            for (var j = a.length - 1; j >= 0; j--) {
              diffs.splice(pointer, 0, a[j]);
            }
            pointer = pointer + a.length;
          }
          count_insert = 0;
          count_delete = 0;
          text_delete = "";
          text_insert = "";
          break;
      }
      pointer++;
    }
    diffs.pop();
    return diffs;
  };
  diff2.prototype.bisect_ = function(text1, text2, deadline) {
    var text1_length = text1.length;
    var text2_length = text2.length;
    var max_d = Math.ceil((text1_length + text2_length) / 2);
    var v_offset = max_d;
    var v_length = 2 * max_d;
    var v1 = new Array(v_length);
    var v2 = new Array(v_length);
    for (var x = 0; x < v_length; x++) {
      v1[x] = -1;
      v2[x] = -1;
    }
    v1[v_offset + 1] = 0;
    v2[v_offset + 1] = 0;
    var delta = text1_length - text2_length;
    var front = delta % 2 != 0;
    var k1start = 0;
    var k1end = 0;
    var k2start = 0;
    var k2end = 0;
    for (var d = 0; d < max_d; d++) {
      if ((/* @__PURE__ */ new Date()).getTime() > deadline) {
        break;
      }
      for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
        var k1_offset = v_offset + k1;
        var x1;
        if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
          x1 = v1[k1_offset + 1];
        } else {
          x1 = v1[k1_offset - 1] + 1;
        }
        var y1 = x1 - k1;
        while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
          x1++;
          y1++;
        }
        v1[k1_offset] = x1;
        if (x1 > text1_length) {
          k1end += 2;
        } else if (y1 > text2_length) {
          k1start += 2;
        } else if (front) {
          var k2_offset = v_offset + delta - k1;
          if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
            var x2 = text1_length - v2[k2_offset];
            if (x1 >= x2) {
              return this.bisectSplit_(text1, text2, x1, y1, deadline);
            }
          }
        }
      }
      for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
        var k2_offset = v_offset + k2;
        var x2;
        if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
          x2 = v2[k2_offset + 1];
        } else {
          x2 = v2[k2_offset - 1] + 1;
        }
        var y2 = x2 - k2;
        while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
          x2++;
          y2++;
        }
        v2[k2_offset] = x2;
        if (x2 > text1_length) {
          k2end += 2;
        } else if (y2 > text2_length) {
          k2start += 2;
        } else if (!front) {
          var k1_offset = v_offset + delta - k2;
          if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
            var x1 = v1[k1_offset];
            var y1 = v_offset + x1 - k1_offset;
            x2 = text1_length - x2;
            if (x1 >= x2) {
              return this.bisectSplit_(text1, text2, x1, y1, deadline);
            }
          }
        }
      }
    }
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  };
  diff2.prototype.bisectSplit_ = function(text1, text2, x, y, deadline) {
    var text1a = text1.substring(0, x);
    var text2a = text2.substring(0, y);
    var text1b = text1.substring(x);
    var text2b = text2.substring(y);
    var diffs = this.main(text1a, text2a, false, deadline);
    var diffsb = this.main(text1b, text2b, false, deadline);
    return diffs.concat(diffsb);
  };
  diff2.prototype.linesToChars_ = function(text1, text2) {
    var lineArray = [];
    var lineHash = {};
    lineArray[0] = "";
    function diff_linesToCharsMunge_(text) {
      var chars = "";
      var lineStart = 0;
      var lineEnd = -1;
      var lineArrayLength = lineArray.length;
      while (lineEnd < text.length - 1) {
        lineEnd = text.indexOf("\n", lineStart);
        if (lineEnd == -1) {
          lineEnd = text.length - 1;
        }
        var line = text.substring(lineStart, lineEnd + 1);
        lineStart = lineEnd + 1;
        if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) {
          chars += String.fromCharCode(lineHash[line]);
        } else {
          chars += String.fromCharCode(lineArrayLength);
          lineHash[line] = lineArrayLength;
          lineArray[lineArrayLength++] = line;
        }
      }
      return chars;
    }
    var chars1 = diff_linesToCharsMunge_(text1);
    var chars2 = diff_linesToCharsMunge_(text2);
    return { chars1, chars2, lineArray };
  };
  diff2.prototype.charsToLines_ = function(diffs, lineArray) {
    for (var x = 0; x < diffs.length; x++) {
      var chars = diffs[x][1];
      var text = [];
      for (var y = 0; y < chars.length; y++) {
        text[y] = lineArray[chars.charCodeAt(y)];
      }
      diffs[x][1] = text.join("");
    }
  };
  diff2.prototype.commonPrefix = function(text1, text2) {
    if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
      return 0;
    }
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerstart = 0;
    while (pointermin < pointermid) {
      if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
        pointermin = pointermid;
        pointerstart = pointermin;
      } else {
        pointermax = pointermid;
      }
      pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    return pointermid;
  };
  diff2.prototype.commonSuffix = function(text1, text2) {
    if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
      return 0;
    }
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerend = 0;
    while (pointermin < pointermid) {
      if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
        pointermin = pointermid;
        pointerend = pointermin;
      } else {
        pointermax = pointermid;
      }
      pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    return pointermid;
  };
  diff2.prototype.commonOverlap_ = function(text1, text2) {
    var text1_length = text1.length;
    var text2_length = text2.length;
    if (text1_length == 0 || text2_length == 0) {
      return 0;
    }
    if (text1_length > text2_length) {
      text1 = text1.substring(text1_length - text2_length);
    } else if (text1_length < text2_length) {
      text2 = text2.substring(0, text1_length);
    }
    var text_length = Math.min(text1_length, text2_length);
    if (text1 == text2) {
      return text_length;
    }
    var best = 0;
    var length = 1;
    while (true) {
      var pattern = text1.substring(text_length - length);
      var found = text2.indexOf(pattern);
      if (found == -1) {
        return best;
      }
      length += found;
      if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
        best = length;
        length++;
      }
    }
  };
  diff2.prototype.halfMatch_ = function(text1, text2) {
    if (this.Timeout <= 0) {
      return null;
    }
    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
      return null;
    }
    var dmp = this;
    function diff_halfMatchI_(longtext2, shorttext2, i) {
      var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
      var j = -1;
      var best_common = "";
      var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
      while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
        var prefixLength = dmp.commonPrefix(
          longtext2.substring(i),
          shorttext2.substring(j)
        );
        var suffixLength = dmp.commonSuffix(
          longtext2.substring(0, i),
          shorttext2.substring(0, j)
        );
        if (best_common.length < suffixLength + prefixLength) {
          best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
          best_longtext_a = longtext2.substring(0, i - suffixLength);
          best_longtext_b = longtext2.substring(i + prefixLength);
          best_shorttext_a = shorttext2.substring(0, j - suffixLength);
          best_shorttext_b = shorttext2.substring(j + prefixLength);
        }
      }
      if (best_common.length * 2 >= longtext2.length) {
        return [
          best_longtext_a,
          best_longtext_b,
          best_shorttext_a,
          best_shorttext_b,
          best_common
        ];
      } else {
        return null;
      }
    }
    var hm1 = diff_halfMatchI_(
      longtext,
      shorttext,
      Math.ceil(longtext.length / 4)
    );
    var hm2 = diff_halfMatchI_(
      longtext,
      shorttext,
      Math.ceil(longtext.length / 2)
    );
    var hm;
    if (!hm1 && !hm2) {
      return null;
    } else if (!hm2) {
      hm = hm1;
    } else if (!hm1) {
      hm = hm2;
    } else {
      hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
    }
    var text1_a, text1_b, text2_a, text2_b;
    if (text1.length > text2.length) {
      text1_a = hm[0];
      text1_b = hm[1];
      text2_a = hm[2];
      text2_b = hm[3];
    } else {
      text2_a = hm[0];
      text2_b = hm[1];
      text1_a = hm[2];
      text1_b = hm[3];
    }
    var mid_common = hm[4];
    return [text1_a, text1_b, text2_a, text2_b, mid_common];
  };
  diff2.prototype.cleanupSemantic = function(diffs) {
    var changes = false;
    var equalities = [];
    var equalitiesLength = 0;
    var lastequality = null;
    var pointer = 0;
    var length_insertions1 = 0;
    var length_deletions1 = 0;
    var length_insertions2 = 0;
    var length_deletions2 = 0;
    while (pointer < diffs.length) {
      if (diffs[pointer][0] == DIFF_EQUAL) {
        equalities[equalitiesLength++] = pointer;
        length_insertions1 = length_insertions2;
        length_deletions1 = length_deletions2;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastequality = diffs[pointer][1];
      } else {
        if (diffs[pointer][0] == DIFF_INSERT) {
          length_insertions2 += diffs[pointer][1].length;
        } else {
          length_deletions2 += diffs[pointer][1].length;
        }
        if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(
          length_insertions2,
          length_deletions2
        )) {
          diffs.splice(
            equalities[equalitiesLength - 1],
            0,
            [DIFF_DELETE, lastequality]
          );
          diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
          equalitiesLength--;
          equalitiesLength--;
          pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
          length_insertions1 = 0;
          length_deletions1 = 0;
          length_insertions2 = 0;
          length_deletions2 = 0;
          lastequality = null;
          changes = true;
        }
      }
      pointer++;
    }
    if (changes) {
      this.cleanupMerge(diffs);
    }
    this.cleanupSemanticLossless(diffs);
    pointer = 1;
    while (pointer < diffs.length) {
      if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
        var deletion = diffs[pointer - 1][1];
        var insertion = diffs[pointer][1];
        var overlap_length1 = this.commonOverlap_(deletion, insertion);
        var overlap_length2 = this.commonOverlap_(insertion, deletion);
        if (overlap_length1 >= overlap_length2) {
          if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
            diffs.splice(
              pointer,
              0,
              [DIFF_EQUAL, insertion.substring(0, overlap_length1)]
            );
            diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
            diffs[pointer + 1][1] = insertion.substring(overlap_length1);
            pointer++;
          }
        } else {
          if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
            diffs.splice(
              pointer,
              0,
              [DIFF_EQUAL, deletion.substring(0, overlap_length2)]
            );
            diffs[pointer - 1][0] = DIFF_INSERT;
            diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
            diffs[pointer + 1][0] = DIFF_DELETE;
            diffs[pointer + 1][1] = deletion.substring(overlap_length2);
            pointer++;
          }
        }
        pointer++;
      }
      pointer++;
    }
  };
  diff2.prototype.cleanupSemanticLossless = function(diffs) {
    function diff_cleanupSemanticScore_(one, two) {
      if (!one || !two) {
        return 6;
      }
      var char1 = one.charAt(one.length - 1);
      var char2 = two.charAt(0);
      var nonAlphaNumeric1 = char1.match(diff2.nonAlphaNumericRegex_);
      var nonAlphaNumeric2 = char2.match(diff2.nonAlphaNumericRegex_);
      var whitespace1 = nonAlphaNumeric1 && char1.match(diff2.whitespaceRegex_);
      var whitespace2 = nonAlphaNumeric2 && char2.match(diff2.whitespaceRegex_);
      var lineBreak1 = whitespace1 && char1.match(diff2.linebreakRegex_);
      var lineBreak2 = whitespace2 && char2.match(diff2.linebreakRegex_);
      var blankLine1 = lineBreak1 && one.match(diff2.blanklineEndRegex_);
      var blankLine2 = lineBreak2 && two.match(diff2.blanklineStartRegex_);
      if (blankLine1 || blankLine2) {
        return 5;
      } else if (lineBreak1 || lineBreak2) {
        return 4;
      } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
        return 3;
      } else if (whitespace1 || whitespace2) {
        return 2;
      } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
        return 1;
      }
      return 0;
    }
    var pointer = 1;
    while (pointer < diffs.length - 1) {
      if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
        var equality1 = diffs[pointer - 1][1];
        var edit = diffs[pointer][1];
        var equality2 = diffs[pointer + 1][1];
        var commonOffset = this.commonSuffix(equality1, edit);
        if (commonOffset) {
          var commonString = edit.substring(edit.length - commonOffset);
          equality1 = equality1.substring(0, equality1.length - commonOffset);
          edit = commonString + edit.substring(0, edit.length - commonOffset);
          equality2 = commonString + equality2;
        }
        var bestEquality1 = equality1;
        var bestEdit = edit;
        var bestEquality2 = equality2;
        var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
        while (edit.charAt(0) === equality2.charAt(0)) {
          equality1 += edit.charAt(0);
          edit = edit.substring(1) + equality2.charAt(0);
          equality2 = equality2.substring(1);
          var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
          if (score >= bestScore) {
            bestScore = score;
            bestEquality1 = equality1;
            bestEdit = edit;
            bestEquality2 = equality2;
          }
        }
        if (diffs[pointer - 1][1] != bestEquality1) {
          if (bestEquality1) {
            diffs[pointer - 1][1] = bestEquality1;
          } else {
            diffs.splice(pointer - 1, 1);
            pointer--;
          }
          diffs[pointer][1] = bestEdit;
          if (bestEquality2) {
            diffs[pointer + 1][1] = bestEquality2;
          } else {
            diffs.splice(pointer + 1, 1);
            pointer--;
          }
        }
      }
      pointer++;
    }
  };
  diff2.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
  diff2.whitespaceRegex_ = /\s/;
  diff2.linebreakRegex_ = /[\r\n]/;
  diff2.blanklineEndRegex_ = /\n\r?\n$/;
  diff2.blanklineStartRegex_ = /^\r?\n\r?\n/;
  diff2.prototype.cleanupEfficiency = function(diffs) {
    var changes = false;
    var equalities = [];
    var equalitiesLength = 0;
    var lastequality = null;
    var pointer = 0;
    var pre_ins = false;
    var pre_del = false;
    var post_ins = false;
    var post_del = false;
    while (pointer < diffs.length) {
      if (diffs[pointer][0] == DIFF_EQUAL) {
        if (diffs[pointer][1].length < this.EditCost && (post_ins || post_del)) {
          equalities[equalitiesLength++] = pointer;
          pre_ins = post_ins;
          pre_del = post_del;
          lastequality = diffs[pointer][1];
        } else {
          equalitiesLength = 0;
          lastequality = null;
        }
        post_ins = post_del = false;
      } else {
        if (diffs[pointer][0] == DIFF_DELETE) {
          post_del = true;
        } else {
          post_ins = true;
        }
        if (lastequality && (pre_ins && pre_del && post_ins && post_del || lastequality.length < this.EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
          diffs.splice(
            equalities[equalitiesLength - 1],
            0,
            [DIFF_DELETE, lastequality]
          );
          diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
          equalitiesLength--;
          lastequality = null;
          if (pre_ins && pre_del) {
            post_ins = post_del = true;
            equalitiesLength = 0;
          } else {
            equalitiesLength--;
            pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
            post_ins = post_del = false;
          }
          changes = true;
        }
      }
      pointer++;
    }
    if (changes) {
      this.cleanupMerge(diffs);
    }
  };
  diff2.prototype.cleanupMerge = function(diffs) {
    diffs.push([DIFF_EQUAL, ""]);
    var pointer = 0;
    var count_delete = 0;
    var count_insert = 0;
    var text_delete = "";
    var text_insert = "";
    var commonlength;
    while (pointer < diffs.length) {
      switch (diffs[pointer][0]) {
        case DIFF_INSERT:
          count_insert++;
          text_insert += diffs[pointer][1];
          pointer++;
          break;
        case DIFF_DELETE:
          count_delete++;
          text_delete += diffs[pointer][1];
          pointer++;
          break;
        case DIFF_EQUAL:
          if (count_delete + count_insert > 1) {
            if (count_delete !== 0 && count_insert !== 0) {
              commonlength = this.commonPrefix(text_insert, text_delete);
              if (commonlength !== 0) {
                if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                  diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                } else {
                  diffs.splice(0, 0, [
                    DIFF_EQUAL,
                    text_insert.substring(0, commonlength)
                  ]);
                  pointer++;
                }
                text_insert = text_insert.substring(commonlength);
                text_delete = text_delete.substring(commonlength);
              }
              commonlength = this.commonSuffix(text_insert, text_delete);
              if (commonlength !== 0) {
                diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                text_insert = text_insert.substring(0, text_insert.length - commonlength);
                text_delete = text_delete.substring(0, text_delete.length - commonlength);
              }
            }
            if (count_delete === 0) {
              diffs.splice(
                pointer - count_insert,
                count_delete + count_insert,
                [DIFF_INSERT, text_insert]
              );
            } else if (count_insert === 0) {
              diffs.splice(
                pointer - count_delete,
                count_delete + count_insert,
                [DIFF_DELETE, text_delete]
              );
            } else {
              diffs.splice(
                pointer - count_delete - count_insert,
                count_delete + count_insert,
                [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]
              );
            }
            pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
          } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
            diffs[pointer - 1][1] += diffs[pointer][1];
            diffs.splice(pointer, 1);
          } else {
            pointer++;
          }
          count_insert = 0;
          count_delete = 0;
          text_delete = "";
          text_insert = "";
          break;
      }
    }
    if (diffs[diffs.length - 1][1] === "") {
      diffs.pop();
    }
    var changes = false;
    pointer = 1;
    while (pointer < diffs.length - 1) {
      if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
        if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
          diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
          diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
          diffs.splice(pointer - 1, 1);
          changes = true;
        } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
          diffs[pointer - 1][1] += diffs[pointer + 1][1];
          diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
          diffs.splice(pointer + 1, 1);
          changes = true;
        }
      }
      pointer++;
    }
    if (changes) {
      this.cleanupMerge(diffs);
    }
  };
  diff2.prototype.xIndex = function(diffs, loc) {
    var chars1 = 0;
    var chars2 = 0;
    var last_chars1 = 0;
    var last_chars2 = 0;
    var x;
    for (x = 0; x < diffs.length; x++) {
      if (diffs[x][0] !== DIFF_INSERT) {
        chars1 += diffs[x][1].length;
      }
      if (diffs[x][0] !== DIFF_DELETE) {
        chars2 += diffs[x][1].length;
      }
      if (chars1 > loc) {
        break;
      }
      last_chars1 = chars1;
      last_chars2 = chars2;
    }
    if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
      return last_chars2;
    }
    return last_chars2 + (loc - last_chars1);
  };
  diff2.prototype.prettyHtml = function(diffs) {
    var html = [];
    var pattern_amp = /&/g;
    var pattern_lt = /</g;
    var pattern_gt = />/g;
    var pattern_br = /\n/g;
    for (var x = 0; x < diffs.length; x++) {
      var op = diffs[x][0];
      var data = diffs[x][1];
      var text = data.replace(pattern_amp, "&amp;").replace(pattern_lt, "&lt;").replace(pattern_gt, "&gt;").replace(pattern_br, "<br/>");
      switch (op) {
        case DIFF_INSERT:
          html[x] = "<ins>" + text + "</ins>";
          break;
        case DIFF_DELETE:
          html[x] = "<del>" + text + "</del>";
          break;
        case DIFF_EQUAL:
          html[x] = "<span>" + text + "</span>";
          break;
      }
    }
    return html.join("");
  };
  diff2.prototype.text1 = function(diffs) {
    var text = [];
    for (var x = 0; x < diffs.length; x++) {
      if (diffs[x][0] !== DIFF_INSERT) {
        text[x] = diffs[x][1];
      }
    }
    return text.join("");
  };
  diff2.prototype.text2 = function(diffs) {
    var text = [];
    for (var x = 0; x < diffs.length; x++) {
      if (diffs[x][0] !== DIFF_DELETE) {
        text[x] = diffs[x][1];
      }
    }
    return text.join("");
  };
  diff2.prototype.levenshtein = function(diffs) {
    var levenshtein = 0;
    var insertions = 0;
    var deletions = 0;
    for (var x = 0; x < diffs.length; x++) {
      var op = diffs[x][0];
      var data = diffs[x][1];
      switch (op) {
        case DIFF_INSERT:
          insertions += data.length;
          break;
        case DIFF_DELETE:
          deletions += data.length;
          break;
        case DIFF_EQUAL:
          levenshtein += Math.max(insertions, deletions);
          insertions = 0;
          deletions = 0;
          break;
      }
    }
    levenshtein += Math.max(insertions, deletions);
    return levenshtein;
  };
  diff2.prototype.toDelta = function(diffs) {
    var text = [];
    for (var x = 0; x < diffs.length; x++) {
      switch (diffs[x][0]) {
        case DIFF_INSERT:
          text[x] = "+" + encodeURI(diffs[x][1]);
          break;
        case DIFF_DELETE:
          text[x] = "-" + diffs[x][1].length;
          break;
        case DIFF_EQUAL:
          text[x] = "=" + diffs[x][1].length;
          break;
      }
    }
    return text.join("	").replace(/%20/g, " ");
  };
  diff2.prototype.fromDelta = function(text1, delta) {
    var diffs = [];
    var diffsLength = 0;
    var pointer = 0;
    var tokens = delta.split(/\t/g);
    for (var x = 0; x < tokens.length; x++) {
      var param = tokens[x].substring(1);
      switch (tokens[x].charAt(0)) {
        case "+":
          try {
            diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
          } catch (ex) {
            throw new Error("Illegal escape in diff_fromDelta: " + param);
          }
          break;
        case "-":
        // Fall through.
        case "=":
          var n = parseInt(param, 10);
          if (isNaN(n) || n < 0) {
            throw new Error("Invalid number in diff_fromDelta: " + param);
          }
          var text = text1.substring(pointer, pointer += n);
          if (tokens[x].charAt(0) == "=") {
            diffs[diffsLength++] = [DIFF_EQUAL, text];
          } else {
            diffs[diffsLength++] = [DIFF_DELETE, text];
          }
          break;
        default:
          if (tokens[x]) {
            throw new Error("Invalid diff operation in diff_fromDelta: " + tokens[x]);
          }
      }
    }
    if (pointer != text1.length) {
      throw new Error("Delta length (" + pointer + ") does not equal source text length (" + text1.length + ").");
    }
    return diffs;
  };
  diff_1["diff"] = diff2;
  diff_1["DIFF_DELETE"] = DIFF_DELETE;
  diff_1["DIFF_INSERT"] = DIFF_INSERT;
  diff_1["DIFF_EQUAL"] = DIFF_EQUAL;
  diff_1 = diff2;
  return diff_1;
}
var diffExports = requireDiff();
const diff = /* @__PURE__ */ getDefaultExportFromCjs(diffExports);
const diff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: diff
}, [diffExports]);
export {
  diff$1 as d
};
//# sourceMappingURL=diff-Ba4fQ92W.js.map
