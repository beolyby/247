﻿/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function (a, b) { return new m.fn.init(a, b) }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) { return b.toUpperCase() }; m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return m.each(this, a, b) }, map: function (a) { return this.pushStack(m.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--) ; i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === m.type(a) }, isArray: Array.isArray || function (a) { return "array" === m.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return !m.isArray(a) && a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (k.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && m.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(o, "ms-").replace(p, q) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = r(a); if (c) { if (g) { for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(n, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = r(a), i = []; if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 }, now: function () { return +new Date }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function r(a) { var b = a.length, c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var s = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) { return a === b && (l = !0), 0 }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b; return -1 }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType } catch (eb) { I = { apply: F.length ? function (a, b) { H.apply(a, J.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function fb(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d; if (1 !== (k = b.nodeType) && 9 !== k) return []; if (p && !e) { if (f = _.exec(a)) if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + qb(o[l]); w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",") } if (x) try { return I.apply(d, w.querySelectorAll(x)), d } catch (y) { } finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) } function gb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function hb(a) { return a[u] = !0, a } function ib(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function jb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function kb(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function lb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function mb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function nb(a) { return hb(function (b) { return b = +b, hb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function ob(a) { return a && typeof a.getElementsByTagName !== C && a } c = fb.support = {}, f = fb.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fb.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : v, g = e.defaultView; return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { m() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { m() })), c.attributes = ib(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ib(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = ib(function (a) { return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== C && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) { a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked") }), ib(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0; if (f === g) return kb(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, e) : n }, fb.matches = function (a, b) { return fb(a, null, null, b) }, fb.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return fb(b, n, null, [a]).length > 0 }, fb.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fb.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fb.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fb.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fb.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = fb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: hb(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? hb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: hb(function (a) { return function (b) { return fb(a, b).length > 0 } }), contains: hb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: hb(function (a) { return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: nb(function () { return [0] }), last: nb(function (a, b) { return [b - 1] }), eq: nb(function (a, b, c) { return [0 > c ? c + b : c] }), even: nb(function (a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: nb(function (a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = lb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b); function pb() { } pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fb.error(a) : z(a, i).slice(0) }; function qb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d } function rb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function sb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function tb(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c); return c } function ub(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function vb(a, b, c, d, e, f) { return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ub(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r) }) } function wb(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) { return a === b }, h, !0), l = rb(function (a) { return K.call(b, a) > -1 }, h, !0), m = [function (a, c, d) { return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > i; i++) if (c = d.relative[a[i].type]) m = [rb(sb(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a)) } m.push(c) } return sb(m) } function xb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g) ; q !== x && null != (l = u[q]) ; q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break } k && (w = v) } c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i)); s = ub(s) } I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? hb(f) : f } return h = fb.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, xb(e, d)), f.selector = a } return f }, i = fb.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ib(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || jb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ib(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || jb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ib(function (a) { return null == a.getAttribute("disabled") }) || jb(L, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fb }(a); m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains; var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/; function w(a, b, c) { if (m.isFunction(b)) return m.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return m.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (v.test(b)) return m.filter(b, a, c); b = m.filter(b, a) } return m.grep(a, function (a) { return m.inArray(a, b) >= 0 !== c }) } m.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) { return 1 === a.nodeType })) }, m.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function () { for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(w(this, a || [], !1)) }, not: function (a) { return this.pushStack(w(this, a || [], !0)) }, is: function (a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length } }); var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = y.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return x.find(a); this.length = 1, this[0] = d } return this.context = y, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)) }; A.prototype = m.fn, x = m(y); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; m.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), m.fn.extend({ has: function (a) { var b, c = m(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? m.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } m.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return m.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return m.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return m.dir(a, "nextSibling") }, prevAll: function (a) { return m.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function (a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return m.sibling(a.firstChild) }, contents: function (a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function (a, b) { m.fn[a] = function (c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } m.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { m.each(b, function (b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && m.each(arguments, function (a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, m.extend({ Deferred: function (a) { var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return m.Deferred(function (c) { m.each(b, function (b, f) { var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? m.extend(a, d) : d } }, e = {}; return d.pipe = d.then, m.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e) ; e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; m.fn.ready = function (a) { return m.ready.promise().done(a), this }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? m.readyWait++ : m.ready(!0) }, ready: function (a) { if (a === !0 ? !--m.readyWait : !m.isReady) { if (!y.body) return setTimeout(m.ready); m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready"))) } } }); function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) } function J() { (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()) } m.ready.promise = function (b) { if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else { y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && y.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!m.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } I(), m.ready() } }() } return H.promise(b) }; var K = "undefined", L; for (L in m(k)) break; k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () { var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)) }), function () { var a = y.createElement("div"); if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } } a = null }(), m.acceptData = function (a) { var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g; function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) { } m.data(a, b, c) } else c = void 0 } return c } function P(a) { var b; for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    } function R(a, b, c) { if (m.acceptData(a)) { var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return } (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function (a, b, c) { return Q(a, b, c) }, removeData: function (a, b) { return R(a, b) }, _data: function (a, b, c) { return Q(a, b, c, !0) }, _removeData: function (a, b) { return R(a, b, !0) } }), m.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d]))); m._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { m.data(this, a) }) : arguments.length > 1 ? this.each(function () { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { m.removeData(this, a) }) } }), m.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () { m.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) } }), m.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = m.queue(this, a, b); m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { m.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) }, V = m.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(m(a), c) })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, W = /^(?:checkbox|radio)$/i; !function () { var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } } }(), function () { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/; function ab() { return !0 } function bb() { return !1 } function cb() { try { return y.activeElement } catch (a) { } } m.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g)); i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) m.event.remove(a, o + b[j], c, d, !0); m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !m.isWindow(d)) { for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode) ; h; h = h.parentNode) o.push(h), l = h; l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a) } n = 0; while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) { l = d[g], l && (d[g] = null), m.event.triggered = p; try { d[p]() } catch (r) { } m.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = m.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[m.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, m.removeEvent = y.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)) }, m.Event = function (a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.submitBubbles || (m.event.special.submit = { setup: function () { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0; c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") } }), k.changeBubbles || (m.event.special.change = { setup: function () { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function (a) { var b = a.target; X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return m.event.remove(this, "._change"), !X.test(this.nodeName) } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { m.event.simulate(b, a.target, m.event.fix(a), !0) }; m.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = m._data(d, b); e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = m._data(d, b) - 1; e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)) } } }), m.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () { m.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () { m.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { m.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 } }); function db(a) { var b = eb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, sb = db(y), tb = sb.appendChild(y.createElement("div")); rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td; function ub(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]) ; e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f } function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) } function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a } function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function zb(a, b) { for (var c, d = 0; null != (c = a[d]) ; d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) } function Ab(a, b) { if (1 === b.nodeType && m.hasData(a)) { var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]) } g.data && (g.data = m.extend({}, g.data)) } } function Bb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) { e = m._data(b); for (d in e.events) m.removeEvent(b, d, e.handle); b.removeAttribute(m.expando) } "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } m.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]) ; ++g) d[g] && Bb(e, d[g]); if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]) ; g++) Ab(e, d[g]); else Ab(a, f); return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]) ; h++) if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle); j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), m.fn.extend({ text: function (a) { return V(this, function (a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]) ; e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) { 1 === a.nodeType && m.cleanData(ub(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && m.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return m.clone(this, a, b) }) }, html: function (a) { return V(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0; if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(ib, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) { var d = n.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, ""))); i = c = null } return this } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { m.fn[a] = function (a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Cb, Db = {}; function Eb(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f } function Fb(a) { var b = y, c = Db[a]; return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c } !function () { var a; k.shrinkWrapBlocks = function () { if (null != a) return a; a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0 } }(); var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Ib = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function (a) { return a.currentStyle }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Lb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) { c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () { return null == g && i(), g }, boxSizingReliable: function () { return null == f && i(), f }, pixelPosition: function () { return null == e && i(), e }, reliableMarginRight: function () { return null == h && i(), h } }); function i() { var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)) } } }(), m.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = { position: "absolute", visibility: "hidden", display: "block" }, Sb = { letterSpacing: "0", fontWeight: "400" }, Tb = ["Webkit", "O", "Moz", "ms"]; function Ub(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length; while (e--) if (b = Tb[e] + c, b in a) return b; return d } function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g } function Yb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px" } m.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = m.camelCase(b), i = a.style; if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f } }), m.each(["height", "width"], function (a, b) { m.cssHooks[b] = { get: function (a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e) } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) { m.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({ css: function (a, b) { return V(this, function (a, b, c) { var d, e, f = {}, g = 0; if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f } return void 0 !== c ? m.style(a, b, c) : m.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Vb(this, !0) }, hide: function () { return Vb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { U(this) ? m(this).show() : m(this).hide() }) } }); function Zb(a, b, c, d, e) { return new Zb.prototype.init(a, b, c, d, e) } m.Tween = Zb, Zb.prototype = {
        constructor: Zb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) }, run: function (a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {}; var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function fc() { return setTimeout(function () { $b = void 0 }), $b = m.now() } function gc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function hc(a, b, c) { for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function ic(a, b, c) { var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow"); c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, n.always(function () { n.always(function () { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], ac.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || m.style(a, d) } else j = void 0; if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else { r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () { m(a).hide() }), n.done(function () { var b; m._removeData(a, "fxshow"); for (b in o) m.style(a, b, o[b]) }); for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function jc(a, b) { var c, d, e, f, g; for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kc(a, b, c) { var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jc(k, j.opts.specialEasing) ; g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d; return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } m.Animation = m.extend(kc, { tweener: function (a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function (a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function (a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () { var b = kc(this, m.extend({}, a), f); (e || m._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && m.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), m.each(["toggle", "show", "hide"], function (a, b) { var c = m.fn[b]; m.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) } }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { m.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function () { var a, b = m.timers, c = 0; for ($b = m.now() ; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || m.fx.stop(), $b = void 0 }, m.fx.timer = function (a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function () { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function () { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value }(); var lc = /\r/g; m.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = m.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c) } } }), m.extend({ valHooks: { option: { get: function (a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) { if (b = m(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), m.each(["radio", "checkbox"], function () { m.valHooks[this] = { set: function (a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input; m.fn.extend({ attr: function (a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { m.removeAttr(this, a) }) } }), m.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), nc = { set: function (a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = oc[b] || m.find.attr; oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null } }), rc && qc || (m.attrHooks.value = { set: function (a, b, c) { return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function (a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function (a, b) { m.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i; m.fn.extend({ prop: function (a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = m.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) { m.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding"); var uc = /[\t\r\n\f]/g; m.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = m.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? m.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = m(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0; return !1 } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { m.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; m.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = m.trim(b + ""); return e && !m.trim(e.replace(xc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b) }, m.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c }; var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*"); try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href } yc = Gc.exec(zc.toLowerCase()) || []; function Lc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Mc(a, b, c, d) { var e = {}, f = a === Ic; function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a } function Oc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Pc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v; h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Mc(Ic, k, b, v)) { v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return m.get(a, b, c, "json") }, getScript: function (a, b) { return m.get(a, void 0, b, "script") } }), m.each(["get", "post"], function (a, b) { m[b] = function (a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { m.fn[b] = function (a) { return this.on(b, a) } }), m._evalUrl = function (a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({ wrapAll: function (a) { if (m.isFunction(a)) return this.each(function (b) { m(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = m(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(m.isFunction(a) ? function (b) { m(this).wrapInner(a.call(this, b)) } : function () { var b = m(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = m.isFunction(a); return this.each(function (c) { m(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() } }), m.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function (a) { return !m.expr.filters.hidden(a) }; var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i; function Vc(a, b, c, d) { var e; if (m.isArray(b)) m.each(b, function (b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vc(a + "[" + e + "]", b[e], c, d) } m.param = function (a, b) { var c, d = [], e = function (a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () { e(this.name, this.value) }); else for (c in a) Vc(c, a[c], b, e); return d.join("&").replace(Qc, "+") }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function (a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function (a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc; var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr(); a.ActiveXObject && m(a).on("unload", function () { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) { if (!a.crossDomain || k.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Wc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function Zc() { try { return new a.XMLHttpRequest } catch (b) { } } function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = y.head || m("head")[0] || y.documentElement; return { send: function (d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var _c = [], ad = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)) }; var bd = m.fn.load; m.fn.load = function (a, b, c) { if ("string" != typeof a && bd) return bd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, m.expr.filters.animated = function (a) { return m.grep(m.timers, function (b) { return a === b.elem }).length }; var cd = a.document.documentElement; function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } m.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n) } }, m.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { m.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); m.fn[a] = function (d) { return V(this, function (a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), m.each(["top", "left"], function (a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function (a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { m.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function (b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), m.fn.size = function () { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return m }); var ed = a.jQuery, fd = a.$; return m.noConflict = function (b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
}),

function () {
    var $ = jQuery.noConflict(!0);

    "undefined" == typeof BPR && (BPR = {
        host: "https://productreviews.bizwebapps.vn/"
        , trackingInit: false
        , store: Bizweb.store
        , extraAjaxParams: {
            store: Bizweb.store
        }
        , starColor: "inherit"
        , lang: 'vi'
        , bodyMax: 1500
        , config: {}
        , badgeEls: []
        , reviewEl: null
        , moduleEl: null
        , product: null
        , language: {}
        , cookie_expire: 24
        , cookies: {}
        /*!
         * fancyBox - jQuery Plugin
         * version: 2.1.5 (Fri, 14 Jun 2013)
         * @requires jQuery v1.6 or later
         *
         * Examples at http://fancyapps.com/fancybox/
         * License: www.fancyapps.com/fancybox/#license
         *
         * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
         *
         */
        , fancybox: function (window, document, $, undefined) {
            "use strict";

            var H = $("html"),
		    W = $(window),
		    D = $(document),
		    F = $.fancybox = function () {
		        F.open.apply(this, arguments);
		    },
		    IE = navigator.userAgent.match(/msie/i),
		    didUpdate = null,
		    isTouch = document.createTouch !== undefined,

		    isQuery = function (obj) {
		        return obj && obj.hasOwnProperty && obj instanceof $;
		    },
		    isString = function (str) {
		        return str && $.type(str) === "string";
		    },
		    isPercentage = function (str) {
		        return isString(str) && str.indexOf('%') > 0;
		    },
		    isScrollable = function (el) {
		        return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		    },
		    getScalar = function (orig, dim) {
		        var value = parseInt(orig, 10) || 0;

		        if (dim && isPercentage(orig)) {
		            value = F.getViewport()[dim] / 100 * value;
		        }

		        return Math.ceil(value);
		    },
		    getValue = function (value, dim) {
		        return getScalar(value, dim) + 'px';
		    };

            $.extend(F, {
                // The current version of fancyBox
                version: '2.1.5',

                defaults: {
                    padding: 15,
                    margin: 20,

                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1, // Set to 2 for retina display support

                    autoSize: true,
                    autoHeight: false,
                    autoWidth: false,

                    autoResize: true,
                    autoCenter: !isTouch,
                    fitToView: true,
                    aspectRatio: false,
                    topRatio: 0.5,
                    leftRatio: 0.5,

                    scrolling: 'auto', // 'auto', 'yes' or 'no'
                    wrapCSS: '',

                    arrows: true,
                    closeBtn: true,
                    closeClick: false,
                    nextClick: false,
                    mouseWheel: true,
                    autoPlay: false,
                    playSpeed: 3000,
                    preload: 3,
                    modal: false,
                    loop: true,

                    ajax: {
                        dataType: 'html',
                        headers: { 'X-fancyBox': true }
                    },
                    iframe: {
                        scrolling: 'auto',
                        preload: true
                    },
                    swf: {
                        wmode: 'transparent',
                        allowfullscreen: 'true',
                        allowscriptaccess: 'always'
                    },

                    keys: {
                        next: {
                            13: 'left', // enter
                            34: 'up',   // page down
                            39: 'left', // right arrow
                            40: 'up'    // down arrow
                        },
                        prev: {
                            8: 'right',  // backspace
                            33: 'down',   // page up
                            37: 'right',  // left arrow
                            38: 'down'    // up arrow
                        },
                        close: [27], // escape key
                        play: [32], // space - start/stop slideshow
                        toggle: [70]  // letter "f" - toggle fullscreen
                    },

                    direction: {
                        next: 'left',
                        prev: 'right'
                    },

                    scrollOutside: true,

                    // Override some properties
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,

                    // HTML templates
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },

                    // Properties for each animation type
                    // Opening fancyBox
                    openEffect: 'fade', // 'elastic', 'fade' or 'none'
                    openSpeed: 250,
                    openEasing: 'swing',
                    openOpacity: true,
                    openMethod: 'zoomIn',

                    // Closing fancyBox
                    closeEffect: 'fade', // 'elastic', 'fade' or 'none'
                    closeSpeed: 250,
                    closeEasing: 'swing',
                    closeOpacity: true,
                    closeMethod: 'zoomOut',

                    // Changing next gallery item
                    nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
                    nextSpeed: 250,
                    nextEasing: 'swing',
                    nextMethod: 'changeIn',

                    // Changing previous gallery item
                    prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
                    prevSpeed: 250,
                    prevEasing: 'swing',
                    prevMethod: 'changeOut',

                    // Enable default helpers
                    helpers: {
                        overlay: true,
                        title: true
                    },

                    // Callbacks
                    onCancel: $.noop, // If canceling
                    beforeLoad: $.noop, // Before loading
                    afterLoad: $.noop, // After loading
                    beforeShow: $.noop, // Before changing in current item
                    afterShow: $.noop, // After opening
                    beforeChange: $.noop, // Before changing gallery item
                    beforeClose: $.noop, // Before closing
                    afterClose: $.noop  // After closing
                },

                //Current state
                group: {}, // Selected group
                opts: {}, // Group options
                previous: null,  // Previous element
                coming: null,  // Element being loaded
                current: null,  // Currently loaded element
                isActive: false, // Is activated
                isOpen: false, // Is currently open
                isOpened: false, // Have been fully opened at least once

                wrap: null,
                skin: null,
                outer: null,
                inner: null,

                player: {
                    timer: null,
                    isActive: false
                },

                // Loaders
                ajaxLoad: null,
                imgPreload: null,

                // Some collections
                transitions: {},
                helpers: {},

                /*
                 *	Static methods
                 */

                open: function (group, opts) {
                    if (!group) {
                        return;
                    }

                    if (!$.isPlainObject(opts)) {
                        opts = {};
                    }

                    // Close if already active
                    if (false === F.close(true)) {
                        return;
                    }

                    // Normalize group
                    if (!$.isArray(group)) {
                        group = isQuery(group) ? $(group).get() : [group];
                    }

                    // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
                    $.each(group, function (i, element) {
                        var obj = {},
                            href,
                            title,
                            content,
                            type,
                            rez,
                            hrefParts,
                            selector;

                        if ($.type(element) === "object") {
                            // Check if is DOM element
                            if (element.nodeType) {
                                element = $(element);
                            }

                            if (isQuery(element)) {
                                obj = {
                                    href: element.data('fancybox-href') || element.attr('href'),
                                    title: element.data('fancybox-title') || element.attr('title'),
                                    isDom: true,
                                    element: element
                                };

                                if ($.metadata) {
                                    $.extend(true, obj, element.metadata());
                                }

                            } else {
                                obj = element;
                            }
                        }

                        href = opts.href || obj.href || (isString(element) ? element : null);
                        title = opts.title !== undefined ? opts.title : obj.title || '';

                        content = opts.content || obj.content;
                        type = content ? 'html' : (opts.type || obj.type);

                        if (!type && obj.isDom) {
                            type = element.data('fancybox-type');

                            if (!type) {
                                rez = element.prop('class').match(/fancybox\.(\w+)/);
                                type = rez ? rez[1] : null;
                            }
                        }

                        if (isString(href)) {
                            // Try to guess the content type
                            if (!type) {
                                if (F.isImage(href)) {
                                    type = 'image';

                                } else if (F.isSWF(href)) {
                                    type = 'swf';

                                } else if (href.charAt(0) === '#') {
                                    type = 'inline';

                                } else if (isString(element)) {
                                    type = 'html';
                                    content = element;
                                }
                            }

                            // Split url into two pieces with source url and content selector, e.g,
                            // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                            if (type === 'ajax') {
                                hrefParts = href.split(/\s+/, 2);
                                href = hrefParts.shift();
                                selector = hrefParts.shift();
                            }
                        }

                        if (!content) {
                            if (type === 'inline') {
                                if (href) {
                                    content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                                } else if (obj.isDom) {
                                    content = element;
                                }

                            } else if (type === 'html') {
                                content = href;

                            } else if (!type && !href && obj.isDom) {
                                type = 'inline';
                                content = element;
                            }
                        }

                        $.extend(obj, {
                            href: href,
                            type: type,
                            content: content,
                            title: title,
                            selector: selector
                        });

                        group[i] = obj;
                    });

                    // Extend the defaults
                    F.opts = $.extend(true, {}, F.defaults, opts);

                    // All options are merged recursive except keys
                    if (opts.keys !== undefined) {
                        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
                    }

                    F.group = group;

                    return F._start(F.opts.index);
                },

                // Cancel image loading or abort ajax request
                cancel: function () {
                    var coming = F.coming;

                    if (!coming || false === F.trigger('onCancel')) {
                        return;
                    }

                    F.hideLoading();

                    if (F.ajaxLoad) {
                        F.ajaxLoad.abort();
                    }

                    F.ajaxLoad = null;

                    if (F.imgPreload) {
                        F.imgPreload.onload = F.imgPreload.onerror = null;
                    }

                    if (coming.wrap) {
                        coming.wrap.stop(true, true).trigger('onReset').remove();
                    }

                    F.coming = null;

                    // If the first item has been canceled, then clear everything
                    if (!F.current) {
                        F._afterZoomOut(coming);
                    }
                },

                // Start closing animation if is open; remove immediately if opening/closing
                close: function (event) {
                    F.cancel();

                    if (false === F.trigger('beforeClose')) {
                        return;
                    }

                    F.unbindEvents();

                    if (!F.isActive) {
                        return;
                    }

                    if (!F.isOpen || event === true) {
                        $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                        F._afterZoomOut();

                    } else {
                        F.isOpen = F.isOpened = false;
                        F.isClosing = true;

                        $('.fancybox-item, .fancybox-nav').remove();

                        F.wrap.stop(true, true).removeClass('fancybox-opened');

                        F.transitions[F.current.closeMethod]();
                    }
                },

                // Manage slideshow:
                //   $.fancybox.play(); - toggle slideshow
                //   $.fancybox.play( true ); - start
                //   $.fancybox.play( false ); - stop
                play: function (action) {
                    var clear = function () {
                        clearTimeout(F.player.timer);
                    },
                        set = function () {
                            clear();

                            if (F.current && F.player.isActive) {
                                F.player.timer = setTimeout(F.next, F.current.playSpeed);
                            }
                        },
                        stop = function () {
                            clear();

                            D.unbind('.player');

                            F.player.isActive = false;

                            F.trigger('onPlayEnd');
                        },
                        start = function () {
                            if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                                F.player.isActive = true;

                                D.bind({
                                    'onCancel.player beforeClose.player': stop,
                                    'onUpdate.player': set,
                                    'beforeLoad.player': clear
                                });

                                set();

                                F.trigger('onPlayStart');
                            }
                        };

                    if (action === true || (!F.player.isActive && action !== false)) {
                        start();
                    } else {
                        stop();
                    }
                },

                // Navigate to next gallery item
                next: function (direction) {
                    var current = F.current;

                    if (current) {
                        if (!isString(direction)) {
                            direction = current.direction.next;
                        }

                        F.jumpto(current.index + 1, direction, 'next');
                    }
                },

                // Navigate to previous gallery item
                prev: function (direction) {
                    var current = F.current;

                    if (current) {
                        if (!isString(direction)) {
                            direction = current.direction.prev;
                        }

                        F.jumpto(current.index - 1, direction, 'prev');
                    }
                },

                // Navigate to gallery item by index
                jumpto: function (index, direction, router) {
                    var current = F.current;

                    if (!current) {
                        return;
                    }

                    index = getScalar(index);

                    F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
                    F.router = router || 'jumpto';

                    if (current.loop) {
                        if (index < 0) {
                            index = current.group.length + (index % current.group.length);
                        }

                        index = index % current.group.length;
                    }

                    if (current.group[index] !== undefined) {
                        F.cancel();

                        F._start(index);
                    }
                },

                // Center inside viewport and toggle position type to fixed or absolute if needed
                reposition: function (e, onlyAbsolute) {
                    var current = F.current,
                        wrap = current ? current.wrap : null,
                        pos;

                    if (wrap) {
                        pos = F._getPosition(onlyAbsolute);

                        if (e && e.type === 'scroll') {
                            delete pos.position;

                            wrap.stop(true, true).animate(pos, 200);

                        } else {
                            wrap.css(pos);

                            current.pos = $.extend({}, current.dim, pos);
                        }
                    }
                },

                update: function (e) {
                    var type = (e && e.type),
                        anyway = !type || type === 'orientationchange';

                    if (anyway) {
                        clearTimeout(didUpdate);

                        didUpdate = null;
                    }

                    if (!F.isOpen || didUpdate) {
                        return;
                    }

                    didUpdate = setTimeout(function () {
                        var current = F.current;

                        if (!current || F.isClosing) {
                            return;
                        }

                        F.wrap.removeClass('fancybox-tmp');

                        if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                            F._setDimension();
                        }

                        if (!(type === 'scroll' && current.canShrink)) {
                            F.reposition(e);
                        }

                        F.trigger('onUpdate');

                        didUpdate = null;

                    }, (anyway && !isTouch ? 0 : 300));
                },

                // Shrink content to fit inside viewport or restore if resized
                toggle: function (action) {
                    if (F.isOpen) {
                        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                        // Help browser to restore document dimensions
                        if (isTouch) {
                            F.wrap.removeAttr('style').addClass('fancybox-tmp');

                            F.trigger('onUpdate');
                        }

                        F.update();
                    }
                },

                hideLoading: function () {
                    D.unbind('.loading');

                    $('#fancybox-loading').remove();
                },

                showLoading: function () {
                    var el, viewport;

                    F.hideLoading();

                    el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

                    // If user will press the escape-button, the request will be canceled
                    D.bind('keydown.loading', function (e) {
                        if ((e.which || e.keyCode) === 27) {
                            e.preventDefault();

                            F.cancel();
                        }
                    });

                    if (!F.defaults.fixed) {
                        viewport = F.getViewport();

                        el.css({
                            position: 'absolute',
                            top: (viewport.h * 0.5) + viewport.y,
                            left: (viewport.w * 0.5) + viewport.x
                        });
                    }
                },

                getViewport: function () {
                    var locked = (F.current && F.current.locked) || false,
                        rez = {
                            x: W.scrollLeft(),
                            y: W.scrollTop()
                        };

                    if (locked) {
                        rez.w = locked[0].clientWidth;
                        rez.h = locked[0].clientHeight;

                    } else {
                        // See http://bugs.jquery.com/ticket/6724
                        rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                        rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
                    }

                    return rez;
                },

                // Unbind the keyboard / clicking actions
                unbindEvents: function () {
                    if (F.wrap && isQuery(F.wrap)) {
                        F.wrap.unbind('.fb');
                    }

                    D.unbind('.fb');
                    W.unbind('.fb');
                },

                bindEvents: function () {
                    var current = F.current,
                        keys;

                    if (!current) {
                        return;
                    }

                    // Changing document height on iOS devices triggers a 'resize' event,
                    // that can change document height... repeating infinitely
                    W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

                    keys = current.keys;

                    if (keys) {
                        D.bind('keydown.fb', function (e) {
                            var code = e.which || e.keyCode,
                                target = e.target || e.srcElement;

                            // Skip esc key if loading, because showLoading will cancel preloading
                            if (code === 27 && F.coming) {
                                return false;
                            }

                            // Ignore key combinations and key events within form elements
                            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                                $.each(keys, function (i, val) {
                                    if (current.group.length > 1 && val[code] !== undefined) {
                                        F[i](val[code]);

                                        e.preventDefault();
                                        return false;
                                    }

                                    if ($.inArray(code, val) > -1) {
                                        F[i]();

                                        e.preventDefault();
                                        return false;
                                    }
                                });
                            }
                        });
                    }

                    if ($.fn.mousewheel && current.mouseWheel) {
                        F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                            var target = e.target || null,
                                parent = $(target),
                                canScroll = false;

                            while (parent.length) {
                                if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                                    break;
                                }

                                canScroll = isScrollable(parent[0]);
                                parent = $(parent).parent();
                            }

                            if (delta !== 0 && !canScroll) {
                                if (F.group.length > 1 && !current.canShrink) {
                                    if (deltaY > 0 || deltaX > 0) {
                                        F.prev(deltaY > 0 ? 'down' : 'left');

                                    } else if (deltaY < 0 || deltaX < 0) {
                                        F.next(deltaY < 0 ? 'up' : 'right');
                                    }

                                    e.preventDefault();
                                }
                            }
                        });
                    }
                },

                trigger: function (event, o) {
                    var ret, obj = o || F.coming || F.current;

                    if (!obj) {
                        return;
                    }

                    if ($.isFunction(obj[event])) {
                        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                    }

                    if (ret === false) {
                        return false;
                    }

                    if (obj.helpers) {
                        $.each(obj.helpers, function (helper, opts) {
                            if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                                F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                            }
                        });
                    }

                    D.trigger(event);
                },

                isImage: function (str) {
                    return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                },

                isSWF: function (str) {
                    return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
                },

                _start: function (index) {
                    var coming = {},
                        obj,
                        href,
                        type,
                        margin,
                        padding;

                    index = getScalar(index);
                    obj = F.group[index] || null;

                    if (!obj) {
                        return false;
                    }

                    coming = $.extend(true, {}, F.opts, obj);

                    // Convert margin and padding properties to array - top, right, bottom, left
                    margin = coming.margin;
                    padding = coming.padding;

                    if ($.type(margin) === 'number') {
                        coming.margin = [margin, margin, margin, margin];
                    }

                    if ($.type(padding) === 'number') {
                        coming.padding = [padding, padding, padding, padding];
                    }

                    // 'modal' propery is just a shortcut
                    if (coming.modal) {
                        $.extend(true, coming, {
                            closeBtn: false,
                            closeClick: false,
                            nextClick: false,
                            arrows: false,
                            mouseWheel: false,
                            keys: null,
                            helpers: {
                                overlay: {
                                    closeClick: false
                                }
                            }
                        });
                    }

                    // 'autoSize' property is a shortcut, too
                    if (coming.autoSize) {
                        coming.autoWidth = coming.autoHeight = true;
                    }

                    if (coming.width === 'auto') {
                        coming.autoWidth = true;
                    }

                    if (coming.height === 'auto') {
                        coming.autoHeight = true;
                    }

                    /*
                     * Add reference to the group, so it`s possible to access from callbacks, example:
                     * afterLoad : function() {
                     *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                     * }
                     */

                    coming.group = F.group;
                    coming.index = index;

                    // Give a chance for callback or helpers to update coming item (type, title, etc)
                    F.coming = coming;

                    if (false === F.trigger('beforeLoad')) {
                        F.coming = null;

                        return;
                    }

                    type = coming.type;
                    href = coming.href;

                    if (!type) {
                        F.coming = null;

                        //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                        if (F.current && F.router && F.router !== 'jumpto') {
                            F.current.index = index;

                            return F[F.router](F.direction);
                        }

                        return false;
                    }

                    F.isActive = true;

                    if (type === 'image' || type === 'swf') {
                        coming.autoHeight = coming.autoWidth = false;
                        coming.scrolling = 'visible';
                    }

                    if (type === 'image') {
                        coming.aspectRatio = true;
                    }

                    if (type === 'iframe' && isTouch) {
                        coming.scrolling = 'scroll';
                    }

                    // Build the neccessary markup
                    coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

                    $.extend(coming, {
                        skin: $('.fancybox-skin', coming.wrap),
                        outer: $('.fancybox-outer', coming.wrap),
                        inner: $('.fancybox-inner', coming.wrap)
                    });

                    $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                        coming.skin.css('padding' + v, getValue(coming.padding[i]));
                    });

                    F.trigger('onReady');

                    // Check before try to load; 'inline' and 'html' types need content, others - href
                    if (type === 'inline' || type === 'html') {
                        if (!coming.content || !coming.content.length) {
                            return F._error('content');
                        }

                    } else if (!href) {
                        return F._error('href');
                    }

                    if (type === 'image') {
                        F._loadImage();

                    } else if (type === 'ajax') {
                        F._loadAjax();

                    } else if (type === 'iframe') {
                        F._loadIframe();

                    } else {
                        F._afterLoad();
                    }
                },

                _error: function (type) {
                    $.extend(F.coming, {
                        type: 'html',
                        autoWidth: true,
                        autoHeight: true,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: 'no',
                        hasError: type,
                        content: F.coming.tpl.error
                    });

                    F._afterLoad();
                },

                _loadImage: function () {
                    // Reset preload image so it is later possible to check "complete" property
                    var img = F.imgPreload = new Image();

                    img.onload = function () {
                        this.onload = this.onerror = null;

                        F.coming.width = this.width / F.opts.pixelRatio;
                        F.coming.height = this.height / F.opts.pixelRatio;

                        F._afterLoad();
                    };

                    img.onerror = function () {
                        this.onload = this.onerror = null;

                        F._error('image');
                    };

                    img.src = F.coming.href;

                    if (img.complete !== true) {
                        F.showLoading();
                    }
                },

                _loadAjax: function () {
                    var coming = F.coming;

                    F.showLoading();

                    F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                        url: coming.href,
                        error: function (jqXHR, textStatus) {
                            if (F.coming && textStatus !== 'abort') {
                                F._error('ajax', jqXHR);

                            } else {
                                F.hideLoading();
                            }
                        },
                        success: function (data, textStatus) {
                            if (textStatus === 'success') {
                                coming.content = data;

                                F._afterLoad();
                            }
                        }
                    }));
                },

                _loadIframe: function () {
                    var coming = F.coming,
                        iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                            .attr('src', coming.href);

                    // This helps IE
                    $(coming.wrap).bind('onReset', function () {
                        try {
                            $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                        } catch (e) { }
                    });

                    if (coming.iframe.preload) {
                        F.showLoading();

                        iframe.one('load', function () {
                            $(this).data('ready', 1);

                            // iOS will lose scrolling if we resize
                            if (!isTouch) {
                                $(this).bind('load.fb', F.update);
                            }

                            // Without this trick:
                            //   - iframe won't scroll on iOS devices
                            //   - IE7 sometimes displays empty iframe
                            $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                            F._afterLoad();
                        });
                    }

                    coming.content = iframe.appendTo(coming.inner);

                    if (!coming.iframe.preload) {
                        F._afterLoad();
                    }
                },

                _preloadImages: function () {
                    var group = F.group,
                        current = F.current,
                        len = group.length,
                        cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                        item,
                        i;

                    for (i = 1; i <= cnt; i += 1) {
                        item = group[(current.index + i) % len];

                        if (item.type === 'image' && item.href) {
                            new Image().src = item.href;
                        }
                    }
                },

                _afterLoad: function () {
                    var coming = F.coming,
                        previous = F.current,
                        placeholder = 'fancybox-placeholder',
                        current,
                        content,
                        type,
                        scrolling,
                        href,
                        embed;

                    F.hideLoading();

                    if (!coming || F.isActive === false) {
                        return;
                    }

                    if (false === F.trigger('afterLoad', coming, previous)) {
                        coming.wrap.stop(true).trigger('onReset').remove();

                        F.coming = null;

                        return;
                    }

                    if (previous) {
                        F.trigger('beforeChange', previous);

                        previous.wrap.stop(true).removeClass('fancybox-opened')
                            .find('.fancybox-item, .fancybox-nav')
                            .remove();
                    }

                    F.unbindEvents();

                    current = coming;
                    content = coming.content;
                    type = coming.type;
                    scrolling = coming.scrolling;

                    $.extend(F, {
                        wrap: current.wrap,
                        skin: current.skin,
                        outer: current.outer,
                        inner: current.inner,
                        current: current,
                        previous: previous
                    });

                    href = current.href;

                    switch (type) {
                        case 'inline':
                        case 'ajax':
                        case 'html':
                            if (current.selector) {
                                content = $('<div>').html(content).find(current.selector);

                            } else if (isQuery(content)) {
                                if (!content.data(placeholder)) {
                                    content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                                }

                                content = content.show().detach();

                                current.wrap.bind('onReset', function () {
                                    if ($(this).find(content).length) {
                                        content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                                    }
                                });
                            }
                            break;

                        case 'image':
                            content = current.tpl.image.replace('{href}', href);
                            break;

                        case 'swf':
                            content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                            embed = '';

                            $.each(current.swf, function (name, val) {
                                content += '<param name="' + name + '" value="' + val + '"></param>';
                                embed += ' ' + name + '="' + val + '"';
                            });

                            content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                            break;
                    }

                    if (!(isQuery(content) && content.parent().is(current.inner))) {
                        current.inner.append(content);
                    }

                    // Give a chance for helpers or callbacks to update elements
                    F.trigger('beforeShow');

                    // Set scrolling before calculating dimensions
                    current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

                    // Set initial dimensions and start position
                    F._setDimension();

                    F.reposition();

                    F.isOpen = false;
                    F.coming = null;

                    F.bindEvents();

                    if (!F.isOpened) {
                        $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

                    } else if (previous.prevMethod) {
                        F.transitions[previous.prevMethod]();
                    }

                    F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

                    F._preloadImages();
                },

                _setDimension: function () {
                    var viewport = F.getViewport(),
                        steps = 0,
                        canShrink = false,
                        canExpand = false,
                        wrap = F.wrap,
                        skin = F.skin,
                        inner = F.inner,
                        current = F.current,
                        width = current.width,
                        height = current.height,
                        minWidth = current.minWidth,
                        minHeight = current.minHeight,
                        maxWidth = current.maxWidth,
                        maxHeight = current.maxHeight,
                        scrolling = current.scrolling,
                        scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                        margin = current.margin,
                        wMargin = getScalar(margin[1] + margin[3]),
                        hMargin = getScalar(margin[0] + margin[2]),
                        wPadding,
                        hPadding,
                        wSpace,
                        hSpace,
                        origWidth,
                        origHeight,
                        origMaxWidth,
                        origMaxHeight,
                        ratio,
                        width_,
                        height_,
                        maxWidth_,
                        maxHeight_,
                        iframe,
                        body;

                    // Reset dimensions so we could re-check actual size
                    wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

                    wPadding = getScalar(skin.outerWidth(true) - skin.width());
                    hPadding = getScalar(skin.outerHeight(true) - skin.height());

                    // Any space between content and viewport (margin, padding, border, title)
                    wSpace = wMargin + wPadding;
                    hSpace = hMargin + hPadding;

                    origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
                    origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

                    if (current.type === 'iframe') {
                        iframe = current.content;

                        if (current.autoHeight && iframe.data('ready') === 1) {
                            try {
                                if (iframe[0].contentWindow.document.location) {
                                    inner.width(origWidth).height(9999);

                                    body = iframe.contents().find('body');

                                    if (scrollOut) {
                                        body.css('overflow-x', 'hidden');
                                    }

                                    origHeight = body.outerHeight(true);
                                }

                            } catch (e) { }
                        }

                    } else if (current.autoWidth || current.autoHeight) {
                        inner.addClass('fancybox-tmp');

                        // Set width or height in case we need to calculate only one dimension
                        if (!current.autoWidth) {
                            inner.width(origWidth);
                        }

                        if (!current.autoHeight) {
                            inner.height(origHeight);
                        }

                        if (current.autoWidth) {
                            origWidth = inner.width();
                        }

                        if (current.autoHeight) {
                            origHeight = inner.height();
                        }

                        inner.removeClass('fancybox-tmp');
                    }

                    width = getScalar(origWidth);
                    height = getScalar(origHeight);

                    ratio = origWidth / origHeight;

                    // Calculations for the content
                    minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
                    maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

                    minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
                    maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

                    // These will be used to determine if wrap can fit in the viewport
                    origMaxWidth = maxWidth;
                    origMaxHeight = maxHeight;

                    if (current.fitToView) {
                        maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                        maxHeight = Math.min(viewport.h - hSpace, maxHeight);
                    }

                    maxWidth_ = viewport.w - wMargin;
                    maxHeight_ = viewport.h - hMargin;

                    if (current.aspectRatio) {
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        if (height > maxHeight) {
                            height = maxHeight;
                            width = getScalar(height * ratio);
                        }

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (height < minHeight) {
                            height = minHeight;
                            width = getScalar(height * ratio);
                        }

                    } else {
                        width = Math.max(minWidth, Math.min(width, maxWidth));

                        if (current.autoHeight && current.type !== 'iframe') {
                            inner.width(width);

                            height = inner.height();
                        }

                        height = Math.max(minHeight, Math.min(height, maxHeight));
                    }

                    // Try to fit inside viewport (including the title)
                    if (current.fitToView) {
                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        // Real wrap dimensions
                        width_ = wrap.width();
                        height_ = wrap.height();

                        if (current.aspectRatio) {
                            while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                                if (steps++ > 19) {
                                    break;
                                }

                                height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                                width = getScalar(height * ratio);

                                if (width < minWidth) {
                                    width = minWidth;
                                    height = getScalar(width / ratio);
                                }

                                if (width > maxWidth) {
                                    width = maxWidth;
                                    height = getScalar(width / ratio);
                                }

                                inner.width(width).height(height);

                                wrap.width(width + wPadding);

                                width_ = wrap.width();
                                height_ = wrap.height();
                            }

                        } else {
                            width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                            height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                        }
                    }

                    if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                        width += scrollOut;
                    }

                    inner.width(width).height(height);

                    wrap.width(width + wPadding);

                    width_ = wrap.width();
                    height_ = wrap.height();

                    canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
                    canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

                    $.extend(current, {
                        dim: {
                            width: getValue(width_),
                            height: getValue(height_)
                        },
                        origWidth: origWidth,
                        origHeight: origHeight,
                        canShrink: canShrink,
                        canExpand: canExpand,
                        wPadding: wPadding,
                        hPadding: hPadding,
                        wrapSpace: height_ - skin.outerHeight(true),
                        skinSpace: skin.height() - height
                    });

                    if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                        inner.height('auto');
                    }
                },

                _getPosition: function (onlyAbsolute) {
                    var current = F.current,
                        viewport = F.getViewport(),
                        margin = current.margin,
                        width = F.wrap.width() + margin[1] + margin[3],
                        height = F.wrap.height() + margin[0] + margin[2],
                        rez = {
                            position: 'absolute',
                            top: margin[0],
                            left: margin[3]
                        };

                    if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                        rez.position = 'fixed';

                    } else if (!current.locked) {
                        rez.top += viewport.y;
                        rez.left += viewport.x;
                    }

                    rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
                    rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

                    return rez;
                },

                _afterZoomIn: function () {
                    var current = F.current;

                    if (!current) {
                        return;
                    }

                    F.isOpen = F.isOpened = true;

                    F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

                    F.update();

                    // Assign a click event
                    if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                        F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                            if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                                e.preventDefault();

                                F[current.closeClick ? 'close' : 'next']();
                            }
                        });
                    }

                    // Create a close button
                    if (current.closeBtn) {
                        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                            e.preventDefault();

                            F.close();
                        });
                    }

                    // Create navigation arrows
                    if (current.arrows && F.group.length > 1) {
                        if (current.loop || current.index > 0) {
                            $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                        }

                        if (current.loop || current.index < F.group.length - 1) {
                            $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                        }
                    }

                    F.trigger('afterShow');

                    // Stop the slideshow if this is the last item
                    if (!current.loop && current.index === current.group.length - 1) {
                        F.play(false);

                    } else if (F.opts.autoPlay && !F.player.isActive) {
                        F.opts.autoPlay = false;

                        F.play();
                    }
                },

                _afterZoomOut: function (obj) {
                    obj = obj || F.current;

                    $('.fancybox-wrap').trigger('onReset').remove();

                    $.extend(F, {
                        group: {},
                        opts: {},
                        router: false,
                        current: null,
                        isActive: false,
                        isOpened: false,
                        isOpen: false,
                        isClosing: false,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    });

                    F.trigger('afterClose', obj);
                }
            });

            /*
             *	Default transitions
             */

            F.transitions = {
                getOrigPosition: function () {
                    var current = F.current,
                        element = current.element,
                        orig = current.orig,
                        pos = {},
                        width = 50,
                        height = 50,
                        hPadding = current.hPadding,
                        wPadding = current.wPadding,
                        viewport = F.getViewport();

                    if (!orig && current.isDom && element.is(':visible')) {
                        orig = element.find('img:first');

                        if (!orig.length) {
                            orig = element;
                        }
                    }

                    if (isQuery(orig)) {
                        pos = orig.offset();

                        if (orig.is('img')) {
                            width = orig.outerWidth();
                            height = orig.outerHeight();
                        }

                    } else {
                        pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                        pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
                    }

                    if (F.wrap.css('position') === 'fixed' || current.locked) {
                        pos.top -= viewport.y;
                        pos.left -= viewport.x;
                    }

                    pos = {
                        top: getValue(pos.top - hPadding * current.topRatio),
                        left: getValue(pos.left - wPadding * current.leftRatio),
                        width: getValue(width + wPadding),
                        height: getValue(height + hPadding)
                    };

                    return pos;
                },

                step: function (now, fx) {
                    var ratio,
                        padding,
                        value,
                        prop = fx.prop,
                        current = F.current,
                        wrapSpace = current.wrapSpace,
                        skinSpace = current.skinSpace;

                    if (prop === 'width' || prop === 'height') {
                        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                        if (F.isClosing) {
                            ratio = 1 - ratio;
                        }

                        padding = prop === 'width' ? current.wPadding : current.hPadding;
                        value = now - padding;

                        F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                        F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
                    }
                },

                zoomIn: function () {
                    var current = F.current,
                        startPos = current.pos,
                        effect = current.openEffect,
                        elastic = effect === 'elastic',
                        endPos = $.extend({ opacity: 1 }, startPos);

                    // Remove "position" property that breaks older IE
                    delete endPos.position;

                    if (elastic) {
                        startPos = this.getOrigPosition();

                        if (current.openOpacity) {
                            startPos.opacity = 0.1;
                        }

                    } else if (effect === 'fade') {
                        startPos.opacity = 0.1;
                    }

                    F.wrap.css(startPos).animate(endPos, {
                        duration: effect === 'none' ? 0 : current.openSpeed,
                        easing: current.openEasing,
                        step: elastic ? this.step : null,
                        complete: F._afterZoomIn
                    });
                },

                zoomOut: function () {
                    var current = F.current,
                        effect = current.closeEffect,
                        elastic = effect === 'elastic',
                        endPos = { opacity: 0.1 };

                    if (elastic) {
                        endPos = this.getOrigPosition();

                        if (current.closeOpacity) {
                            endPos.opacity = 0.1;
                        }
                    }

                    F.wrap.animate(endPos, {
                        duration: effect === 'none' ? 0 : current.closeSpeed,
                        easing: current.closeEasing,
                        step: elastic ? this.step : null,
                        complete: F._afterZoomOut
                    });
                },

                changeIn: function () {
                    var current = F.current,
                        effect = current.nextEffect,
                        startPos = current.pos,
                        endPos = { opacity: 1 },
                        direction = F.direction,
                        distance = 200,
                        field;

                    startPos.opacity = 0.1;

                    if (effect === 'elastic') {
                        field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                        if (direction === 'down' || direction === 'right') {
                            startPos[field] = getValue(getScalar(startPos[field]) - distance);
                            endPos[field] = '+=' + distance + 'px';

                        } else {
                            startPos[field] = getValue(getScalar(startPos[field]) + distance);
                            endPos[field] = '-=' + distance + 'px';
                        }
                    }

                    // Workaround for http://bugs.jquery.com/ticket/12273
                    if (effect === 'none') {
                        F._afterZoomIn();

                    } else {
                        F.wrap.css(startPos).animate(endPos, {
                            duration: current.nextSpeed,
                            easing: current.nextEasing,
                            complete: F._afterZoomIn
                        });
                    }
                },

                changeOut: function () {
                    var previous = F.previous,
                        effect = previous.prevEffect,
                        endPos = { opacity: 0.1 },
                        direction = F.direction,
                        distance = 200;

                    if (effect === 'elastic') {
                        endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
                    }

                    previous.wrap.animate(endPos, {
                        duration: effect === 'none' ? 0 : previous.prevSpeed,
                        easing: previous.prevEasing,
                        complete: function () {
                            $(this).trigger('onReset').remove();
                        }
                    });
                }
            };

            /*
             *	Overlay helper
             */

            F.helpers.overlay = {
                defaults: {
                    closeClick: true,      // if true, fancyBox will be closed when user clicks on the overlay
                    speedOut: 200,       // duration of fadeOut animation
                    showEarly: true,      // indicates if should be opened immediately or wait until the content is ready
                    css: {},        // custom CSS properties
                    locked: !isTouch,  // if true, the content will be locked into overlay
                    fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
                },

                overlay: null,      // current handle
                fixed: false,     // indicates if the overlay has position "fixed"
                el: $('html'), // element that contains "the lock"

                // Public methods
                create: function (opts) {
                    opts = $.extend({}, this.defaults, opts);

                    if (this.overlay) {
                        this.close();
                    }

                    this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
                    this.fixed = false;

                    if (opts.fixed && F.defaults.fixed) {
                        this.overlay.addClass('fancybox-overlay-fixed');

                        this.fixed = true;
                    }
                },

                open: function (opts) {
                    var that = this;

                    opts = $.extend({}, this.defaults, opts);

                    if (this.overlay) {
                        this.overlay.unbind('.overlay').width('auto').height('auto');

                    } else {
                        this.create(opts);
                    }

                    if (!this.fixed) {
                        W.bind('resize.overlay', $.proxy(this.update, this));

                        this.update();
                    }

                    if (opts.closeClick) {
                        this.overlay.bind('click.overlay', function (e) {
                            if ($(e.target).hasClass('fancybox-overlay')) {
                                if (F.isActive) {
                                    F.close();
                                } else {
                                    that.close();
                                }

                                return false;
                            }
                        });
                    }

                    this.overlay.css(opts.css).show();
                },

                close: function () {
                    var scrollV, scrollH;

                    W.unbind('resize.overlay');

                    if (this.el.hasClass('fancybox-lock')) {
                        $('.fancybox-margin').removeClass('fancybox-margin');

                        scrollV = W.scrollTop();
                        scrollH = W.scrollLeft();

                        this.el.removeClass('fancybox-lock');

                        W.scrollTop(scrollV).scrollLeft(scrollH);
                    }

                    $('.fancybox-overlay').remove().hide();

                    $.extend(this, {
                        overlay: null,
                        fixed: false
                    });
                },

                // Private, callbacks

                update: function () {
                    var width = '100%', offsetWidth;

                    // Reset width/height so it will not mess
                    this.overlay.width(width).height('100%');

                    // jQuery does not return reliable result for IE
                    if (IE) {
                        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                        if (D.width() > offsetWidth) {
                            width = D.width();
                        }

                    } else if (D.width() > W.width()) {
                        width = D.width();
                    }

                    this.overlay.width(width).height(D.height());
                },

                // This is where we can manipulate DOM, because later it would cause iframes to reload
                onReady: function (opts, obj) {
                    var overlay = this.overlay;

                    $('.fancybox-overlay').stop(true, true);

                    if (!overlay) {
                        this.create(opts);
                    }

                    if (opts.locked && this.fixed && obj.fixed) {
                        if (!overlay) {
                            this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                        }

                        obj.locked = this.overlay.append(obj.wrap);
                        obj.fixed = false;
                    }

                    if (opts.showEarly === true) {
                        this.beforeShow.apply(this, arguments);
                    }
                },

                beforeShow: function (opts, obj) {
                    var scrollV, scrollH;

                    if (obj.locked) {
                        if (this.margin !== false) {
                            $('*').filter(function () {
                                return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                            }).addClass('fancybox-margin');

                            this.el.addClass('fancybox-margin');
                        }

                        scrollV = W.scrollTop();
                        scrollH = W.scrollLeft();

                        this.el.addClass('fancybox-lock');

                        W.scrollTop(scrollV).scrollLeft(scrollH);
                    }

                    this.open(opts);
                },

                onUpdate: function () {
                    if (!this.fixed) {
                        this.update();
                    }
                },

                afterClose: function (opts) {
                    // Remove overlay if exists and fancyBox is not opening
                    // (e.g., it is not being open using afterClose callback)
                    //if (this.overlay && !F.isActive) {
                    if (this.overlay && !F.coming) {
                        this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
                    }
                }
            };

            /*
             *	Title helper
             */

            F.helpers.title = {
                defaults: {
                    type: 'float', // 'float', 'inside', 'outside' or 'over',
                    position: 'bottom' // 'top' or 'bottom'
                },

                beforeShow: function (opts) {
                    var current = F.current,
                        text = current.title,
                        type = opts.type,
                        title,
                        target;

                    if ($.isFunction(text)) {
                        text = text.call(current.element, current);
                    }

                    if (!isString(text) || $.trim(text) === '') {
                        return;
                    }

                    title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

                    switch (type) {
                        case 'inside':
                            target = F.skin;
                            break;

                        case 'outside':
                            target = F.wrap;
                            break;

                        case 'over':
                            target = F.inner;
                            break;

                        default: // 'float'
                            target = F.skin;

                            title.appendTo('body');

                            if (IE) {
                                title.width(title.width());
                            }

                            title.wrapInner('<span class="child"></span>');

                            //Increase bottom margin so this title will also fit into viewport
                            F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                            break;
                    }

                    title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
                }
            };

            // jQuery plugin initialization
            $.fn.fancybox = function (options) {
                var index,
                    that = $(this),
                    selector = this.selector || '',
                    run = function (e) {
                        var what = $(this).blur(), idx = index, relType, relVal;

                        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                            relType = options.groupAttr || 'data-fancybox-group';
                            relVal = what.attr(relType);

                            if (!relVal) {
                                relType = 'rel';
                                relVal = what.get(0)[relType];
                            }

                            if (relVal && relVal !== '' && relVal !== 'nofollow') {
                                what = selector.length ? $(selector) : that;
                                what = what.filter('[' + relType + '="' + relVal + '"]');
                                idx = what.index(this);
                            }

                            options.index = idx;

                            // Stop an event from bubbling if everything is fine
                            if (F.open(what, options) !== false) {
                                e.preventDefault();
                            }
                        }
                    };

                options = options || {};
                index = options.index || 0;

                if (!selector || options.live === false) {
                    that.unbind('click.fb-start').bind('click.fb-start', run);

                } else {
                    D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
                }

                this.filter('[data-fancybox-start=1]').trigger('click');

                return this;
            };

            // Tests that need a body at doc ready
            D.ready(function () {
                var w1, w2;

                if ($.scrollbarWidth === undefined) {
                    // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
                    $.scrollbarWidth = function () {
                        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                            child = parent.children(),
                            width = child.innerWidth() - child.height(99).innerWidth();

                        parent.remove();

                        return width;
                    };
                }

                if ($.support.fixedPosition === undefined) {
                    $.support.fixedPosition = (function () {
                        var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                            fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                        elem.remove();

                        return fixed;
                    }());
                }

                $.extend(F.defaults, {
                    scrollbarWidth: $.scrollbarWidth(),
                    fixed: $.support.fixedPosition,
                    parent: $('body')
                });

                //Get real width of page scroll-bar
                w1 = $(window).width();

                H.addClass('fancybox-lock-test');

                w2 = $(window).width();

                H.removeClass('fancybox-lock-test');

                $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
            });

        }
        /*!
         * jQuery Raty - A Star Rating Plugin
         *
         * The MIT License
         *
         * @author  : Washington Botelho
         * @doc     : http://wbotelhos.com/raty
         * @version : 2.7.0
         *
         */
        , raty: function ($) {
            'use strict';

            var methods = {
                init: function (options) {
                    return this.each(function () {
                        this.self = $(this);

                        methods.destroy.call(this.self);

                        this.opt = $.extend(true, {}, $.fn.raty.defaults, options);

                        methods._adjustCallback.call(this);
                        methods._adjustNumber.call(this);
                        methods._adjustHints.call(this);

                        this.opt.score = methods._adjustedScore.call(this, this.opt.score);

                        if (this.opt.starType !== 'img') {
                            methods._adjustStarType.call(this);
                        }

                        methods._adjustPath.call(this);
                        methods._createStars.call(this);

                        if (this.opt.cancel) {
                            methods._createCancel.call(this);
                        }

                        if (this.opt.precision) {
                            methods._adjustPrecision.call(this);
                        }

                        methods._createScore.call(this);
                        methods._apply.call(this, this.opt.score);
                        methods._setTitle.call(this, this.opt.score);
                        methods._target.call(this, this.opt.score);

                        if (this.opt.readOnly) {
                            methods._lock.call(this);
                        } else {
                            this.style.cursor = 'pointer';

                            methods._binds.call(this);
                        }
                    });
                },

                _adjustCallback: function () {
                    var options = ['number', 'readOnly', 'score', 'scoreName', 'target', 'path'];

                    for (var i = 0; i < options.length; i++) {
                        if (typeof this.opt[options[i]] === 'function') {
                            this.opt[options[i]] = this.opt[options[i]].call(this);
                        }
                    }
                },

                _adjustedScore: function (score) {
                    if (!score) {
                        return score;
                    }

                    return methods._between(score, 0, this.opt.number);
                },

                _adjustHints: function () {
                    if (!this.opt.hints) {
                        this.opt.hints = [];
                    }

                    if (!this.opt.halfShow && !this.opt.half) {
                        return;
                    }

                    var steps = this.opt.precision ? 10 : 2;

                    for (var i = 0; i < this.opt.number; i++) {
                        var group = this.opt.hints[i];

                        if (Object.prototype.toString.call(group) !== '[object Array]') {
                            group = [group];
                        }

                        this.opt.hints[i] = [];

                        for (var j = 0; j < steps; j++) {
                            var
                              hint = group[j],
                              last = group[group.length - 1];

                            if (last === undefined) {
                                last = null;
                            }

                            this.opt.hints[i][j] = hint === undefined ? last : hint;
                        }
                    }
                },

                _adjustNumber: function () {
                    this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
                },

                _adjustPath: function () {
                    this.opt.path = this.opt.path || '';

                    if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
                        this.opt.path += '/';
                    }
                },

                _adjustPrecision: function () {
                    this.opt.half = true;
                },

                _adjustStarType: function () {
                    var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];

                    this.opt.path = '';

                    for (var i = 0; i < replaces.length; i++) {
                        this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
                    }
                },

                _apply: function (score) {
                    methods._fill.call(this, score);

                    if (score) {
                        if (score > 0) {
                            this.score.val(score);
                        }

                        methods._roundStars.call(this, score);
                    }
                },

                _between: function (value, min, max) {
                    return Math.min(Math.max(parseFloat(value), min), max);
                },

                _binds: function () {
                    if (this.cancel) {
                        methods._bindOverCancel.call(this);
                        methods._bindClickCancel.call(this);
                        methods._bindOutCancel.call(this);
                    }

                    methods._bindOver.call(this);
                    methods._bindClick.call(this);
                    methods._bindOut.call(this);
                },

                _bindClick: function () {
                    var that = this;

                    that.stars.on('click.raty', function (evt) {
                        var
                          execute = true,
                          score = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));

                        if (that.opt.click) {
                            execute = that.opt.click.call(that, +score, evt);
                        }

                        if (execute || execute === undefined) {
                            if (that.opt.half && !that.opt.precision) {
                                score = methods._roundHalfScore.call(that, score);
                            }

                            methods._apply.call(that, score);
                        }
                    });
                },

                _bindClickCancel: function () {
                    var that = this;

                    that.cancel.on('click.raty', function (evt) {
                        that.score.removeAttr('value');

                        if (that.opt.click) {
                            that.opt.click.call(that, null, evt);
                        }
                    });
                },

                _bindOut: function () {
                    var that = this;

                    that.self.on('mouseleave.raty', function (evt) {
                        var score = +that.score.val() || undefined;

                        methods._apply.call(that, score);
                        methods._target.call(that, score, evt);
                        methods._resetTitle.call(that);

                        if (that.opt.mouseout) {
                            that.opt.mouseout.call(that, score, evt);
                        }
                    });
                },

                _bindOutCancel: function () {
                    var that = this;

                    that.cancel.on('mouseleave.raty', function (evt) {
                        var icon = that.opt.cancelOff;

                        if (that.opt.starType !== 'img') {
                            icon = that.opt.cancelClass + ' ' + icon;
                        }

                        methods._setIcon.call(that, this, icon);

                        if (that.opt.mouseout) {
                            var score = +that.score.val() || undefined;

                            that.opt.mouseout.call(that, score, evt);
                        }
                    });
                },

                _bindOver: function () {
                    var that = this,
                        action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';

                    that.stars.on(action, function (evt) {
                        var score = methods._getScoreByPosition.call(that, evt, this);

                        methods._fill.call(that, score);

                        if (that.opt.half) {
                            methods._roundStars.call(that, score, evt);
                            methods._setTitle.call(that, score, evt);

                            that.self.data('score', score);
                        }

                        methods._target.call(that, score, evt);

                        if (that.opt.mouseover) {
                            that.opt.mouseover.call(that, score, evt);
                        }
                    });
                },

                _bindOverCancel: function () {
                    var that = this;

                    that.cancel.on('mouseover.raty', function (evt) {
                        var
                          starOff = that.opt.path + that.opt.starOff,
                          icon = that.opt.cancelOn;

                        if (that.opt.starType === 'img') {
                            that.stars.attr('src', starOff);
                        } else {
                            icon = that.opt.cancelClass + ' ' + icon;

                            that.stars.attr('class', starOff);
                        }

                        methods._setIcon.call(that, this, icon);
                        methods._target.call(that, null, evt);

                        if (that.opt.mouseover) {
                            that.opt.mouseover.call(that, null);
                        }
                    });
                },

                _buildScoreField: function () {
                    return $('<input />', { name: this.opt.scoreName, type: 'hidden' }).appendTo(this);
                },

                _createCancel: function () {
                    var icon = this.opt.path + this.opt.cancelOff,
                        cancel = $('<' + this.opt.starType + ' />', { title: this.opt.cancelHint, 'class': this.opt.cancelClass });

                    if (this.opt.starType === 'img') {
                        cancel.attr({ src: icon, alt: 'x' });
                    } else {
                        // TODO: use $.data
                        cancel.attr('data-alt', 'x').addClass(icon);
                    }

                    if (this.opt.cancelPlace === 'left') {
                        this.self.prepend('&#160;').prepend(cancel);
                    } else {
                        this.self.append('&#160;').append(cancel);
                    }

                    this.cancel = cancel;
                },

                _createScore: function () {
                    var score = $(this.opt.targetScore);

                    this.score = score.length ? score : methods._buildScoreField.call(this);
                },

                _createStars: function () {
                    for (var i = 1; i <= this.opt.number; i++) {
                        var
                          name = methods._nameForIndex.call(this, i),
                          attrs = { alt: i, src: this.opt.path + this.opt[name] };

                        if (this.opt.starType !== 'img') {
                            attrs = { 'data-alt': i, 'class': attrs.src }; // TODO: use $.data.
                        }

                        attrs.title = methods._getHint.call(this, i);

                        $('<' + this.opt.starType + ' />', attrs).appendTo(this);

                        if (this.opt.space) {
                            this.self.append(i < this.opt.number ? '&#160;' : '');
                        }
                    }

                    this.stars = this.self.children(this.opt.starType);
                },

                _error: function (message) {
                    $(this).text(message);

                    $.error(message);
                },

                _fill: function (score) {
                    var hash = 0;

                    for (var i = 1; i <= this.stars.length; i++) {
                        var
                          icon,
                          star = this.stars[i - 1],
                          turnOn = methods._turnOn.call(this, i, score);

                        if (this.opt.iconRange && this.opt.iconRange.length > hash) {
                            var irange = this.opt.iconRange[hash];

                            icon = methods._getRangeIcon.call(this, irange, turnOn);

                            if (i <= irange.range) {
                                methods._setIcon.call(this, star, icon);
                            }

                            if (i === irange.range) {
                                hash++;
                            }
                        } else {
                            icon = this.opt[turnOn ? 'starOn' : 'starOff'];

                            methods._setIcon.call(this, star, icon);
                        }
                    }
                },

                _getFirstDecimal: function (number) {
                    var
                      decimal = number.toString().split('.')[1],
                      result = 0;

                    if (decimal) {
                        result = parseInt(decimal.charAt(0), 10);

                        if (decimal.slice(1, 5) === '9999') {
                            result++;
                        }
                    }

                    return result;
                },

                _getRangeIcon: function (irange, turnOn) {
                    return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
                },

                _getScoreByPosition: function (evt, icon) {
                    var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);

                    if (this.opt.half) {
                        var
                          size = methods._getWidth.call(this),
                          percent = parseFloat((evt.pageX - $(icon).offset().left) / size);

                        score = score - 1 + percent;
                    }

                    return score;
                },

                _getHint: function (score, evt) {
                    if (score !== 0 && !score) {
                        return this.opt.noRatedMsg;
                    }

                    var
                      decimal = methods._getFirstDecimal.call(this, score),
                      integer = Math.ceil(score),
                      group = this.opt.hints[(integer || 1) - 1],
                      hint = group,
                      set = !evt || this.move;

                    if (this.opt.precision) {
                        if (set) {
                            decimal = decimal === 0 ? 9 : decimal - 1;
                        }

                        hint = group[decimal];
                    } else if (this.opt.halfShow || this.opt.half) {
                        decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;

                        hint = group[decimal];
                    }

                    return hint === '' ? '' : hint || score;
                },

                _getWidth: function () {
                    var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));

                    if (!width) {
                        methods._error.call(this, 'Could not get the icon width!');
                    }

                    return width;
                },

                _lock: function () {
                    var hint = methods._getHint.call(this, this.score.val());

                    this.style.cursor = '';
                    this.title = hint;

                    this.score.prop('readonly', true);
                    this.stars.prop('title', hint);

                    if (this.cancel) {
                        this.cancel.hide();
                    }

                    this.self.data('readonly', true);
                },

                _nameForIndex: function (i) {
                    return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
                },

                _resetTitle: function (star) {
                    for (var i = 0; i < this.opt.number; i++) {
                        this.stars[i].title = methods._getHint.call(this, i + 1);
                    }
                },

                _roundHalfScore: function (score) {
                    var integer = parseInt(score, 10),
                        decimal = methods._getFirstDecimal.call(this, score);

                    if (decimal !== 0) {
                        decimal = decimal > 5 ? 1 : 0.5;
                    }

                    return integer + decimal;
                },

                _roundStars: function (score, evt) {
                    var
                      decimal = (score % 1).toFixed(2),
                      name;

                    if (evt || this.move) {
                        name = decimal > 0.5 ? 'starOn' : 'starHalf';
                    } else if (decimal > this.opt.round.down) {               // Up:   [x.76 .. x.99]
                        name = 'starOn';

                        if (this.opt.halfShow && decimal < this.opt.round.up) { // Half: [x.26 .. x.75]
                            name = 'starHalf';
                        } else if (decimal < this.opt.round.full) {             // Down: [x.00 .. x.5]
                            name = 'starOff';
                        }
                    }

                    if (name) {
                        var
                          icon = this.opt[name],
                          star = this.stars[Math.ceil(score) - 1];

                        methods._setIcon.call(this, star, icon);
                    }                                                         // Full down: [x.00 .. x.25]
                },

                _setIcon: function (star, icon) {
                    star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
                },

                _setTarget: function (target, score) {
                    if (score) {
                        score = this.opt.targetFormat.toString().replace('{score}', score);
                    }

                    if (target.is(':input')) {
                        target.val(score);
                    } else {
                        target.html(score);
                    }
                },

                _setTitle: function (score, evt) {
                    if (score) {
                        var
                          integer = parseInt(Math.ceil(score), 10),
                          star = this.stars[integer - 1];

                        star.title = methods._getHint.call(this, score, evt);
                    }
                },

                _target: function (score, evt) {
                    if (this.opt.target) {
                        var target = $(this.opt.target);

                        if (!target.length) {
                            methods._error.call(this, 'Target selector invalid or missing!');
                        }

                        var mouseover = evt && evt.type === 'mouseover';

                        if (score === undefined) {
                            score = this.opt.targetText;
                        } else if (score === null) {
                            score = mouseover ? this.opt.cancelHint : this.opt.targetText;
                        } else {
                            if (this.opt.targetType === 'hint') {
                                score = methods._getHint.call(this, score, evt);
                            } else if (this.opt.precision) {
                                score = parseFloat(score).toFixed(1);
                            }

                            var mousemove = evt && evt.type === 'mousemove';

                            if (!mouseover && !mousemove && !this.opt.targetKeep) {
                                score = this.opt.targetText;
                            }
                        }

                        methods._setTarget.call(this, target, score);
                    }
                },

                _turnOn: function (i, score) {
                    return this.opt.single ? (i === score) : (i <= score);
                },

                _unlock: function () {
                    this.style.cursor = 'pointer';
                    this.removeAttribute('title');

                    this.score.removeAttr('readonly');

                    this.self.data('readonly', false);

                    for (var i = 0; i < this.opt.number; i++) {
                        this.stars[i].title = methods._getHint.call(this, i + 1);
                    }

                    if (this.cancel) {
                        this.cancel.css('display', '');
                    }
                },

                cancel: function (click) {
                    return this.each(function () {
                        var self = $(this);

                        if (self.data('readonly') !== true) {
                            methods[click ? 'click' : 'score'].call(self, null);

                            this.score.removeAttr('value');
                        }
                    });
                },

                click: function (score) {
                    return this.each(function () {
                        if ($(this).data('readonly') !== true) {
                            score = methods._adjustedScore.call(this, score);

                            methods._apply.call(this, score);

                            if (this.opt.click) {
                                this.opt.click.call(this, score, $.Event('click'));
                            }

                            methods._target.call(this, score);
                        }
                    });
                },

                destroy: function () {
                    return this.each(function () {
                        var self = $(this),
                            raw = self.data('raw');

                        if (raw) {
                            self.off('.raty').empty().css({ cursor: raw.style.cursor }).removeData('readonly');
                        } else {
                            self.data('raw', self.clone()[0]);
                        }
                    });
                },

                getScore: function () {
                    var score = [],
                        value;

                    this.each(function () {
                        value = this.score.val();

                        score.push(value ? +value : undefined);
                    });

                    return (score.length > 1) ? score : score[0];
                },

                move: function (score) {
                    return this.each(function () {
                        var
                          integer = parseInt(score, 10),
                          decimal = methods._getFirstDecimal.call(this, score);

                        if (integer >= this.opt.number) {
                            integer = this.opt.number - 1;
                            decimal = 10;
                        }

                        var
                          width = methods._getWidth.call(this),
                          steps = width / 10,
                          star = $(this.stars[integer]),
                          percent = star.offset().left + steps * decimal,
                          evt = $.Event('mousemove', { pageX: percent });

                        this.move = true;

                        star.trigger(evt);

                        this.move = false;
                    });
                },

                readOnly: function (readonly) {
                    return this.each(function () {
                        var self = $(this);

                        if (self.data('readonly') !== readonly) {
                            if (readonly) {
                                self.off('.raty').children('img').off('.raty');

                                methods._lock.call(this);
                            } else {
                                methods._binds.call(this);
                                methods._unlock.call(this);
                            }

                            self.data('readonly', readonly);
                        }
                    });
                },

                reload: function () {
                    return methods.set.call(this, {});
                },

                score: function () {
                    var self = $(this);

                    return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
                },

                set: function (options) {
                    return this.each(function () {
                        $(this).raty($.extend({}, this.opt, options));
                    });
                },

                setScore: function (score) {
                    return this.each(function () {
                        if ($(this).data('readonly') !== true) {
                            score = methods._adjustedScore.call(this, score);

                            methods._apply.call(this, score);
                            methods._target.call(this, score);
                        }
                    });
                }
            };

            $.fn.raty = function (method) {
                if (methods[method]) {
                    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method) {
                    return methods.init.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist!');
                }
            };

            $.fn.raty.defaults = {
                cancel: false,
                cancelClass: 'raty-cancel',
                cancelHint: 'Cancel this rating!',
                cancelOff: 'cancel-off.png',
                cancelOn: 'cancel-on.png',
                cancelPlace: 'left',
                click: undefined,
                half: false,
                halfShow: true,
                hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
                iconRange: undefined,
                mouseout: undefined,
                mouseover: undefined,
                noRatedMsg: 'Not rated yet!',
                number: 5,
                numberMax: 20,
                path: undefined,
                precision: false,
                readOnly: false,
                round: { down: 0.25, full: 0.6, up: 0.76 },
                score: undefined,
                scoreName: 'score',
                single: false,
                space: true,
                starHalf: 'star-half.png',
                starOff: 'star-off.png',
                starOn: 'star-on.png',
                starType: 'img',
                target: undefined,
                targetFormat: '{score}',
                targetKeep: false,
                targetScore: undefined,
                targetText: '',
                targetType: 'hint'
            };

        }
        , serializeObject: function ($) {
            $.fn.serializeObject = function () {
                var o = {};
                var a = this.serializeArray();
                $.each(a, function () {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
            };
        }
        , loadTemplate: function ($) {
            "use strict";
            var templates = {},
                queue = {},
                formatters = {},
                isArray;

            function loadTemplate(template, data, options) {
                var $that = this,
                    $template,
                    isFile,
                    settings;

                data = data || {};

                settings = $.extend(true, {
                    // These are the defaults.
                    async: true,
                    overwriteCache: false,
                    complete: null,
                    success: null,
                    error: function () {
                        $(this).each(function () {
                            $(this).html(settings.errorMessage);
                        });
                    },
                    errorMessage: "There was an error loading the template.",
                    paged: false,
                    pageNo: 1,
                    elemPerPage: 10,
                    append: false,
                    prepend: false,
                    beforeInsert: null,
                    afterInsert: null,
                    bindingOptions: {
                        ignoreUndefined: false,
                        ignoreNull: false,
                        ignoreEmptyString: false
                    }
                }, options);

                if ($.type(data) === "array") {
                    isArray = true;
                    return processArray.call(this, template, data, settings);
                }

                if (!containsSlashes(template)) {
                    $template = $(template);
                    if (typeof template === 'string' && template.indexOf('#') === 0) {
                        settings.isFile = false;
                    }
                }

                isFile = settings.isFile || (typeof settings.isFile === "undefined" && (typeof $template === "undefined" || $template.length === 0));

                if (isFile && !settings.overwriteCache && templates[template]) {
                    prepareTemplateFromCache(template, $that, data, settings);
                } else if (isFile && !settings.overwriteCache && templates.hasOwnProperty(template)) {
                    addToQueue(template, $that, data, settings);
                } else if (isFile) {
                    loadAndPrepareTemplate(template, $that, data, settings);
                } else {
                    loadTemplateFromDocument($template, $that, data, settings);
                }
                return this;
            }

            function addTemplateFormatter(key, formatter) {
                if (formatter) {
                    formatters[key] = formatter;
                } else {
                    formatters = $.extend(formatters, key);
                }
            }

            function containsSlashes(str) {
                return typeof str === "string" && str.indexOf("/") > -1;
            }

            function processArray(template, data, settings) {
                settings = settings || {};
                var $that = this,
                    todo = data.length,
                    doPrepend = settings.prepend && !settings.append,
                    done = 0,
                    success = 0,
                    errored = false,
                    errorObjects = [],
                    newOptions;

                if (settings.paged) {
                    var startNo = (settings.pageNo - 1) * settings.elemPerPage;
                    data = data.slice(startNo, startNo + settings.elemPerPage);
                    todo = data.length;
                }

                newOptions = $.extend(
                    {},
                    settings,
                    {
                        async: false,
                        complete: function (data) {
                            if (this.html) {
                                var insertedElement;
                                if (doPrepend) {
                                    insertedElement = $(this).prependTo($that);
                                } else {
                                    insertedElement = $(this).appendTo($that);
                                }
                                if (settings.afterInsert && data) {
                                    settings.afterInsert(insertedElement, data);
                                }
                            }
                            done++;
                            if (done === todo || errored) {
                                if (errored && settings && typeof settings.error === "function") {
                                    settings.error.call($that, errorObjects);
                                }
                                if (settings && typeof settings.complete === "function") {
                                    settings.complete();
                                }
                            }
                        },
                        success: function () {
                            success++;
                            if (success === todo) {
                                if (settings && typeof settings.success === "function") {
                                    settings.success();
                                }
                            }
                        },
                        error: function (e) {
                            errored = true;
                            errorObjects.push(e);
                        }
                    }
                );

                if (!settings.append && !settings.prepend) {
                    $that.html("");
                }

                if (doPrepend) data.reverse();
                $(data).each(function () {
                    var $div = $("<div/>");
                    loadTemplate.call($div, template, this, newOptions);
                    if (errored) {
                        return false;
                    }
                });

                return this;
            }

            function addToQueue(template, selection, data, settings) {
                if (queue[template]) {
                    queue[template].push({ data: data, selection: selection, settings: settings });
                } else {
                    queue[template] = [{ data: data, selection: selection, settings: settings }];
                }
            }

            function prepareTemplateFromCache(template, selection, data, settings) {
                var $templateContainer = templates[template].clone();

                prepareTemplate.call(selection, $templateContainer, data, settings);
                if (typeof settings.success === "function") {
                    settings.success();
                }
            }

            function uniqueId() {
                return new Date().getTime();
            }

            function urlAvoidCache(url) {
                if (url.indexOf('?') !== -1) {
                    return url + "&_=" + uniqueId();
                }
                else {
                    return url + "?_=" + uniqueId();
                }
            }

            function loadAndPrepareTemplate(template, selection, data, settings) {
                var $templateContainer = $("<div/>");

                templates[template] = null;
                var templateUrl = template;
                if (settings.overwriteCache) {
                    templateUrl = urlAvoidCache(templateUrl);
                }
                $.ajax({
                    url: templateUrl,
                    async: settings.async,
                    success: function (templateContent) {
                        $templateContainer.html(templateContent);
                        handleTemplateLoadingSuccess($templateContainer, template, selection, data, settings);
                    },
                    error: function (e) {
                        handleTemplateLoadingError(template, selection, data, settings, e);
                    }
                });
            }

            function loadTemplateFromDocument($template, selection, data, settings) {
                var $templateContainer = $("<div/>");

                if ($template.is("script") || $template.is("template")) {
                    $template = $.parseHTML($.trim($template.html()));
                }

                $templateContainer.html($template);
                prepareTemplate.call(selection, $templateContainer, data, settings);

                if (typeof settings.success === "function") {
                    settings.success();
                }
            }

            function prepareTemplate(template, data, settings) {
                bindData(template, data, settings);

                $(this).each(function () {
                    var $templateHtml = template.clone(true);
                    $("select", $templateHtml).each(function (key, value) {
                        $(this).val($("select", template).eq(key).val())
                    });
                    if (settings.beforeInsert) {
                        settings.beforeInsert($templateHtml, data);
                    }
                    if (settings.append) {

                        $(this).append($templateHtml);
                    } else if (settings.prepend) {
                        $(this).prepend($templateHtml);
                    } else {
                        $(this).html("").append($templateHtml);
                    }
                    if (settings.afterInsert && !isArray) {
                        settings.afterInsert($templateHtml, data);
                    }
                });

                if (typeof settings.complete === "function") {
                    settings.complete.call($(this), data);
                }
            }

            function handleTemplateLoadingError(template, selection, data, settings, error) {
                var value;

                if (typeof settings.error === "function") {
                    settings.error.call(selection, error);
                }

                $(queue[template]).each(function (key, value) {
                    if (typeof value.settings.error === "function") {
                        value.settings.error.call(value.selection, error);
                    }
                });

                if (typeof settings.complete === "function") {
                    settings.complete.call(selection);
                }

                while (queue[template] && (value = queue[template].shift())) {
                    if (typeof value.settings.complete === "function") {
                        value.settings.complete.call(value.selection);
                    }
                }

                if (typeof queue[template] !== 'undefined' && queue[template].length > 0) {
                    queue[template] = [];
                }
            }

            function handleTemplateLoadingSuccess($templateContainer, template, selection, data, settings) {
                var value;

                templates[template] = $templateContainer.clone();
                prepareTemplate.call(selection, $templateContainer, data, settings);

                if (typeof settings.success === "function") {
                    settings.success.call(selection);
                }

                while (queue[template] && (value = queue[template].shift())) {
                    prepareTemplate.call(value.selection, templates[template].clone(), value.data, value.settings);
                    if (typeof value.settings.success === "function") {
                        value.settings.success.call(value.selection);
                    }
                }
            }

            function bindData(template, data, settings) {
                data = data || {};

                processElements("data-content", template, data, settings, function ($elem, value) {
                    $elem.html(applyFormatters($elem, value, "content", settings));
                });

                processElements("data-content-append", template, data, settings, function ($elem, value) {
                    $elem.append(applyFormatters($elem, value, "content", settings));
                });

                processElements("data-content-prepend", template, data, settings, function ($elem, value) {
                    $elem.prepend(applyFormatters($elem, value, "content", settings));
                });

                processElements("data-content-text", template, data, settings, function ($elem, value) {
                    $elem.text(applyFormatters($elem, value, "content", settings));
                });

                processElements("data-innerHTML", template, data, settings, function ($elem, value) {
                    $elem.html(applyFormatters($elem, value, "content", settings));
                });

                processElements("data-src", template, data, settings, function ($elem, value) {
                    $elem.attr("src", applyFormatters($elem, value, "src", settings));
                }, function ($elem) {
                    $elem.remove();
                });

                processElements("data-href", template, data, settings, function ($elem, value) {
                    $elem.attr("href", applyFormatters($elem, value, "href", settings));
                }, function ($elem) {
                    $elem.remove();
                });

                processElements("data-alt", template, data, settings, function ($elem, value) {
                    $elem.attr("alt", applyFormatters($elem, value, "alt", settings));
                });

                processElements("data-id", template, data, settings, function ($elem, value) {
                    $elem.attr("id", applyFormatters($elem, value, "id", settings));
                });



                processElements("data-class", template, data, settings, function ($elem, value) {
                    $elem.addClass(applyFormatters($elem, value, "class", settings));
                });

                processElements("data-link", template, data, settings, function ($elem, value) {
                    var $linkElem = $("<a/>");
                    $linkElem.attr("href", applyFormatters($elem, value, "link", settings));
                    $linkElem.html($elem.html());
                    $elem.html($linkElem);
                });

                processElements("data-link-wrap", template, data, settings, function ($elem, value) {
                    var $linkElem = $("<a/>");
                    $linkElem.attr("href", applyFormatters($elem, value, "link-wrap", settings));
                    $elem.wrap($linkElem);
                });

                processElements("data-options", template, data, settings, function ($elem, value) {
                    $(value).each(function () {
                        var $option = $("<option/>");
                        $option.attr('value', this).text(this).appendTo($elem);
                    });
                });

                processAllElements(template, data, settings);

                processElements("data-value", template, data, settings, function ($elem, value) {
                    $elem.val(applyFormatters($elem, value, "value", settings));
                });


            }

            function processElements(attribute, template, data, settings, dataBindFunction, noDataFunction) {
                $("[" + attribute + "]", template).each(function () {
                    var $this = $(this),
                        param = $this.attr(attribute),
                        value = getValue(data, param);

                    if (!valueIsAllowedByBindingOptions($this, value, settings)) {
                        $this.remove();
                        return;
                    }

                    $this.removeAttr(attribute);

                    if (typeof value !== 'undefined' && dataBindFunction) {
                        dataBindFunction($this, value);
                    } else if (noDataFunction) {
                        noDataFunction($this);
                    }
                });
                return;
            }

            function valueIsAllowedByBindingOptions(bindingOptionsContainer, value, settings) {

                var bindingOptions = getBindingOptions(bindingOptionsContainer, settings);

                if (bindingOptions.ignoreUndefined && typeof value === "undefined") {
                    return false;

                } else if (bindingOptions.ignoreNull && value === null) {
                    return false;

                } else if (bindingOptions.ignoreEmptyString && value === "") {
                    return false;

                } else {
                    return true;
                }
            }

            function getBindingOptions(bindingOptionsContainer, settings) {

                var bindingOptions = {};

                // binding options passed as template attribute, i.e. 'data-binding-options'
                if (bindingOptionsContainer instanceof jQuery && bindingOptionsContainer.attr("data-binding-options")) {

                    bindingOptions = $.parseJSON(bindingOptionsContainer.attr("data-binding-options"));
                    bindingOptionsContainer.removeAttr("data-binding-options");

                    // binding options defined in a "data-template-bind" attribute
                } else if (typeof bindingOptionsContainer === "object" && bindingOptionsContainer.hasOwnProperty('bindingOptions')) {
                    bindingOptions = bindingOptionsContainer.bindingOptions;
                }

                // extend general bindingOptions with specific settings
                return $.extend({}, settings.bindingOptions, bindingOptions);
            }

            function processAllElements(template, data, settings) {
                $("[data-template-bind]", template).each(function () {
                    var $this = $(this),
                        param = $.parseJSON($this.attr("data-template-bind"));

                    $this.removeAttr("data-template-bind");

                    $(param).each(function () {
                        var value;

                        if (typeof (this.value) === 'object') {
                            value = getValue(data, this.value.data);
                        } else {
                            value = getValue(data, this.value);
                        }
                        if (this.attribute) {

                            if (!valueIsAllowedByBindingOptions(this, value, settings)) {
                                $this.remove();
                                return;
                            }

                            switch (this.attribute) {
                                //case "content":
                                case "innerHTML":
                                    $this.html(applyDataBindFormatters($this, value, this));
                                    break;
                                case "contentAppend":
                                    $this.append(applyDataBindFormatters($this, value, this));
                                    break;
                                case "contentPrepend":
                                    $this.prepend(applyDataBindFormatters($this, value, this));
                                    break;
                                case "contentText":
                                    $this.text(applyDataBindFormatters($this, value, this));
                                    break;
                                case "options":
                                    var optionsData = this;
                                    $(value).each(function () {
                                        var $option = $("<option/>");
                                        $option
                                            .attr('value', this[optionsData.value.value])
                                            .text(applyDataBindFormatters($this, this[optionsData.value.content], optionsData))
                                            .attr('selected', typeof this[optionsData.value.selected] == undefined ? false : this[optionsData.value.selected])
                                            .appendTo($this);
                                    });
                                    break;
                                default:
                                    $this.attr(this.attribute, applyDataBindFormatters($this, value, this));
                            }
                        }
                    });
                });
            }

            function applyDataBindFormatters($elem, value, data, settings) {
                if (data.formatter && formatters[data.formatter]) {
                    return (function (formatterSettings) {
                        return formatters[data.formatter].call($elem, value, data.formatOptions, formatterSettings);
                    })(settings);
                }
                return value;
            }

            function getValue(data, param) {
                if (param === "this") {
                    return data;
                }
                var paramParts = param.split('.'),
                    part,
                    value = data;

                while ((part = paramParts.shift()) && typeof value !== "undefined" && value != null) {
                    value = value[part];
                }

                return value;
            }

            function applyFormatters($elem, value, attr, settings) {
                var formatterTarget = $elem.attr("data-format-target"),
                    formatter;

                if (formatterTarget === attr || (!formatterTarget && attr === "content")) {
                    formatter = $elem.attr("data-format");
                    if (formatter && typeof formatters[formatter] === "function") {
                        var formatOptions = $elem.attr("data-format-options");
                        return (function (formatterSettings) {
                            return formatters[formatter].call($elem[0], value, formatOptions, $.extend({}, formatterSettings));
                        })(settings);
                    }
                }

                return value;
            }
            addTemplateFormatter("nestedTemplateFormatter", function (value, options, internalSettings) {
                if (!options) {
                    return;
                }

                if (typeof options === "string" && options[0] === "{") {
                    options = $.parseJSON(options);
                }

                var parentElement = options.parentElement || "div";
                var template = options.template || options;

                //If a parent is specified, return it; otherwise only return the generated children.
                if (options.parentElement)
                    return $("<" + parentElement + "/>").loadTemplate(template, value, internalSettings);
                else
                    return $("<" + parentElement + "/>").loadTemplate(template, value, internalSettings).children();
            });
            $.fn.loadTemplate = loadTemplate;
            $.addTemplateFormatter = addTemplateFormatter;
        }
        , pagination: function ($) {
            var methods = {
                init: function (options) {
                    var o = $.extend({
                        items: 1,
                        itemsOnPage: 1,
                        pages: 0,
                        displayedPages: 5,
                        edges: 2,
                        currentPage: 0,
                        hrefTextPrefix: '#page-',
                        hrefTextSuffix: '',
                        prevText: 'Prev',
                        nextText: 'Next',
                        ellipseText: '&hellip;',
                        ellipsePageSet: true,
                        cssStyle: 'light-theme',
                        listStyle: '',
                        labelMap: [],
                        selectOnClick: true,
                        nextAtFront: false,
                        invertPageOrder: false,
                        useStartEdge: true,
                        useEndEdge: true,
                        onPageClick: function (pageNumber, event) {
                            // Callback triggered when a page is clicked
                            // Page number is given as an optional parameter
                        },
                        onInit: function () {
                            // Callback triggered immediately after initialization
                        }
                    }, options || {});

                    var self = this;

                    o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
                    if (o.currentPage)
                        o.currentPage = o.currentPage - 1;
                    else
                        o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
                    o.halfDisplayed = o.displayedPages / 2;

                    this.each(function () {
                        self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
                        methods._draw.call(self);
                    });

                    o.onInit();

                    return this;
                },

                selectPage: function (page) {
                    methods._selectPage.call(this, page - 1);
                    return this;
                },

                prevPage: function () {
                    var o = this.data('pagination');
                    if (!o.invertPageOrder) {
                        if (o.currentPage > 0) {
                            methods._selectPage.call(this, o.currentPage - 1);
                        }
                    } else {
                        if (o.currentPage < o.pages - 1) {
                            methods._selectPage.call(this, o.currentPage + 1);
                        }
                    }
                    return this;
                },

                nextPage: function () {
                    var o = this.data('pagination');
                    if (!o.invertPageOrder) {
                        if (o.currentPage < o.pages - 1) {
                            methods._selectPage.call(this, o.currentPage + 1);
                        }
                    } else {
                        if (o.currentPage > 0) {
                            methods._selectPage.call(this, o.currentPage - 1);
                        }
                    }
                    return this;
                },

                getPagesCount: function () {
                    return this.data('pagination').pages;
                },

                setPagesCount: function (count) {
                    this.data('pagination').pages = count;
                },

                getCurrentPage: function () {
                    return this.data('pagination').currentPage + 1;
                },

                destroy: function () {
                    this.empty();
                    return this;
                },

                drawPage: function (page) {
                    var o = this.data('pagination');
                    o.currentPage = page - 1;
                    this.data('pagination', o);
                    methods._draw.call(this);
                    return this;
                },

                redraw: function () {
                    methods._draw.call(this);
                    return this;
                },

                disable: function () {
                    var o = this.data('pagination');
                    o.disabled = true;
                    this.data('pagination', o);
                    methods._draw.call(this);
                    return this;
                },

                enable: function () {
                    var o = this.data('pagination');
                    o.disabled = false;
                    this.data('pagination', o);
                    methods._draw.call(this);
                    return this;
                },

                updateItems: function (newItems) {
                    var o = this.data('pagination');
                    o.items = newItems;
                    o.pages = methods._getPages(o);
                    this.data('pagination', o);
                    methods._draw.call(this);
                },

                updateItemsOnPage: function (itemsOnPage) {
                    var o = this.data('pagination');
                    o.itemsOnPage = itemsOnPage;
                    o.pages = methods._getPages(o);
                    this.data('pagination', o);
                    methods._selectPage.call(this, 0);
                    return this;
                },

                getItemsOnPage: function () {
                    return this.data('pagination').itemsOnPage;
                },

                _draw: function () {
                    var o = this.data('pagination'),
                        interval = methods._getInterval(o),
                        i,
                        tagName;

                    methods.destroy.call(this);

                    tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

                    var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

                    // Generate Prev link
                    if (o.prevText) {
                        methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, { text: o.prevText, classes: 'prev' });
                    }

                    // Generate Next link (if option set for at front)
                    if (o.nextText && o.nextAtFront) {
                        methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
                    }

                    // Generate start edges
                    if (!o.invertPageOrder) {
                        if (interval.start > 0 && o.edges > 0) {
                            if (o.useStartEdge) {
                                var end = Math.min(o.edges, interval.start);
                                for (i = 0; i < end; i++) {
                                    methods._appendItem.call(this, i);
                                }
                            }
                            if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                                $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                            } else if (interval.start - o.edges == 1) {
                                methods._appendItem.call(this, o.edges);
                            }
                        }
                    } else {
                        if (interval.end < o.pages && o.edges > 0) {
                            if (o.useStartEdge) {
                                var begin = Math.max(o.pages - o.edges, interval.end);
                                for (i = o.pages - 1; i >= begin; i--) {
                                    methods._appendItem.call(this, i);
                                }
                            }

                            if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                                $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                            } else if (o.pages - o.edges - interval.end == 1) {
                                methods._appendItem.call(this, interval.end);
                            }
                        }
                    }

                    // Generate interval links
                    if (!o.invertPageOrder) {
                        for (i = interval.start; i < interval.end; i++) {
                            methods._appendItem.call(this, i);
                        }
                    } else {
                        for (i = interval.end - 1; i >= interval.start; i--) {
                            methods._appendItem.call(this, i);
                        }
                    }

                    // Generate end edges
                    if (!o.invertPageOrder) {
                        if (interval.end < o.pages && o.edges > 0) {
                            if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                                $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                            } else if (o.pages - o.edges - interval.end == 1) {
                                methods._appendItem.call(this, interval.end);
                            }
                            if (o.useEndEdge) {
                                var begin = Math.max(o.pages - o.edges, interval.end);
                                for (i = begin; i < o.pages; i++) {
                                    methods._appendItem.call(this, i);
                                }
                            }
                        }
                    } else {
                        if (interval.start > 0 && o.edges > 0) {
                            if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                                $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                            } else if (interval.start - o.edges == 1) {
                                methods._appendItem.call(this, o.edges);
                            }

                            if (o.useEndEdge) {
                                var end = Math.min(o.edges, interval.start);
                                for (i = end - 1; i >= 0; i--) {
                                    methods._appendItem.call(this, i);
                                }
                            }
                        }
                    }

                    // Generate Next link (unless option is set for at front)
                    if (o.nextText && !o.nextAtFront) {
                        methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
                    }

                    if (o.ellipsePageSet && !o.disabled) {
                        methods._ellipseClick.call(this, $panel);
                    }

                },

                _getPages: function (o) {
                    var pages = Math.ceil(o.items / o.itemsOnPage);
                    return pages || 1;
                },

                _getInterval: function (o) {
                    return {
                        start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
                        end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
                    };
                },

                _appendItem: function (pageIndex, opts) {
                    var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');

                    pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

                    options = {
                        text: pageIndex + 1,
                        classes: ''
                    };

                    if (o.labelMap.length && o.labelMap[pageIndex]) {
                        options.text = o.labelMap[pageIndex];
                    }

                    options = $.extend(options, opts || {});

                    if (pageIndex == o.currentPage || o.disabled) {
                        if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
                            $linkWrapper.addClass('disabled');
                        } else {
                            $linkWrapper.addClass('active');
                        }
                        $link = $('<span class="current">' + (options.text) + '</span>');
                    } else {
                        $link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
                        $link.click(function (event) {
                            return methods._selectPage.call(self, pageIndex, event);
                        });
                    }

                    if (options.classes) {
                        $link.addClass(options.classes);
                    }

                    $linkWrapper.append($link);

                    if ($ul.length) {
                        $ul.append($linkWrapper);
                    } else {
                        self.append($linkWrapper);
                    }
                },

                _selectPage: function (pageIndex, event) {
                    var o = this.data('pagination');
                    o.currentPage = pageIndex;
                    if (o.selectOnClick) {
                        methods._draw.call(this);
                    }
                    return o.onPageClick(pageIndex + 1, event);
                },


                _ellipseClick: function ($panel) {
                    var self = this,
                        o = this.data('pagination'),
                        $ellip = $panel.find('.ellipse');
                    $ellip.addClass('clickable').parent().removeClass('disabled');
                    $ellip.click(function (event) {
                        if (!o.disable) {
                            var $this = $(this),
                                val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
                            $this
                                .html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
                                .find('input')
                                .focus()
                                .click(function (event) {
                                    // prevent input number arrows from bubbling a click event on $ellip
                                    event.stopPropagation();
                                })
                                .keyup(function (event) {
                                    var val = $(this).val();
                                    if (event.which === 13 && val !== '') {
                                        // enter to accept
                                        if ((val > 0) && (val <= o.pages))
                                            methods._selectPage.call(self, val - 1);
                                    } else if (event.which === 27) {
                                        // escape to cancel
                                        $ellip.empty().html(o.ellipseText);
                                    }
                                })
                                .bind('blur', function (event) {
                                    var val = $(this).val();
                                    if (val !== '') {
                                        methods._selectPage.call(self, val - 1);
                                    }
                                    $ellip.empty().html(o.ellipseText);
                                    return false;
                                });
                        }
                        return false;
                    });
                }

            };

            $.fn.pagination = function (method) {

                // Method calling logic
                if (methods[method] && method.charAt(0) != '_') {
                    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method) {
                    return methods.init.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.pagination');
                }

            };
        }
        , swiper: function () {
            (function () {
                'use strict';
                var $;
                /*===========================
                Swiper
                ===========================*/
                var Swiper = function (container, params) {
                    if (!(this instanceof Swiper)) return new Swiper(container, params);

                    var defaults = {
                        direction: 'horizontal',
                        touchEventsTarget: 'container',
                        initialSlide: 0,
                        speed: 300,
                        // autoplay
                        autoplay: false,
                        autoplayDisableOnInteraction: true,
                        autoplayStopOnLast: false,
                        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
                        iOSEdgeSwipeDetection: false,
                        iOSEdgeSwipeThreshold: 20,
                        // Free mode
                        freeMode: false,
                        freeModeMomentum: true,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: true,
                        freeModeMomentumBounceRatio: 1,
                        freeModeSticky: false,
                        freeModeMinimumVelocity: 0.02,
                        // Autoheight
                        autoHeight: false,
                        // Set wrapper width
                        setWrapperSize: false,
                        // Virtual Translate
                        virtualTranslate: false,
                        // Effects
                        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        },
                        flip: {
                            slideShadows: true,
                            limitRotation: true
                        },
                        cube: {
                            slideShadows: true,
                            shadow: true,
                            shadowOffset: 20,
                            shadowScale: 0.94
                        },
                        fade: {
                            crossFade: false
                        },
                        // Parallax
                        parallax: false,
                        // Scrollbar
                        scrollbar: null,
                        scrollbarHide: true,
                        scrollbarDraggable: false,
                        scrollbarSnapOnRelease: false,
                        // Keyboard Mousewheel
                        keyboardControl: false,
                        mousewheelControl: false,
                        mousewheelReleaseOnEdges: false,
                        mousewheelInvert: false,
                        mousewheelForceToAxis: false,
                        mousewheelSensitivity: 1,
                        // Hash Navigation
                        hashnav: false,
                        // Breakpoints
                        breakpoints: undefined,
                        // Slides grid
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: 'column',
                        slidesPerGroup: 1,
                        centeredSlides: false,
                        slidesOffsetBefore: 0, // in px
                        slidesOffsetAfter: 0, // in px
                        // Round length
                        roundLengths: false,
                        // Touches
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: true,
                        shortSwipes: true,
                        longSwipes: true,
                        longSwipesRatio: 0.5,
                        longSwipesMs: 300,
                        followFinger: true,
                        onlyExternal: false,
                        threshold: 0,
                        touchMoveStopPropagation: true,
                        // Unique Navigation Elements
                        uniqueNavElements: true,
                        // Pagination
                        pagination: null,
                        paginationElement: 'span',
                        paginationClickable: false,
                        paginationHide: false,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
                        // Resistance
                        resistance: true,
                        resistanceRatio: 0.85,
                        // Next/prev buttons
                        nextButton: null,
                        prevButton: null,
                        // Progress
                        watchSlidesProgress: false,
                        watchSlidesVisibility: false,
                        // Cursor
                        grabCursor: false,
                        // Clicks
                        preventClicks: true,
                        preventClicksPropagation: true,
                        slideToClickedSlide: false,
                        // Lazy Loading
                        lazyLoading: false,
                        lazyLoadingInPrevNext: false,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: false,
                        // Images
                        preloadImages: true,
                        updateOnImagesReady: true,
                        // loop
                        loop: false,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        // Control
                        control: undefined,
                        controlInverse: false,
                        controlBy: 'slide', //or 'container'
                        // Swiping/no swiping
                        allowSwipeToPrev: true,
                        allowSwipeToNext: true,
                        swipeHandler: null, //'.swipe-handler',
                        noSwiping: true,
                        noSwipingClass: 'swiper-no-swiping',
                        // NS
                        slideClass: 'swiper-slide',
                        slideActiveClass: 'swiper-slide-active',
                        slideVisibleClass: 'swiper-slide-visible',
                        slideDuplicateClass: 'swiper-slide-duplicate',
                        slideNextClass: 'swiper-slide-next',
                        slidePrevClass: 'swiper-slide-prev',
                        wrapperClass: 'swiper-wrapper',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        buttonDisabledClass: 'swiper-button-disabled',
                        paginationCurrentClass: 'swiper-pagination-current',
                        paginationTotalClass: 'swiper-pagination-total',
                        paginationHiddenClass: 'swiper-pagination-hidden',
                        paginationProgressbarClass: 'swiper-pagination-progressbar',
                        // Observer
                        observer: false,
                        observeParents: false,
                        // Accessibility
                        a11y: false,
                        prevSlideMessage: 'Previous slide',
                        nextSlideMessage: 'Next slide',
                        firstSlideMessage: 'This is the first slide',
                        lastSlideMessage: 'This is the last slide',
                        paginationBulletMessage: 'Go to slide {{index}}',
                        // Callbacks
                        runCallbacksOnInit: true
                        /*
                        Callbacks:
                        onInit: function (swiper)
                        onDestroy: function (swiper)
                        onClick: function (swiper, e)
                        onTap: function (swiper, e)
                        onDoubleTap: function (swiper, e)
                        onSliderMove: function (swiper, e)
                        onSlideChangeStart: function (swiper)
                        onSlideChangeEnd: function (swiper)
                        onTransitionStart: function (swiper)
                        onTransitionEnd: function (swiper)
                        onImagesReady: function (swiper)
                        onProgress: function (swiper, progress)
                        onTouchStart: function (swiper, e)
                        onTouchMove: function (swiper, e)
                        onTouchMoveOpposite: function (swiper, e)
                        onTouchEnd: function (swiper, e)
                        onReachBeginning: function (swiper)
                        onReachEnd: function (swiper)
                        onSetTransition: function (swiper, duration)
                        onSetTranslate: function (swiper, translate)
                        onAutoplayStart: function (swiper)
                        onAutoplayStop: function (swiper),
                        onLazyImageLoad: function (swiper, slide, image)
                        onLazyImageReady: function (swiper, slide, image)
                        */

                    };
                    var initialVirtualTranslate = params && params.virtualTranslate;

                    params = params || {};
                    var originalParams = {};
                    for (var param in params) {
                        if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                            originalParams[param] = {};
                            for (var deepParam in params[param]) {
                                originalParams[param][deepParam] = params[param][deepParam];
                            }
                        }
                        else {
                            originalParams[param] = params[param];
                        }
                    }
                    for (var def in defaults) {
                        if (typeof params[def] === 'undefined') {
                            params[def] = defaults[def];
                        }
                        else if (typeof params[def] === 'object') {
                            for (var deepDef in defaults[def]) {
                                if (typeof params[def][deepDef] === 'undefined') {
                                    params[def][deepDef] = defaults[def][deepDef];
                                }
                            }
                        }
                    }

                    // Swiper
                    var s = this;

                    // Params
                    s.params = params;
                    s.originalParams = originalParams;

                    // Classname
                    s.classNames = [];
                    /*=========================
                      Dom Library and plugins
                      ===========================*/
                    if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
                        $ = Dom7;
                    }
                    if (typeof $ === 'undefined') {
                        if (typeof Dom7 === 'undefined') {
                            $ = window.Dom7 || window.Zepto || window.jQuery;
                        }
                        else {
                            $ = Dom7;
                        }
                        if (!$) return;
                    }
                    // Export it to Swiper instance
                    s.$ = $;

                    /*=========================
                      Breakpoints
                      ===========================*/
                    s.currentBreakpoint = undefined;
                    s.getActiveBreakpoint = function () {
                        //Get breakpoint for window width
                        if (!s.params.breakpoints) return false;
                        var breakpoint = false;
                        var points = [], point;
                        for (point in s.params.breakpoints) {
                            if (s.params.breakpoints.hasOwnProperty(point)) {
                                points.push(point);
                            }
                        }
                        points.sort(function (a, b) {
                            return parseInt(a, 10) > parseInt(b, 10);
                        });
                        for (var i = 0; i < points.length; i++) {
                            point = points[i];
                            if (point >= window.innerWidth && !breakpoint) {
                                breakpoint = point;
                            }
                        }
                        return breakpoint || 'max';
                    };
                    s.setBreakpoint = function () {
                        //Set breakpoint for window width and update parameters
                        var breakpoint = s.getActiveBreakpoint();
                        if (breakpoint && s.currentBreakpoint !== breakpoint) {
                            var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                            var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                            for (var param in breakPointsParams) {
                                s.params[param] = breakPointsParams[param];
                            }
                            s.currentBreakpoint = breakpoint;
                            if (needsReLoop && s.destroyLoop) {
                                s.reLoop(true);
                            }
                        }
                    };
                    // Set breakpoint on load
                    if (s.params.breakpoints) {
                        s.setBreakpoint();
                    }

                    /*=========================
                      Preparation - Define Container, Wrapper and Pagination
                      ===========================*/
                    s.container = $(container);
                    if (s.container.length === 0) return;
                    if (s.container.length > 1) {
                        var swipers = [];
                        s.container.each(function () {
                            var container = this;
                            swipers.push(new Swiper(this, params));
                        });
                        return swipers;
                    }

                    // Save instance in container HTML Element and in data
                    s.container[0].swiper = s;
                    s.container.data('swiper', s);

                    s.classNames.push('swiper-container-' + s.params.direction);

                    if (s.params.freeMode) {
                        s.classNames.push('swiper-container-free-mode');
                    }
                    if (!s.support.flexbox) {
                        s.classNames.push('swiper-container-no-flexbox');
                        s.params.slidesPerColumn = 1;
                    }
                    if (s.params.autoHeight) {
                        s.classNames.push('swiper-container-autoheight');
                    }
                    // Enable slides progress when required
                    if (s.params.parallax || s.params.watchSlidesVisibility) {
                        s.params.watchSlidesProgress = true;
                    }
                    // Coverflow / 3D
                    if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
                        if (s.support.transforms3d) {
                            s.params.watchSlidesProgress = true;
                            s.classNames.push('swiper-container-3d');
                        }
                        else {
                            s.params.effect = 'slide';
                        }
                    }
                    if (s.params.effect !== 'slide') {
                        s.classNames.push('swiper-container-' + s.params.effect);
                    }
                    if (s.params.effect === 'cube') {
                        s.params.resistanceRatio = 0;
                        s.params.slidesPerView = 1;
                        s.params.slidesPerColumn = 1;
                        s.params.slidesPerGroup = 1;
                        s.params.centeredSlides = false;
                        s.params.spaceBetween = 0;
                        s.params.virtualTranslate = true;
                        s.params.setWrapperSize = false;
                    }
                    if (s.params.effect === 'fade' || s.params.effect === 'flip') {
                        s.params.slidesPerView = 1;
                        s.params.slidesPerColumn = 1;
                        s.params.slidesPerGroup = 1;
                        s.params.watchSlidesProgress = true;
                        s.params.spaceBetween = 0;
                        s.params.setWrapperSize = false;
                        if (typeof initialVirtualTranslate === 'undefined') {
                            s.params.virtualTranslate = true;
                        }
                    }

                    // Grab Cursor
                    if (s.params.grabCursor && s.support.touch) {
                        s.params.grabCursor = false;
                    }

                    // Wrapper
                    s.wrapper = s.container.children('.' + s.params.wrapperClass);

                    // Pagination
                    if (s.params.pagination) {
                        s.paginationContainer = $(s.params.pagination);
                        if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                            s.paginationContainer = s.container.find(s.params.pagination);
                        }

                        if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                            s.paginationContainer.addClass('swiper-pagination-clickable');
                        }
                        else {
                            s.params.paginationClickable = false;
                        }
                        s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
                    }
                    // Next/Prev Buttons
                    if (s.params.nextButton || s.params.prevButton) {
                        if (s.params.nextButton) {
                            s.nextButton = $(s.params.nextButton);
                            if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                                s.nextButton = s.container.find(s.params.nextButton);
                            }
                        }
                        if (s.params.prevButton) {
                            s.prevButton = $(s.params.prevButton);
                            if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                                s.prevButton = s.container.find(s.params.prevButton);
                            }
                        }
                    }

                    // Is Horizontal
                    s.isHorizontal = function () {
                        return s.params.direction === 'horizontal';
                    };
                    // s.isH = isH;

                    // RTL
                    s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
                    if (s.rtl) {
                        s.classNames.push('swiper-container-rtl');
                    }

                    // Wrong RTL support
                    if (s.rtl) {
                        s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
                    }

                    // Columns
                    if (s.params.slidesPerColumn > 1) {
                        s.classNames.push('swiper-container-multirow');
                    }

                    // Check for Android
                    if (s.device.android) {
                        s.classNames.push('swiper-container-android');
                    }

                    // Add classes
                    s.container.addClass(s.classNames.join(' '));

                    // Translate
                    s.translate = 0;

                    // Progress
                    s.progress = 0;

                    // Velocity
                    s.velocity = 0;

                    /*=========================
                      Locks, unlocks
                      ===========================*/
                    s.lockSwipeToNext = function () {
                        s.params.allowSwipeToNext = false;
                    };
                    s.lockSwipeToPrev = function () {
                        s.params.allowSwipeToPrev = false;
                    };
                    s.lockSwipes = function () {
                        s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
                    };
                    s.unlockSwipeToNext = function () {
                        s.params.allowSwipeToNext = true;
                    };
                    s.unlockSwipeToPrev = function () {
                        s.params.allowSwipeToPrev = true;
                    };
                    s.unlockSwipes = function () {
                        s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
                    };

                    /*=========================
                      Round helper
                      ===========================*/
                    function round(a) {
                        return Math.floor(a);
                    }
                    /*=========================
                      Set grab cursor
                      ===========================*/
                    if (s.params.grabCursor) {
                        s.container[0].style.cursor = 'move';
                        s.container[0].style.cursor = '-webkit-grab';
                        s.container[0].style.cursor = '-moz-grab';
                        s.container[0].style.cursor = 'grab';
                    }
                    /*=========================
                      Update on Images Ready
                      ===========================*/
                    s.imagesToLoad = [];
                    s.imagesLoaded = 0;

                    s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
                        var image;
                        function onReady() {
                            if (callback) callback();
                        }
                        if (!imgElement.complete || !checkForComplete) {
                            if (src) {
                                image = new window.Image();
                                image.onload = onReady;
                                image.onerror = onReady;
                                if (srcset) {
                                    image.srcset = srcset;
                                }
                                if (src) {
                                    image.src = src;
                                }
                            } else {
                                onReady();
                            }

                        } else {//image already loaded...
                            onReady();
                        }
                    };
                    s.preloadImages = function () {
                        s.imagesToLoad = s.container.find('img');
                        function _onReady() {
                            if (typeof s === 'undefined' || s === null) return;
                            if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                            if (s.imagesLoaded === s.imagesToLoad.length) {
                                if (s.params.updateOnImagesReady) s.update();
                                s.emit('onImagesReady', s);
                            }
                        }
                        for (var i = 0; i < s.imagesToLoad.length; i++) {
                            s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
                        }
                    };

                    /*=========================
                      Autoplay
                      ===========================*/
                    s.autoplayTimeoutId = undefined;
                    s.autoplaying = false;
                    s.autoplayPaused = false;
                    function autoplay() {
                        s.autoplayTimeoutId = setTimeout(function () {
                            if (s.params.loop) {
                                s.fixLoop();
                                s._slideNext();
                                s.emit('onAutoplay', s);
                            }
                            else {
                                if (!s.isEnd) {
                                    s._slideNext();
                                    s.emit('onAutoplay', s);
                                }
                                else {
                                    if (!params.autoplayStopOnLast) {
                                        s._slideTo(0);
                                        s.emit('onAutoplay', s);
                                    }
                                    else {
                                        s.stopAutoplay();
                                    }
                                }
                            }
                        }, s.params.autoplay);
                    }
                    s.startAutoplay = function () {
                        if (typeof s.autoplayTimeoutId !== 'undefined') return false;
                        if (!s.params.autoplay) return false;
                        if (s.autoplaying) return false;
                        s.autoplaying = true;
                        s.emit('onAutoplayStart', s);
                        autoplay();
                    };
                    s.stopAutoplay = function (internal) {
                        if (!s.autoplayTimeoutId) return;
                        if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
                        s.autoplaying = false;
                        s.autoplayTimeoutId = undefined;
                        s.emit('onAutoplayStop', s);
                    };
                    s.pauseAutoplay = function (speed) {
                        if (s.autoplayPaused) return;
                        if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
                        s.autoplayPaused = true;
                        if (speed === 0) {
                            s.autoplayPaused = false;
                            autoplay();
                        }
                        else {
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.autoplayPaused = false;
                                if (!s.autoplaying) {
                                    s.stopAutoplay();
                                }
                                else {
                                    autoplay();
                                }
                            });
                        }
                    };
                    /*=========================
                      Min/Max Translate
                      ===========================*/
                    s.minTranslate = function () {
                        return (-s.snapGrid[0]);
                    };
                    s.maxTranslate = function () {
                        return (-s.snapGrid[s.snapGrid.length - 1]);
                    };
                    /*=========================
                      Slider/slides sizes
                      ===========================*/
                    s.updateAutoHeight = function () {
                        // Update Height
                        var slide = s.slides.eq(s.activeIndex)[0];
                        if (typeof slide !== 'undefined') {
                            var newHeight = slide.offsetHeight;
                            if (newHeight) s.wrapper.css('height', newHeight + 'px');
                        }
                    };
                    s.updateContainerSize = function () {
                        var width, height;
                        if (typeof s.params.width !== 'undefined') {
                            width = s.params.width;
                        }
                        else {
                            width = s.container[0].clientWidth;
                        }
                        if (typeof s.params.height !== 'undefined') {
                            height = s.params.height;
                        }
                        else {
                            height = s.container[0].clientHeight;
                        }
                        if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                            return;
                        }

                        //Subtract paddings
                        width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
                        height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);

                        // Store values
                        s.width = width;
                        s.height = height;
                        s.size = s.isHorizontal() ? s.width : s.height;
                    };

                    s.updateSlidesSize = function () {
                        s.slides = s.wrapper.children('.' + s.params.slideClass);
                        s.snapGrid = [];
                        s.slidesGrid = [];
                        s.slidesSizesGrid = [];

                        var spaceBetween = s.params.spaceBetween,
                            slidePosition = -s.params.slidesOffsetBefore,
                            i,
                            prevSlideSize = 0,
                            index = 0;
                        if (typeof s.size === 'undefined') return;
                        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
                        }

                        s.virtualSize = -spaceBetween;
                        // reset margins
                        if (s.rtl) s.slides.css({ marginLeft: '', marginTop: '' });
                        else s.slides.css({ marginRight: '', marginBottom: '' });

                        var slidesNumberEvenToRows;
                        if (s.params.slidesPerColumn > 1) {
                            if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                                slidesNumberEvenToRows = s.slides.length;
                            }
                            else {
                                slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                            }
                            if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                            }
                        }

                        // Calc slides
                        var slideSize;
                        var slidesPerColumn = s.params.slidesPerColumn;
                        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
                        var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
                        for (i = 0; i < s.slides.length; i++) {
                            slideSize = 0;
                            var slide = s.slides.eq(i);
                            if (s.params.slidesPerColumn > 1) {
                                // Set slides order
                                var newSlideOrderIndex;
                                var column, row;
                                if (s.params.slidesPerColumnFill === 'column') {
                                    column = Math.floor(i / slidesPerColumn);
                                    row = i - column * slidesPerColumn;
                                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                                        if (++row >= slidesPerColumn) {
                                            row = 0;
                                            column++;
                                        }
                                    }
                                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                                    slide
                                        .css({
                                            '-webkit-box-ordinal-group': newSlideOrderIndex,
                                            '-moz-box-ordinal-group': newSlideOrderIndex,
                                            '-ms-flex-order': newSlideOrderIndex,
                                            '-webkit-order': newSlideOrderIndex,
                                            'order': newSlideOrderIndex
                                        });
                                }
                                else {
                                    row = Math.floor(i / slidesPerRow);
                                    column = i - row * slidesPerRow;
                                }
                                slide
                                    .css({
                                        'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                                    })
                                    .attr('data-swiper-column', column)
                                    .attr('data-swiper-row', row);

                            }
                            if (slide.css('display') === 'none') continue;
                            if (s.params.slidesPerView === 'auto') {
                                slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                                if (s.params.roundLengths) slideSize = round(slideSize);
                            }
                            else {
                                slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                                if (s.params.roundLengths) slideSize = round(slideSize);

                                if (s.isHorizontal()) {
                                    s.slides[i].style.width = slideSize + 'px';
                                }
                                else {
                                    s.slides[i].style.height = slideSize + 'px';
                                }
                            }
                            s.slides[i].swiperSlideSize = slideSize;
                            s.slidesSizesGrid.push(slideSize);


                            if (s.params.centeredSlides) {
                                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                                if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                                if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                                s.slidesGrid.push(slidePosition);
                            }
                            else {
                                if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                                s.slidesGrid.push(slidePosition);
                                slidePosition = slidePosition + slideSize + spaceBetween;
                            }

                            s.virtualSize += slideSize + spaceBetween;

                            prevSlideSize = slideSize;

                            index++;
                        }
                        s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
                        var newSlidesGrid;

                        if (
                            s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                            s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
                        }
                        if (!s.support.flexbox || s.params.setWrapperSize) {
                            if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
                            else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
                        }

                        if (s.params.slidesPerColumn > 1) {
                            s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                            s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                            s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
                            if (s.params.centeredSlides) {
                                newSlidesGrid = [];
                                for (i = 0; i < s.snapGrid.length; i++) {
                                    if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                                }
                                s.snapGrid = newSlidesGrid;
                            }
                        }

                        // Remove last grid elements depending on width
                        if (!s.params.centeredSlides) {
                            newSlidesGrid = [];
                            for (i = 0; i < s.snapGrid.length; i++) {
                                if (s.snapGrid[i] <= s.virtualSize - s.size) {
                                    newSlidesGrid.push(s.snapGrid[i]);
                                }
                            }
                            s.snapGrid = newSlidesGrid;
                            if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                                s.snapGrid.push(s.virtualSize - s.size);
                            }
                        }
                        if (s.snapGrid.length === 0) s.snapGrid = [0];

                        if (s.params.spaceBetween !== 0) {
                            if (s.isHorizontal()) {
                                if (s.rtl) s.slides.css({ marginLeft: spaceBetween + 'px' });
                                else s.slides.css({ marginRight: spaceBetween + 'px' });
                            }
                            else s.slides.css({ marginBottom: spaceBetween + 'px' });
                        }
                        if (s.params.watchSlidesProgress) {
                            s.updateSlidesOffset();
                        }
                    };
                    s.updateSlidesOffset = function () {
                        for (var i = 0; i < s.slides.length; i++) {
                            s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
                        }
                    };

                    /*=========================
                      Slider/slides progress
                      ===========================*/
                    s.updateSlidesProgress = function (translate) {
                        if (typeof translate === 'undefined') {
                            translate = s.translate || 0;
                        }
                        if (s.slides.length === 0) return;
                        if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();

                        var offsetCenter = -translate;
                        if (s.rtl) offsetCenter = translate;

                        // Visible Slides
                        s.slides.removeClass(s.params.slideVisibleClass);
                        for (var i = 0; i < s.slides.length; i++) {
                            var slide = s.slides[i];
                            var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                            if (s.params.watchSlidesVisibility) {
                                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                                var slideAfter = slideBefore + s.slidesSizesGrid[i];
                                var isVisible =
                                    (slideBefore >= 0 && slideBefore < s.size) ||
                                    (slideAfter > 0 && slideAfter <= s.size) ||
                                    (slideBefore <= 0 && slideAfter >= s.size);
                                if (isVisible) {
                                    s.slides.eq(i).addClass(s.params.slideVisibleClass);
                                }
                            }
                            slide.progress = s.rtl ? -slideProgress : slideProgress;
                        }
                    };
                    s.updateProgress = function (translate) {
                        if (typeof translate === 'undefined') {
                            translate = s.translate || 0;
                        }
                        var translatesDiff = s.maxTranslate() - s.minTranslate();
                        var wasBeginning = s.isBeginning;
                        var wasEnd = s.isEnd;
                        if (translatesDiff === 0) {
                            s.progress = 0;
                            s.isBeginning = s.isEnd = true;
                        }
                        else {
                            s.progress = (translate - s.minTranslate()) / (translatesDiff);
                            s.isBeginning = s.progress <= 0;
                            s.isEnd = s.progress >= 1;
                        }
                        if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
                        if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);

                        if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
                        s.emit('onProgress', s, s.progress);
                    };
                    s.updateActiveIndex = function () {
                        var translate = s.rtl ? s.translate : -s.translate;
                        var newActiveIndex, i, snapIndex;
                        for (i = 0; i < s.slidesGrid.length; i++) {
                            if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                                if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                                    newActiveIndex = i;
                                }
                                else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                                    newActiveIndex = i + 1;
                                }
                            }
                            else {
                                if (translate >= s.slidesGrid[i]) {
                                    newActiveIndex = i;
                                }
                            }
                        }
                        // Normalize slideIndex
                        if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
                        // for (i = 0; i < s.slidesGrid.length; i++) {
                        // if (- translate >= s.slidesGrid[i]) {
                        // newActiveIndex = i;
                        // }
                        // }
                        snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
                        if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;

                        if (newActiveIndex === s.activeIndex) {
                            return;
                        }
                        s.snapIndex = snapIndex;
                        s.previousIndex = s.activeIndex;
                        s.activeIndex = newActiveIndex;
                        s.updateClasses();
                    };

                    /*=========================
                      Classes
                      ===========================*/
                    s.updateClasses = function () {
                        s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
                        var activeSlide = s.slides.eq(s.activeIndex);
                        // Active classes
                        activeSlide.addClass(s.params.slideActiveClass);
                        // Next Slide
                        var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
                        if (s.params.loop && nextSlide.length === 0) {
                            s.slides.eq(0).addClass(s.params.slideNextClass);
                        }
                        // Prev Slide
                        var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
                        if (s.params.loop && prevSlide.length === 0) {
                            s.slides.eq(-1).addClass(s.params.slidePrevClass);
                        }

                        // Pagination
                        if (s.paginationContainer && s.paginationContainer.length > 0) {
                            // Current/Total
                            var current,
                                total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                            if (s.params.loop) {
                                current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
                                if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                                    current = current - (s.slides.length - s.loopedSlides * 2);
                                }
                                if (current > total - 1) current = current - total;
                                if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                            }
                            else {
                                if (typeof s.snapIndex !== 'undefined') {
                                    current = s.snapIndex;
                                }
                                else {
                                    current = s.activeIndex || 0;
                                }
                            }
                            // Types
                            if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                                s.bullets.removeClass(s.params.bulletActiveClass);
                                if (s.paginationContainer.length > 1) {
                                    s.bullets.each(function () {
                                        if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                                    });
                                }
                                else {
                                    s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                                }
                            }
                            if (s.params.paginationType === 'fraction') {
                                s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                                s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                            }
                            if (s.params.paginationType === 'progress') {
                                var scale = (current + 1) / total,
                                    scaleX = scale,
                                    scaleY = 1;
                                if (!s.isHorizontal()) {
                                    scaleY = scale;
                                    scaleX = 1;
                                }
                                s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                            }
                            if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                                s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                                s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                            }
                        }

                        // Next/active buttons
                        if (!s.params.loop) {
                            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                                if (s.isBeginning) {
                                    s.prevButton.addClass(s.params.buttonDisabledClass);
                                    if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                                }
                                else {
                                    s.prevButton.removeClass(s.params.buttonDisabledClass);
                                    if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                                }
                            }
                            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                                if (s.isEnd) {
                                    s.nextButton.addClass(s.params.buttonDisabledClass);
                                    if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                                }
                                else {
                                    s.nextButton.removeClass(s.params.buttonDisabledClass);
                                    if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                                }
                            }
                        }
                    };

                    /*=========================
                      Pagination
                      ===========================*/
                    s.updatePagination = function () {
                        if (!s.params.pagination) return;
                        if (s.paginationContainer && s.paginationContainer.length > 0) {
                            var paginationHTML = '';
                            if (s.params.paginationType === 'bullets') {
                                var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                                for (var i = 0; i < numberOfBullets; i++) {
                                    if (s.params.paginationBulletRender) {
                                        paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                                    }
                                    else {
                                        paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                                    }
                                }
                                s.paginationContainer.html(paginationHTML);
                                s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                                if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                                    s.a11y.initPagination();
                                }
                            }
                            if (s.params.paginationType === 'fraction') {
                                if (s.params.paginationFractionRender) {
                                    paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                                }
                                else {
                                    paginationHTML =
                                        '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                                        ' / ' +
                                        '<span class="' + s.params.paginationTotalClass + '"></span>';
                                }
                                s.paginationContainer.html(paginationHTML);
                            }
                            if (s.params.paginationType === 'progress') {
                                if (s.params.paginationProgressRender) {
                                    paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                                }
                                else {
                                    paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                                }
                                s.paginationContainer.html(paginationHTML);
                            }
                            if (s.params.paginationType !== 'custom') {
                                s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                            }
                        }
                    };
                    /*=========================
                      Common update method
                      ===========================*/
                    s.update = function (updateTranslate) {
                        s.updateContainerSize();
                        s.updateSlidesSize();
                        s.updateProgress();
                        s.updatePagination();
                        s.updateClasses();
                        if (s.params.scrollbar && s.scrollbar) {
                            s.scrollbar.set();
                        }
                        function forceSetTranslate() {
                            newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                            s.setWrapperTranslate(newTranslate);
                            s.updateActiveIndex();
                            s.updateClasses();
                        }
                        if (updateTranslate) {
                            var translated, newTranslate;
                            if (s.controller && s.controller.spline) {
                                s.controller.spline = undefined;
                            }
                            if (s.params.freeMode) {
                                forceSetTranslate();
                                if (s.params.autoHeight) {
                                    s.updateAutoHeight();
                                }
                            }
                            else {
                                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                                    translated = s.slideTo(s.slides.length - 1, 0, false, true);
                                }
                                else {
                                    translated = s.slideTo(s.activeIndex, 0, false, true);
                                }
                                if (!translated) {
                                    forceSetTranslate();
                                }
                            }
                        }
                        else if (s.params.autoHeight) {
                            s.updateAutoHeight();
                        }
                    };

                    /*=========================
                      Resize Handler
                      ===========================*/
                    s.onResize = function (forceUpdatePagination) {
                        //Breakpoints
                        if (s.params.breakpoints) {
                            s.setBreakpoint();
                        }

                        // Disable locks on resize
                        var allowSwipeToPrev = s.params.allowSwipeToPrev;
                        var allowSwipeToNext = s.params.allowSwipeToNext;
                        s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;

                        s.updateContainerSize();
                        s.updateSlidesSize();
                        if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
                        if (s.params.scrollbar && s.scrollbar) {
                            s.scrollbar.set();
                        }
                        if (s.controller && s.controller.spline) {
                            s.controller.spline = undefined;
                        }
                        var slideChangedBySlideTo = false;
                        if (s.params.freeMode) {
                            var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                            s.setWrapperTranslate(newTranslate);
                            s.updateActiveIndex();
                            s.updateClasses();

                            if (s.params.autoHeight) {
                                s.updateAutoHeight();
                            }
                        }
                        else {
                            s.updateClasses();
                            if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                                slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                            }
                            else {
                                slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                            }
                        }
                        if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                            s.lazy.load();
                        }
                        // Return locks after resize
                        s.params.allowSwipeToPrev = allowSwipeToPrev;
                        s.params.allowSwipeToNext = allowSwipeToNext;
                    };

                    /*=========================
                      Events
                      ===========================*/

                    //Define Touch Events
                    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
                    if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
                    else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                    s.touchEvents = {
                        start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : desktopEvents[0],
                        move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
                        end: s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
                    };


                    // WP8 Touch Events Fix
                    if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
                        (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
                    }

                    // Attach/detach events
                    s.initEvents = function (detach) {
                        var actionDom = detach ? 'off' : 'on';
                        var action = detach ? 'removeEventListener' : 'addEventListener';
                        var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
                        var target = s.support.touch ? touchEventsTarget : document;

                        var moveCapture = s.params.nested ? true : false;

                        //Touch Events
                        if (s.browser.ie) {
                            touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                            target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                            target[action](s.touchEvents.end, s.onTouchEnd, false);
                        }
                        else {
                            if (s.support.touch) {
                                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                                touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                                touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                            }
                            if (params.simulateTouch && !s.device.ios && !s.device.android) {
                                touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                                document[action]('mousemove', s.onTouchMove, moveCapture);
                                document[action]('mouseup', s.onTouchEnd, false);
                            }
                        }
                        window[action]('resize', s.onResize);

                        // Next, Prev, Index
                        if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                            s.nextButton[actionDom]('click', s.onClickNext);
                            if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
                        }
                        if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                            s.prevButton[actionDom]('click', s.onClickPrev);
                            if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
                        }
                        if (s.params.pagination && s.params.paginationClickable) {
                            s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                            if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
                        }

                        // Prevent Links Clicks
                        if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
                    };
                    s.attachEvents = function () {
                        s.initEvents();
                    };
                    s.detachEvents = function () {
                        s.initEvents(true);
                    };

                    /*=========================
                      Handle Clicks
                      ===========================*/
                    // Prevent Clicks
                    s.allowClick = true;
                    s.preventClicks = function (e) {
                        if (!s.allowClick) {
                            if (s.params.preventClicks) e.preventDefault();
                            if (s.params.preventClicksPropagation && s.animating) {
                                e.stopPropagation();
                                e.stopImmediatePropagation();
                            }
                        }
                    };
                    // Clicks
                    s.onClickNext = function (e) {
                        e.preventDefault();
                        if (s.isEnd && !s.params.loop) return;
                        s.slideNext();
                    };
                    s.onClickPrev = function (e) {
                        e.preventDefault();
                        if (s.isBeginning && !s.params.loop) return;
                        s.slidePrev();
                    };
                    s.onClickIndex = function (e) {
                        e.preventDefault();
                        var index = $(this).index() * s.params.slidesPerGroup;
                        if (s.params.loop) index = index + s.loopedSlides;
                        s.slideTo(index);
                    };

                    /*=========================
                      Handle Touches
                      ===========================*/
                    function findElementInEvent(e, selector) {
                        var el = $(e.target);
                        if (!el.is(selector)) {
                            if (typeof selector === 'string') {
                                el = el.parents(selector);
                            }
                            else if (selector.nodeType) {
                                var found;
                                el.parents().each(function (index, _el) {
                                    if (_el === selector) found = selector;
                                });
                                if (!found) return undefined;
                                else return selector;
                            }
                        }
                        if (el.length === 0) {
                            return undefined;
                        }
                        return el[0];
                    }
                    s.updateClickedSlide = function (e) {
                        var slide = findElementInEvent(e, '.' + s.params.slideClass);
                        var slideFound = false;
                        if (slide) {
                            for (var i = 0; i < s.slides.length; i++) {
                                if (s.slides[i] === slide) slideFound = true;
                            }
                        }

                        if (slide && slideFound) {
                            s.clickedSlide = slide;
                            s.clickedIndex = $(slide).index();
                        }
                        else {
                            s.clickedSlide = undefined;
                            s.clickedIndex = undefined;
                            return;
                        }
                        if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                            var slideToIndex = s.clickedIndex,
                                realIndex,
                                duplicatedSlides;
                            if (s.params.loop) {
                                if (s.animating) return;
                                realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                                if (s.params.centeredSlides) {
                                    if ((slideToIndex < s.loopedSlides - s.params.slidesPerView / 2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView / 2)) {
                                        s.fixLoop();
                                        slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                                        setTimeout(function () {
                                            s.slideTo(slideToIndex);
                                        }, 0);
                                    }
                                    else {
                                        s.slideTo(slideToIndex);
                                    }
                                }
                                else {
                                    if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                                        s.fixLoop();
                                        slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                                        setTimeout(function () {
                                            s.slideTo(slideToIndex);
                                        }, 0);
                                    }
                                    else {
                                        s.slideTo(slideToIndex);
                                    }
                                }
                            }
                            else {
                                s.slideTo(slideToIndex);
                            }
                        }
                    };

                    var isTouched,
                        isMoved,
                        allowTouchCallbacks,
                        touchStartTime,
                        isScrolling,
                        currentTranslate,
                        startTranslate,
                        allowThresholdMove,
                        // Form elements to match
                        formElements = 'input, select, textarea, button',
                        // Last click time
                        lastClickTime = Date.now(), clickTimeout,
                        //Velocities
                        velocities = [],
                        allowMomentumBounce;

                    // Animating Flag
                    s.animating = false;

                    // Touches information
                    s.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    };

                    // Touch handlers
                    var isTouchEvent, startMoving;
                    s.onTouchStart = function (e) {
                        if (e.originalEvent) e = e.originalEvent;
                        isTouchEvent = e.type === 'touchstart';
                        if (!isTouchEvent && 'which' in e && e.which === 3) return;
                        if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                            s.allowClick = true;
                            return;
                        }
                        if (s.params.swipeHandler) {
                            if (!findElementInEvent(e, s.params.swipeHandler)) return;
                        }

                        var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                        var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;

                        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
                        if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                            return;
                        }

                        isTouched = true;
                        isMoved = false;
                        allowTouchCallbacks = true;
                        isScrolling = undefined;
                        startMoving = undefined;
                        s.touches.startX = startX;
                        s.touches.startY = startY;
                        touchStartTime = Date.now();
                        s.allowClick = true;
                        s.updateContainerSize();
                        s.swipeDirection = undefined;
                        if (s.params.threshold > 0) allowThresholdMove = false;
                        if (e.type !== 'touchstart') {
                            var preventDefault = true;
                            if ($(e.target).is(formElements)) preventDefault = false;
                            if (document.activeElement && $(document.activeElement).is(formElements)) {
                                document.activeElement.blur();
                            }
                            if (preventDefault) {
                                e.preventDefault();
                            }
                        }
                        s.emit('onTouchStart', s, e);
                    };

                    s.onTouchMove = function (e) {
                        if (e.originalEvent) e = e.originalEvent;
                        if (isTouchEvent && e.type === 'mousemove') return;
                        if (e.preventedByNestedSwiper) {
                            s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                            s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                            return;
                        }
                        if (s.params.onlyExternal) {
                            // isMoved = true;
                            s.allowClick = false;
                            if (isTouched) {
                                s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                                s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                                touchStartTime = Date.now();
                            }
                            return;
                        }
                        if (isTouchEvent && document.activeElement) {
                            if (e.target === document.activeElement && $(e.target).is(formElements)) {
                                isMoved = true;
                                s.allowClick = false;
                                return;
                            }
                        }
                        if (allowTouchCallbacks) {
                            s.emit('onTouchMove', s, e);
                        }
                        if (e.targetTouches && e.targetTouches.length > 1) return;

                        s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                        s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

                        if (typeof isScrolling === 'undefined') {
                            var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                            isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
                        }
                        if (isScrolling) {
                            s.emit('onTouchMoveOpposite', s, e);
                        }
                        if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                            if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                                startMoving = true;
                            }
                        }
                        if (!isTouched) return;
                        if (isScrolling) {
                            isTouched = false;
                            return;
                        }
                        if (!startMoving && s.browser.ieTouch) {
                            return;
                        }
                        s.allowClick = false;
                        s.emit('onSliderMove', s, e);
                        e.preventDefault();
                        if (s.params.touchMoveStopPropagation && !s.params.nested) {
                            e.stopPropagation();
                        }

                        if (!isMoved) {
                            if (params.loop) {
                                s.fixLoop();
                            }
                            startTranslate = s.getWrapperTranslate();
                            s.setWrapperTransition(0);
                            if (s.animating) {
                                s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                            }
                            if (s.params.autoplay && s.autoplaying) {
                                if (s.params.autoplayDisableOnInteraction) {
                                    s.stopAutoplay();
                                }
                                else {
                                    s.pauseAutoplay();
                                }
                            }
                            allowMomentumBounce = false;
                            //Grab Cursor
                            if (s.params.grabCursor) {
                                s.container[0].style.cursor = 'move';
                                s.container[0].style.cursor = '-webkit-grabbing';
                                s.container[0].style.cursor = '-moz-grabbin';
                                s.container[0].style.cursor = 'grabbing';
                            }
                        }
                        isMoved = true;

                        var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;

                        diff = diff * s.params.touchRatio;
                        if (s.rtl) diff = -diff;

                        s.swipeDirection = diff > 0 ? 'prev' : 'next';
                        currentTranslate = diff + startTranslate;

                        var disableParentSwiper = true;
                        if ((diff > 0 && currentTranslate > s.minTranslate())) {
                            disableParentSwiper = false;
                            if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
                        }
                        else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                            disableParentSwiper = false;
                            if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
                        }

                        if (disableParentSwiper) {
                            e.preventedByNestedSwiper = true;
                        }

                        // Directions locks
                        if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                            currentTranslate = startTranslate;
                        }
                        if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                            currentTranslate = startTranslate;
                        }

                        if (!s.params.followFinger) return;

                        // Threshold
                        if (s.params.threshold > 0) {
                            if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                                if (!allowThresholdMove) {
                                    allowThresholdMove = true;
                                    s.touches.startX = s.touches.currentX;
                                    s.touches.startY = s.touches.currentY;
                                    currentTranslate = startTranslate;
                                    s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                                    return;
                                }
                            }
                            else {
                                currentTranslate = startTranslate;
                                return;
                            }
                        }
                        // Update active index in free mode
                        if (s.params.freeMode || s.params.watchSlidesProgress) {
                            s.updateActiveIndex();
                        }
                        if (s.params.freeMode) {
                            //Velocity
                            if (velocities.length === 0) {
                                velocities.push({
                                    position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                                    time: touchStartTime
                                });
                            }
                            velocities.push({
                                position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                                time: (new window.Date()).getTime()
                            });
                        }
                        // Update progress
                        s.updateProgress(currentTranslate);
                        // Update translate
                        s.setWrapperTranslate(currentTranslate);
                    };
                    s.onTouchEnd = function (e) {
                        if (e.originalEvent) e = e.originalEvent;
                        if (allowTouchCallbacks) {
                            s.emit('onTouchEnd', s, e);
                        }
                        allowTouchCallbacks = false;
                        if (!isTouched) return;
                        //Return Grab Cursor
                        if (s.params.grabCursor && isMoved && isTouched) {
                            s.container[0].style.cursor = 'move';
                            s.container[0].style.cursor = '-webkit-grab';
                            s.container[0].style.cursor = '-moz-grab';
                            s.container[0].style.cursor = 'grab';
                        }

                        // Time diff
                        var touchEndTime = Date.now();
                        var timeDiff = touchEndTime - touchStartTime;

                        // Tap, doubleTap, Click
                        if (s.allowClick) {
                            s.updateClickedSlide(e);
                            s.emit('onTap', s, e);
                            if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                                if (clickTimeout) clearTimeout(clickTimeout);
                                clickTimeout = setTimeout(function () {
                                    if (!s) return;
                                    if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                                        s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                                    }
                                    s.emit('onClick', s, e);
                                }, 300);

                            }
                            if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                                if (clickTimeout) clearTimeout(clickTimeout);
                                s.emit('onDoubleTap', s, e);
                            }
                        }

                        lastClickTime = Date.now();
                        setTimeout(function () {
                            if (s) s.allowClick = true;
                        }, 0);

                        if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                            isTouched = isMoved = false;
                            return;
                        }
                        isTouched = isMoved = false;

                        var currentPos;
                        if (s.params.followFinger) {
                            currentPos = s.rtl ? s.translate : -s.translate;
                        }
                        else {
                            currentPos = -currentTranslate;
                        }
                        if (s.params.freeMode) {
                            if (currentPos < -s.minTranslate()) {
                                s.slideTo(s.activeIndex);
                                return;
                            }
                            else if (currentPos > -s.maxTranslate()) {
                                if (s.slides.length < s.snapGrid.length) {
                                    s.slideTo(s.snapGrid.length - 1);
                                }
                                else {
                                    s.slideTo(s.slides.length - 1);
                                }
                                return;
                            }

                            if (s.params.freeModeMomentum) {
                                if (velocities.length > 1) {
                                    var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();

                                    var distance = lastMoveEvent.position - velocityEvent.position;
                                    var time = lastMoveEvent.time - velocityEvent.time;
                                    s.velocity = distance / time;
                                    s.velocity = s.velocity / 2;
                                    if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                                        s.velocity = 0;
                                    }
                                    // this implies that the user stopped moving a finger then released.
                                    // There would be no events with distance zero, so the last event is stale.
                                    if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                                        s.velocity = 0;
                                    }
                                } else {
                                    s.velocity = 0;
                                }

                                velocities.length = 0;
                                var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                                var momentumDistance = s.velocity * momentumDuration;

                                var newPosition = s.translate + momentumDistance;
                                if (s.rtl) newPosition = -newPosition;
                                var doBounce = false;
                                var afterBouncePosition;
                                var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                                if (newPosition < s.maxTranslate()) {
                                    if (s.params.freeModeMomentumBounce) {
                                        if (newPosition + s.maxTranslate() < -bounceAmount) {
                                            newPosition = s.maxTranslate() - bounceAmount;
                                        }
                                        afterBouncePosition = s.maxTranslate();
                                        doBounce = true;
                                        allowMomentumBounce = true;
                                    }
                                    else {
                                        newPosition = s.maxTranslate();
                                    }
                                }
                                else if (newPosition > s.minTranslate()) {
                                    if (s.params.freeModeMomentumBounce) {
                                        if (newPosition - s.minTranslate() > bounceAmount) {
                                            newPosition = s.minTranslate() + bounceAmount;
                                        }
                                        afterBouncePosition = s.minTranslate();
                                        doBounce = true;
                                        allowMomentumBounce = true;
                                    }
                                    else {
                                        newPosition = s.minTranslate();
                                    }
                                }
                                else if (s.params.freeModeSticky) {
                                    var j = 0,
                                        nextSlide;
                                    for (j = 0; j < s.snapGrid.length; j += 1) {
                                        if (s.snapGrid[j] > -newPosition) {
                                            nextSlide = j;
                                            break;
                                        }

                                    }
                                    if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                                        newPosition = s.snapGrid[nextSlide];
                                    } else {
                                        newPosition = s.snapGrid[nextSlide - 1];
                                    }
                                    if (!s.rtl) newPosition = -newPosition;
                                }
                                //Fix duration
                                if (s.velocity !== 0) {
                                    if (s.rtl) {
                                        momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                                    }
                                    else {
                                        momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                                    }
                                }
                                else if (s.params.freeModeSticky) {
                                    s.slideReset();
                                    return;
                                }

                                if (s.params.freeModeMomentumBounce && doBounce) {
                                    s.updateProgress(afterBouncePosition);
                                    s.setWrapperTransition(momentumDuration);
                                    s.setWrapperTranslate(newPosition);
                                    s.onTransitionStart();
                                    s.animating = true;
                                    s.wrapper.transitionEnd(function () {
                                        if (!s || !allowMomentumBounce) return;
                                        s.emit('onMomentumBounce', s);

                                        s.setWrapperTransition(s.params.speed);
                                        s.setWrapperTranslate(afterBouncePosition);
                                        s.wrapper.transitionEnd(function () {
                                            if (!s) return;
                                            s.onTransitionEnd();
                                        });
                                    });
                                } else if (s.velocity) {
                                    s.updateProgress(newPosition);
                                    s.setWrapperTransition(momentumDuration);
                                    s.setWrapperTranslate(newPosition);
                                    s.onTransitionStart();
                                    if (!s.animating) {
                                        s.animating = true;
                                        s.wrapper.transitionEnd(function () {
                                            if (!s) return;
                                            s.onTransitionEnd();
                                        });
                                    }

                                } else {
                                    s.updateProgress(newPosition);
                                }

                                s.updateActiveIndex();
                            }
                            if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                                s.updateProgress();
                                s.updateActiveIndex();
                            }
                            return;
                        }

                        // Find current slide
                        var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
                        for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                            if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                                if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                                    stopIndex = i;
                                    groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                                }
                            }
                            else {
                                if (currentPos >= s.slidesGrid[i]) {
                                    stopIndex = i;
                                    groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                                }
                            }
                        }

                        // Find current slide size
                        var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;

                        if (timeDiff > s.params.longSwipesMs) {
                            // Long touches
                            if (!s.params.longSwipes) {
                                s.slideTo(s.activeIndex);
                                return;
                            }
                            if (s.swipeDirection === 'next') {
                                if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                                else s.slideTo(stopIndex);

                            }
                            if (s.swipeDirection === 'prev') {
                                if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                                else s.slideTo(stopIndex);
                            }
                        }
                        else {
                            // Short swipes
                            if (!s.params.shortSwipes) {
                                s.slideTo(s.activeIndex);
                                return;
                            }
                            if (s.swipeDirection === 'next') {
                                s.slideTo(stopIndex + s.params.slidesPerGroup);

                            }
                            if (s.swipeDirection === 'prev') {
                                s.slideTo(stopIndex);
                            }
                        }
                    };
                    /*=========================
                      Transitions
                      ===========================*/
                    s._slideTo = function (slideIndex, speed) {
                        return s.slideTo(slideIndex, speed, true, true);
                    };
                    s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
                        if (typeof runCallbacks === 'undefined') runCallbacks = true;
                        if (typeof slideIndex === 'undefined') slideIndex = 0;
                        if (slideIndex < 0) slideIndex = 0;
                        s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
                        if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;

                        var translate = -s.snapGrid[s.snapIndex];
                        // Stop autoplay
                        if (s.params.autoplay && s.autoplaying) {
                            if (internal || !s.params.autoplayDisableOnInteraction) {
                                s.pauseAutoplay(speed);
                            }
                            else {
                                s.stopAutoplay();
                            }
                        }
                        // Update progress
                        s.updateProgress(translate);

                        // Normalize slideIndex
                        for (var i = 0; i < s.slidesGrid.length; i++) {
                            if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                                slideIndex = i;
                            }
                        }

                        // Directions locks
                        if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                            return false;
                        }
                        if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                            if ((s.activeIndex || 0) !== slideIndex) return false;
                        }

                        // Update Index
                        if (typeof speed === 'undefined') speed = s.params.speed;
                        s.previousIndex = s.activeIndex || 0;
                        s.activeIndex = slideIndex;

                        if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                            // Update Height
                            if (s.params.autoHeight) {
                                s.updateAutoHeight();
                            }
                            s.updateClasses();
                            if (s.params.effect !== 'slide') {
                                s.setWrapperTranslate(translate);
                            }
                            return false;
                        }
                        s.updateClasses();
                        s.onTransitionStart(runCallbacks);

                        if (speed === 0) {
                            s.setWrapperTranslate(translate);
                            s.setWrapperTransition(0);
                            s.onTransitionEnd(runCallbacks);
                        }
                        else {
                            s.setWrapperTranslate(translate);
                            s.setWrapperTransition(speed);
                            if (!s.animating) {
                                s.animating = true;
                                s.wrapper.transitionEnd(function () {
                                    if (!s) return;
                                    s.onTransitionEnd(runCallbacks);
                                });
                            }

                        }

                        return true;
                    };

                    s.onTransitionStart = function (runCallbacks) {
                        if (typeof runCallbacks === 'undefined') runCallbacks = true;
                        if (s.params.autoHeight) {
                            s.updateAutoHeight();
                        }
                        if (s.lazy) s.lazy.onTransitionStart();
                        if (runCallbacks) {
                            s.emit('onTransitionStart', s);
                            if (s.activeIndex !== s.previousIndex) {
                                s.emit('onSlideChangeStart', s);
                                if (s.activeIndex > s.previousIndex) {
                                    s.emit('onSlideNextStart', s);
                                }
                                else {
                                    s.emit('onSlidePrevStart', s);
                                }
                            }

                        }
                    };
                    s.onTransitionEnd = function (runCallbacks) {
                        s.animating = false;
                        s.setWrapperTransition(0);
                        if (typeof runCallbacks === 'undefined') runCallbacks = true;
                        if (s.lazy) s.lazy.onTransitionEnd();
                        if (runCallbacks) {
                            s.emit('onTransitionEnd', s);
                            if (s.activeIndex !== s.previousIndex) {
                                s.emit('onSlideChangeEnd', s);
                                if (s.activeIndex > s.previousIndex) {
                                    s.emit('onSlideNextEnd', s);
                                }
                                else {
                                    s.emit('onSlidePrevEnd', s);
                                }
                            }
                        }
                        if (s.params.hashnav && s.hashnav) {
                            s.hashnav.setHash();
                        }

                    };
                    s.slideNext = function (runCallbacks, speed, internal) {
                        if (s.params.loop) {
                            if (s.animating) return false;
                            s.fixLoop();
                            var clientLeft = s.container[0].clientLeft;
                            return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
                        }
                        else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
                    };
                    s._slideNext = function (speed) {
                        return s.slideNext(true, speed, true);
                    };
                    s.slidePrev = function (runCallbacks, speed, internal) {
                        if (s.params.loop) {
                            if (s.animating) return false;
                            s.fixLoop();
                            var clientLeft = s.container[0].clientLeft;
                            return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
                        }
                        else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
                    };
                    s._slidePrev = function (speed) {
                        return s.slidePrev(true, speed, true);
                    };
                    s.slideReset = function (runCallbacks, speed, internal) {
                        return s.slideTo(s.activeIndex, speed, runCallbacks);
                    };

                    /*=========================
                      Translate/transition helpers
                      ===========================*/
                    s.setWrapperTransition = function (duration, byController) {
                        s.wrapper.transition(duration);
                        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                            s.effects[s.params.effect].setTransition(duration);
                        }
                        if (s.params.parallax && s.parallax) {
                            s.parallax.setTransition(duration);
                        }
                        if (s.params.scrollbar && s.scrollbar) {
                            s.scrollbar.setTransition(duration);
                        }
                        if (s.params.control && s.controller) {
                            s.controller.setTransition(duration, byController);
                        }
                        s.emit('onSetTransition', s, duration);
                    };
                    s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
                        var x = 0, y = 0, z = 0;
                        if (s.isHorizontal()) {
                            x = s.rtl ? -translate : translate;
                        }
                        else {
                            y = translate;
                        }

                        if (s.params.roundLengths) {
                            x = round(x);
                            y = round(y);
                        }

                        if (!s.params.virtualTranslate) {
                            if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                            else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
                        }

                        s.translate = s.isHorizontal() ? x : y;

                        // Check if we need to update progress
                        var progress;
                        var translatesDiff = s.maxTranslate() - s.minTranslate();
                        if (translatesDiff === 0) {
                            progress = 0;
                        }
                        else {
                            progress = (translate - s.minTranslate()) / (translatesDiff);
                        }
                        if (progress !== s.progress) {
                            s.updateProgress(translate);
                        }

                        if (updateActiveIndex) s.updateActiveIndex();
                        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                            s.effects[s.params.effect].setTranslate(s.translate);
                        }
                        if (s.params.parallax && s.parallax) {
                            s.parallax.setTranslate(s.translate);
                        }
                        if (s.params.scrollbar && s.scrollbar) {
                            s.scrollbar.setTranslate(s.translate);
                        }
                        if (s.params.control && s.controller) {
                            s.controller.setTranslate(s.translate, byController);
                        }
                        s.emit('onSetTranslate', s, s.translate);
                    };

                    s.getTranslate = function (el, axis) {
                        var matrix, curTransform, curStyle, transformMatrix;

                        // automatic axis detection
                        if (typeof axis === 'undefined') {
                            axis = 'x';
                        }

                        if (s.params.virtualTranslate) {
                            return s.rtl ? -s.translate : s.translate;
                        }

                        curStyle = window.getComputedStyle(el, null);
                        if (window.WebKitCSSMatrix) {
                            curTransform = curStyle.transform || curStyle.webkitTransform;
                            if (curTransform.split(',').length > 6) {
                                curTransform = curTransform.split(', ').map(function (a) {
                                    return a.replace(',', '.');
                                }).join(', ');
                            }
                            // Some old versions of Webkit choke when 'none' is passed; pass
                            // empty string instead in this case
                            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
                        }
                        else {
                            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                            matrix = transformMatrix.toString().split(',');
                        }

                        if (axis === 'x') {
                            //Latest Chrome and webkits Fix
                            if (window.WebKitCSSMatrix)
                                curTransform = transformMatrix.m41;
                                //Crazy IE10 Matrix
                            else if (matrix.length === 16)
                                curTransform = parseFloat(matrix[12]);
                                //Normal Browsers
                            else
                                curTransform = parseFloat(matrix[4]);
                        }
                        if (axis === 'y') {
                            //Latest Chrome and webkits Fix
                            if (window.WebKitCSSMatrix)
                                curTransform = transformMatrix.m42;
                                //Crazy IE10 Matrix
                            else if (matrix.length === 16)
                                curTransform = parseFloat(matrix[13]);
                                //Normal Browsers
                            else
                                curTransform = parseFloat(matrix[5]);
                        }
                        if (s.rtl && curTransform) curTransform = -curTransform;
                        return curTransform || 0;
                    };
                    s.getWrapperTranslate = function (axis) {
                        if (typeof axis === 'undefined') {
                            axis = s.isHorizontal() ? 'x' : 'y';
                        }
                        return s.getTranslate(s.wrapper[0], axis);
                    };

                    /*=========================
                      Observer
                      ===========================*/
                    s.observers = [];
                    function initObserver(target, options) {
                        options = options || {};
                        // create an observer instance
                        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                        var observer = new ObserverFunc(function (mutations) {
                            mutations.forEach(function (mutation) {
                                s.onResize(true);
                                s.emit('onObserverUpdate', s, mutation);
                            });
                        });

                        observer.observe(target, {
                            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                            childList: typeof options.childList === 'undefined' ? true : options.childList,
                            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
                        });

                        s.observers.push(observer);
                    }
                    s.initObservers = function () {
                        if (s.params.observeParents) {
                            var containerParents = s.container.parents();
                            for (var i = 0; i < containerParents.length; i++) {
                                initObserver(containerParents[i]);
                            }
                        }

                        // Observe container
                        initObserver(s.container[0], { childList: false });

                        // Observe wrapper
                        initObserver(s.wrapper[0], { attributes: false });
                    };
                    s.disconnectObservers = function () {
                        for (var i = 0; i < s.observers.length; i++) {
                            s.observers[i].disconnect();
                        }
                        s.observers = [];
                    };
                    /*=========================
                      Loop
                      ===========================*/
                    // Create looped slides
                    s.createLoop = function () {
                        // Remove duplicated slides
                        s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();

                        var slides = s.wrapper.children('.' + s.params.slideClass);

                        if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;

                        s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
                        s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
                        if (s.loopedSlides > slides.length) {
                            s.loopedSlides = slides.length;
                        }

                        var prependSlides = [], appendSlides = [], i;
                        slides.each(function (index, el) {
                            var slide = $(this);
                            if (index < s.loopedSlides) appendSlides.push(el);
                            if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                            slide.attr('data-swiper-slide-index', index);
                        });
                        for (i = 0; i < appendSlides.length; i++) {
                            s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
                        }
                        for (i = prependSlides.length - 1; i >= 0; i--) {
                            s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
                        }
                    };
                    s.destroyLoop = function () {
                        s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
                        s.slides.removeAttr('data-swiper-slide-index');
                    };
                    s.reLoop = function (updatePosition) {
                        var oldIndex = s.activeIndex - s.loopedSlides;
                        s.destroyLoop();
                        s.createLoop();
                        s.updateSlidesSize();
                        if (updatePosition) {
                            s.slideTo(oldIndex + s.loopedSlides, 0, false);
                        }

                    };
                    s.fixLoop = function () {
                        var newIndex;
                        //Fix For Negative Oversliding
                        if (s.activeIndex < s.loopedSlides) {
                            newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                            newIndex = newIndex + s.loopedSlides;
                            s.slideTo(newIndex, 0, false, true);
                        }
                            //Fix For Positive Oversliding
                        else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                            newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                            newIndex = newIndex + s.loopedSlides;
                            s.slideTo(newIndex, 0, false, true);
                        }
                    };
                    /*=========================
                      Append/Prepend/Remove Slides
                      ===========================*/
                    s.appendSlide = function (slides) {
                        if (s.params.loop) {
                            s.destroyLoop();
                        }
                        if (typeof slides === 'object' && slides.length) {
                            for (var i = 0; i < slides.length; i++) {
                                if (slides[i]) s.wrapper.append(slides[i]);
                            }
                        }
                        else {
                            s.wrapper.append(slides);
                        }
                        if (s.params.loop) {
                            s.createLoop();
                        }
                        if (!(s.params.observer && s.support.observer)) {
                            s.update(true);
                        }
                    };
                    s.prependSlide = function (slides) {
                        if (s.params.loop) {
                            s.destroyLoop();
                        }
                        var newActiveIndex = s.activeIndex + 1;
                        if (typeof slides === 'object' && slides.length) {
                            for (var i = 0; i < slides.length; i++) {
                                if (slides[i]) s.wrapper.prepend(slides[i]);
                            }
                            newActiveIndex = s.activeIndex + slides.length;
                        }
                        else {
                            s.wrapper.prepend(slides);
                        }
                        if (s.params.loop) {
                            s.createLoop();
                        }
                        if (!(s.params.observer && s.support.observer)) {
                            s.update(true);
                        }
                        s.slideTo(newActiveIndex, 0, false);
                    };
                    s.removeSlide = function (slidesIndexes) {
                        if (s.params.loop) {
                            s.destroyLoop();
                            s.slides = s.wrapper.children('.' + s.params.slideClass);
                        }
                        var newActiveIndex = s.activeIndex,
                            indexToRemove;
                        if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                            for (var i = 0; i < slidesIndexes.length; i++) {
                                indexToRemove = slidesIndexes[i];
                                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                                if (indexToRemove < newActiveIndex) newActiveIndex--;
                            }
                            newActiveIndex = Math.max(newActiveIndex, 0);
                        }
                        else {
                            indexToRemove = slidesIndexes;
                            if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                            if (indexToRemove < newActiveIndex) newActiveIndex--;
                            newActiveIndex = Math.max(newActiveIndex, 0);
                        }

                        if (s.params.loop) {
                            s.createLoop();
                        }

                        if (!(s.params.observer && s.support.observer)) {
                            s.update(true);
                        }
                        if (s.params.loop) {
                            s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
                        }
                        else {
                            s.slideTo(newActiveIndex, 0, false);
                        }

                    };
                    s.removeAllSlides = function () {
                        var slidesIndexes = [];
                        for (var i = 0; i < s.slides.length; i++) {
                            slidesIndexes.push(i);
                        }
                        s.removeSlide(slidesIndexes);
                    };


                    /*=========================
                      Effects
                      ===========================*/
                    s.effects = {
                        fade: {
                            setTranslate: function () {
                                for (var i = 0; i < s.slides.length; i++) {
                                    var slide = s.slides.eq(i);
                                    var offset = slide[0].swiperSlideOffset;
                                    var tx = -offset;
                                    if (!s.params.virtualTranslate) tx = tx - s.translate;
                                    var ty = 0;
                                    if (!s.isHorizontal()) {
                                        ty = tx;
                                        tx = 0;
                                    }
                                    var slideOpacity = s.params.fade.crossFade ?
                                            Math.max(1 - Math.abs(slide[0].progress), 0) :
                                            1 + Math.min(Math.max(slide[0].progress, -1), 0);
                                    slide
                                        .css({
                                            opacity: slideOpacity
                                        })
                                        .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');

                                }

                            },
                            setTransition: function (duration) {
                                s.slides.transition(duration);
                                if (s.params.virtualTranslate && duration !== 0) {
                                    var eventTriggered = false;
                                    s.slides.transitionEnd(function () {
                                        if (eventTriggered) return;
                                        if (!s) return;
                                        eventTriggered = true;
                                        s.animating = false;
                                        var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                                        for (var i = 0; i < triggerEvents.length; i++) {
                                            s.wrapper.trigger(triggerEvents[i]);
                                        }
                                    });
                                }
                            }
                        },
                        flip: {
                            setTranslate: function () {
                                for (var i = 0; i < s.slides.length; i++) {
                                    var slide = s.slides.eq(i);
                                    var progress = slide[0].progress;
                                    if (s.params.flip.limitRotation) {
                                        progress = Math.max(Math.min(slide[0].progress, 1), -1);
                                    }
                                    var offset = slide[0].swiperSlideOffset;
                                    var rotate = -180 * progress,
                                        rotateY = rotate,
                                        rotateX = 0,
                                        tx = -offset,
                                        ty = 0;
                                    if (!s.isHorizontal()) {
                                        ty = tx;
                                        tx = 0;
                                        rotateX = -rotateY;
                                        rotateY = 0;
                                    }
                                    else if (s.rtl) {
                                        rotateY = -rotateY;
                                    }

                                    slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;

                                    if (s.params.flip.slideShadows) {
                                        //Set shadows
                                        var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                                        var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                                        if (shadowBefore.length === 0) {
                                            shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                            slide.append(shadowBefore);
                                        }
                                        if (shadowAfter.length === 0) {
                                            shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                            slide.append(shadowAfter);
                                        }
                                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                                    }

                                    slide
                                        .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                                }
                            },
                            setTransition: function (duration) {
                                s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                                if (s.params.virtualTranslate && duration !== 0) {
                                    var eventTriggered = false;
                                    s.slides.eq(s.activeIndex).transitionEnd(function () {
                                        if (eventTriggered) return;
                                        if (!s) return;
                                        if (!$(this).hasClass(s.params.slideActiveClass)) return;
                                        eventTriggered = true;
                                        s.animating = false;
                                        var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                                        for (var i = 0; i < triggerEvents.length; i++) {
                                            s.wrapper.trigger(triggerEvents[i]);
                                        }
                                    });
                                }
                            }
                        },
                        cube: {
                            setTranslate: function () {
                                var wrapperRotate = 0, cubeShadow;
                                if (s.params.cube.shadow) {
                                    if (s.isHorizontal()) {
                                        cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                                        if (cubeShadow.length === 0) {
                                            cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                            s.wrapper.append(cubeShadow);
                                        }
                                        cubeShadow.css({ height: s.width + 'px' });
                                    }
                                    else {
                                        cubeShadow = s.container.find('.swiper-cube-shadow');
                                        if (cubeShadow.length === 0) {
                                            cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                            s.container.append(cubeShadow);
                                        }
                                    }
                                }
                                for (var i = 0; i < s.slides.length; i++) {
                                    var slide = s.slides.eq(i);
                                    var slideAngle = i * 90;
                                    var round = Math.floor(slideAngle / 360);
                                    if (s.rtl) {
                                        slideAngle = -slideAngle;
                                        round = Math.floor(-slideAngle / 360);
                                    }
                                    var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                                    var tx = 0, ty = 0, tz = 0;
                                    if (i % 4 === 0) {
                                        tx = -round * 4 * s.size;
                                        tz = 0;
                                    }
                                    else if ((i - 1) % 4 === 0) {
                                        tx = 0;
                                        tz = -round * 4 * s.size;
                                    }
                                    else if ((i - 2) % 4 === 0) {
                                        tx = s.size + round * 4 * s.size;
                                        tz = s.size;
                                    }
                                    else if ((i - 3) % 4 === 0) {
                                        tx = -s.size;
                                        tz = 3 * s.size + s.size * 4 * round;
                                    }
                                    if (s.rtl) {
                                        tx = -tx;
                                    }

                                    if (!s.isHorizontal()) {
                                        ty = tx;
                                        tx = 0;
                                    }

                                    var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                                    if (progress <= 1 && progress > -1) {
                                        wrapperRotate = i * 90 + progress * 90;
                                        if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                                    }
                                    slide.transform(transform);
                                    if (s.params.cube.slideShadows) {
                                        //Set shadows
                                        var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                                        var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                                        if (shadowBefore.length === 0) {
                                            shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                            slide.append(shadowBefore);
                                        }
                                        if (shadowAfter.length === 0) {
                                            shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                            slide.append(shadowAfter);
                                        }
                                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                                    }
                                }
                                s.wrapper.css({
                                    '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                                    '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                                    '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                                    'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                                });

                                if (s.params.cube.shadow) {
                                    if (s.isHorizontal()) {
                                        cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                                    }
                                    else {
                                        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                                        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                                        var scale1 = s.params.cube.shadowScale,
                                            scale2 = s.params.cube.shadowScale / multiplier,
                                            offset = s.params.cube.shadowOffset;
                                        cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                                    }
                                }
                                var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                                s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                            },
                            setTransition: function (duration) {
                                s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                                if (s.params.cube.shadow && !s.isHorizontal()) {
                                    s.container.find('.swiper-cube-shadow').transition(duration);
                                }
                            }
                        },
                        coverflow: {
                            setTranslate: function () {
                                var transform = s.translate;
                                var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                                var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
                                var translate = s.params.coverflow.depth;
                                //Each slide offset from center
                                for (var i = 0, length = s.slides.length; i < length; i++) {
                                    var slide = s.slides.eq(i);
                                    var slideSize = s.slidesSizesGrid[i];
                                    var slideOffset = slide[0].swiperSlideOffset;
                                    var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;

                                    var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                                    var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                                    // var rotateZ = 0
                                    var translateZ = -translate * Math.abs(offsetMultiplier);

                                    var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                                    var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;

                                    //Fix for ultra small values
                                    if (Math.abs(translateX) < 0.001) translateX = 0;
                                    if (Math.abs(translateY) < 0.001) translateY = 0;
                                    if (Math.abs(translateZ) < 0.001) translateZ = 0;
                                    if (Math.abs(rotateY) < 0.001) rotateY = 0;
                                    if (Math.abs(rotateX) < 0.001) rotateX = 0;

                                    var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

                                    slide.transform(slideTransform);
                                    slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                                    if (s.params.coverflow.slideShadows) {
                                        //Set shadows
                                        var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                                        var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                                        if (shadowBefore.length === 0) {
                                            shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                            slide.append(shadowBefore);
                                        }
                                        if (shadowAfter.length === 0) {
                                            shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                            slide.append(shadowAfter);
                                        }
                                        if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                                        if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                                    }
                                }

                                //Set correct perspective for IE10
                                if (s.browser.ie) {
                                    var ws = s.wrapper[0].style;
                                    ws.perspectiveOrigin = center + 'px 50%';
                                }
                            },
                            setTransition: function (duration) {
                                s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                            }
                        }
                    };

                    /*=========================
                      Images Lazy Loading
                      ===========================*/
                    s.lazy = {
                        initialImageLoaded: false,
                        loadImageInSlide: function (index, loadInDuplicate) {
                            if (typeof index === 'undefined') return;
                            if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                            if (s.slides.length === 0) return;

                            var slide = s.slides.eq(index);
                            var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                            if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                                img = img.add(slide[0]);
                            }
                            if (img.length === 0) return;

                            img.each(function () {
                                var _img = $(this);
                                _img.addClass('swiper-lazy-loading');
                                var background = _img.attr('data-background');
                                var src = _img.attr('data-src'),
                                    srcset = _img.attr('data-srcset');
                                s.loadImage(_img[0], (src || background), srcset, false, function () {
                                    if (background) {
                                        _img.css('background-image', 'url("' + background + '")');
                                        _img.removeAttr('data-background');
                                    }
                                    else {
                                        if (srcset) {
                                            _img.attr('srcset', srcset);
                                            _img.removeAttr('data-srcset');
                                        }
                                        if (src) {
                                            _img.attr('src', src);
                                            _img.removeAttr('data-src');
                                        }

                                    }

                                    _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                                    slide.find('.swiper-lazy-preloader, .preloader').remove();
                                    if (s.params.loop && loadInDuplicate) {
                                        var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                                        if (slide.hasClass(s.params.slideDuplicateClass)) {
                                            var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                            s.lazy.loadImageInSlide(originalSlide.index(), false);
                                        }
                                        else {
                                            var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                            s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                                        }
                                    }
                                    s.emit('onLazyImageReady', s, slide[0], _img[0]);
                                });

                                s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                            });

                        },
                        load: function () {
                            var i;
                            if (s.params.watchSlidesVisibility) {
                                s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                                    s.lazy.loadImageInSlide($(this).index());
                                });
                            }
                            else {
                                if (s.params.slidesPerView > 1) {
                                    for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
                                        if (s.slides[i]) s.lazy.loadImageInSlide(i);
                                    }
                                }
                                else {
                                    s.lazy.loadImageInSlide(s.activeIndex);
                                }
                            }
                            if (s.params.lazyLoadingInPrevNext) {
                                if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                                    var amount = s.params.lazyLoadingInPrevNextAmount;
                                    var spv = s.params.slidesPerView;
                                    var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                                    var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                                    // Next Slides
                                    for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
                                        if (s.slides[i]) s.lazy.loadImageInSlide(i);
                                    }
                                    // Prev Slides
                                    for (i = minIndex; i < s.activeIndex ; i++) {
                                        if (s.slides[i]) s.lazy.loadImageInSlide(i);
                                    }
                                }
                                else {
                                    var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                                    if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());

                                    var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                                    if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                                }
                            }
                        },
                        onTransitionStart: function () {
                            if (s.params.lazyLoading) {
                                if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                                    s.lazy.load();
                                }
                            }
                        },
                        onTransitionEnd: function () {
                            if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                                s.lazy.load();
                            }
                        }
                    };


                    /*=========================
                      Scrollbar
                      ===========================*/
                    s.scrollbar = {
                        isTouched: false,
                        setDragPosition: function (e) {
                            var sb = s.scrollbar;
                            var x = 0, y = 0;
                            var translate;
                            var pointerPosition = s.isHorizontal() ?
                                ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                                ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
                            var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                            var positionMin = -s.minTranslate() * sb.moveDivider;
                            var positionMax = -s.maxTranslate() * sb.moveDivider;
                            if (position < positionMin) {
                                position = positionMin;
                            }
                            else if (position > positionMax) {
                                position = positionMax;
                            }
                            position = -position / sb.moveDivider;
                            s.updateProgress(position);
                            s.setWrapperTranslate(position, true);
                        },
                        dragStart: function (e) {
                            var sb = s.scrollbar;
                            sb.isTouched = true;
                            e.preventDefault();
                            e.stopPropagation();

                            sb.setDragPosition(e);
                            clearTimeout(sb.dragTimeout);

                            sb.track.transition(0);
                            if (s.params.scrollbarHide) {
                                sb.track.css('opacity', 1);
                            }
                            s.wrapper.transition(100);
                            sb.drag.transition(100);
                            s.emit('onScrollbarDragStart', s);
                        },
                        dragMove: function (e) {
                            var sb = s.scrollbar;
                            if (!sb.isTouched) return;
                            if (e.preventDefault) e.preventDefault();
                            else e.returnValue = false;
                            sb.setDragPosition(e);
                            s.wrapper.transition(0);
                            sb.track.transition(0);
                            sb.drag.transition(0);
                            s.emit('onScrollbarDragMove', s);
                        },
                        dragEnd: function (e) {
                            var sb = s.scrollbar;
                            if (!sb.isTouched) return;
                            sb.isTouched = false;
                            if (s.params.scrollbarHide) {
                                clearTimeout(sb.dragTimeout);
                                sb.dragTimeout = setTimeout(function () {
                                    sb.track.css('opacity', 0);
                                    sb.track.transition(400);
                                }, 1000);

                            }
                            s.emit('onScrollbarDragEnd', s);
                            if (s.params.scrollbarSnapOnRelease) {
                                s.slideReset();
                            }
                        },
                        enableDraggable: function () {
                            var sb = s.scrollbar;
                            var target = s.support.touch ? sb.track : document;
                            $(sb.track).on(s.touchEvents.start, sb.dragStart);
                            $(target).on(s.touchEvents.move, sb.dragMove);
                            $(target).on(s.touchEvents.end, sb.dragEnd);
                        },
                        disableDraggable: function () {
                            var sb = s.scrollbar;
                            var target = s.support.touch ? sb.track : document;
                            $(sb.track).off(s.touchEvents.start, sb.dragStart);
                            $(target).off(s.touchEvents.move, sb.dragMove);
                            $(target).off(s.touchEvents.end, sb.dragEnd);
                        },
                        set: function () {
                            if (!s.params.scrollbar) return;
                            var sb = s.scrollbar;
                            sb.track = $(s.params.scrollbar);
                            if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                                sb.track = s.container.find(s.params.scrollbar);
                            }
                            sb.drag = sb.track.find('.swiper-scrollbar-drag');
                            if (sb.drag.length === 0) {
                                sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                                sb.track.append(sb.drag);
                            }
                            sb.drag[0].style.width = '';
                            sb.drag[0].style.height = '';
                            sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;

                            sb.divider = s.size / s.virtualSize;
                            sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                            sb.dragSize = sb.trackSize * sb.divider;

                            if (s.isHorizontal()) {
                                sb.drag[0].style.width = sb.dragSize + 'px';
                            }
                            else {
                                sb.drag[0].style.height = sb.dragSize + 'px';
                            }

                            if (sb.divider >= 1) {
                                sb.track[0].style.display = 'none';
                            }
                            else {
                                sb.track[0].style.display = '';
                            }
                            if (s.params.scrollbarHide) {
                                sb.track[0].style.opacity = 0;
                            }
                        },
                        setTranslate: function () {
                            if (!s.params.scrollbar) return;
                            var diff;
                            var sb = s.scrollbar;
                            var translate = s.translate || 0;
                            var newPos;

                            var newSize = sb.dragSize;
                            newPos = (sb.trackSize - sb.dragSize) * s.progress;
                            if (s.rtl && s.isHorizontal()) {
                                newPos = -newPos;
                                if (newPos > 0) {
                                    newSize = sb.dragSize - newPos;
                                    newPos = 0;
                                }
                                else if (-newPos + sb.dragSize > sb.trackSize) {
                                    newSize = sb.trackSize + newPos;
                                }
                            }
                            else {
                                if (newPos < 0) {
                                    newSize = sb.dragSize + newPos;
                                    newPos = 0;
                                }
                                else if (newPos + sb.dragSize > sb.trackSize) {
                                    newSize = sb.trackSize - newPos;
                                }
                            }
                            if (s.isHorizontal()) {
                                if (s.support.transforms3d) {
                                    sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                                }
                                else {
                                    sb.drag.transform('translateX(' + (newPos) + 'px)');
                                }
                                sb.drag[0].style.width = newSize + 'px';
                            }
                            else {
                                if (s.support.transforms3d) {
                                    sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                                }
                                else {
                                    sb.drag.transform('translateY(' + (newPos) + 'px)');
                                }
                                sb.drag[0].style.height = newSize + 'px';
                            }
                            if (s.params.scrollbarHide) {
                                clearTimeout(sb.timeout);
                                sb.track[0].style.opacity = 1;
                                sb.timeout = setTimeout(function () {
                                    sb.track[0].style.opacity = 0;
                                    sb.track.transition(400);
                                }, 1000);
                            }
                        },
                        setTransition: function (duration) {
                            if (!s.params.scrollbar) return;
                            s.scrollbar.drag.transition(duration);
                        }
                    };

                    /*=========================
                      Controller
                      ===========================*/
                    s.controller = {
                        LinearSpline: function (x, y) {
                            this.x = x;
                            this.y = y;
                            this.lastIndex = x.length - 1;
                            // Given an x value (x2), return the expected y2 value:
                            // (x1,y1) is the known point before given value,
                            // (x3,y3) is the known point after given value.
                            var i1, i3;
                            var l = this.x.length;

                            this.interpolate = function (x2) {
                                if (!x2) return 0;

                                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                                i3 = binarySearch(this.x, x2);
                                i1 = i3 - 1;

                                // We have our indexes i1 & i3, so we can calculate already:
                                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                                return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                            };

                            var binarySearch = (function () {
                                var maxIndex, minIndex, guess;
                                return function (array, val) {
                                    minIndex = -1;
                                    maxIndex = array.length;
                                    while (maxIndex - minIndex > 1)
                                        if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                            minIndex = guess;
                                        } else {
                                            maxIndex = guess;
                                        }
                                    return maxIndex;
                                };
                            })();
                        },
                        //xxx: for now i will just save one spline function to to
                        getInterpolateFunction: function (c) {
                            if (!s.controller.spline) s.controller.spline = s.params.loop ?
                                new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                                new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
                        },
                        setTranslate: function (translate, byController) {
                            var controlled = s.params.control;
                            var multiplier, controlledTranslate;
                            function setControlledTranslate(c) {
                                // this will create an Interpolate function based on the snapGrids
                                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                                // it makes sense to create this only once and recall it for the interpolation
                                // the function does a lot of value caching for performance
                                translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                                if (s.params.controlBy === 'slide') {
                                    s.controller.getInterpolateFunction(c);
                                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                                    // but it did not work out
                                    controlledTranslate = -s.controller.spline.interpolate(-translate);
                                }

                                if (!controlledTranslate || s.params.controlBy === 'container') {
                                    multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                                    controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                                }

                                if (s.params.controlInverse) {
                                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                                }
                                c.updateProgress(controlledTranslate);
                                c.setWrapperTranslate(controlledTranslate, false, s);
                                c.updateActiveIndex();
                            }
                            if (s.isArray(controlled)) {
                                for (var i = 0; i < controlled.length; i++) {
                                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                                        setControlledTranslate(controlled[i]);
                                    }
                                }
                            }
                            else if (controlled instanceof Swiper && byController !== controlled) {

                                setControlledTranslate(controlled);
                            }
                        },
                        setTransition: function (duration, byController) {
                            var controlled = s.params.control;
                            var i;
                            function setControlledTransition(c) {
                                c.setWrapperTransition(duration, s);
                                if (duration !== 0) {
                                    c.onTransitionStart();
                                    c.wrapper.transitionEnd(function () {
                                        if (!controlled) return;
                                        if (c.params.loop && s.params.controlBy === 'slide') {
                                            c.fixLoop();
                                        }
                                        c.onTransitionEnd();

                                    });
                                }
                            }
                            if (s.isArray(controlled)) {
                                for (i = 0; i < controlled.length; i++) {
                                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                                        setControlledTransition(controlled[i]);
                                    }
                                }
                            }
                            else if (controlled instanceof Swiper && byController !== controlled) {
                                setControlledTransition(controlled);
                            }
                        }
                    };

                    /*=========================
                      Hash Navigation
                      ===========================*/
                    s.hashnav = {
                        init: function () {
                            if (!s.params.hashnav) return;
                            s.hashnav.initialized = true;
                            var hash = document.location.hash.replace('#', '');
                            if (!hash) return;
                            var speed = 0;
                            for (var i = 0, length = s.slides.length; i < length; i++) {
                                var slide = s.slides.eq(i);
                                var slideHash = slide.attr('data-hash');
                                if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                                    var index = slide.index();
                                    s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                                }
                            }
                        },
                        setHash: function () {
                            if (!s.hashnav.initialized || !s.params.hashnav) return;
                            document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
                        }
                    };

                    /*=========================
                      Keyboard Control
                      ===========================*/
                    function handleKeyboard(e) {
                        if (e.originalEvent) e = e.originalEvent; //jquery fix
                        var kc = e.keyCode || e.charCode;
                        // Directions locks
                        if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                            return false;
                        }
                        if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                            return false;
                        }
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                            return;
                        }
                        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                            return;
                        }
                        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                            var inView = false;
                            //Check that swiper should be inside of visible area of window
                            if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                                return;
                            }
                            var windowScroll = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            };
                            var windowWidth = window.innerWidth;
                            var windowHeight = window.innerHeight;
                            var swiperOffset = s.container.offset();
                            if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                            var swiperCoord = [
                                [swiperOffset.left, swiperOffset.top],
                                [swiperOffset.left + s.width, swiperOffset.top],
                                [swiperOffset.left, swiperOffset.top + s.height],
                                [swiperOffset.left + s.width, swiperOffset.top + s.height]
                            ];
                            for (var i = 0; i < swiperCoord.length; i++) {
                                var point = swiperCoord[i];
                                if (
                                    point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                                    point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                                ) {
                                    inView = true;
                                }

                            }
                            if (!inView) return;
                        }
                        if (s.isHorizontal()) {
                            if (kc === 37 || kc === 39) {
                                if (e.preventDefault) e.preventDefault();
                                else e.returnValue = false;
                            }
                            if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                            if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
                        }
                        else {
                            if (kc === 38 || kc === 40) {
                                if (e.preventDefault) e.preventDefault();
                                else e.returnValue = false;
                            }
                            if (kc === 40) s.slideNext();
                            if (kc === 38) s.slidePrev();
                        }
                    }
                    s.disableKeyboardControl = function () {
                        s.params.keyboardControl = false;
                        $(document).off('keydown', handleKeyboard);
                    };
                    s.enableKeyboardControl = function () {
                        s.params.keyboardControl = true;
                        $(document).on('keydown', handleKeyboard);
                    };


                    /*=========================
                      Mousewheel Control
                      ===========================*/
                    s.mousewheel = {
                        event: false,
                        lastScrollTime: (new window.Date()).getTime()
                    };
                    if (s.params.mousewheelControl) {
                        try {
                            new window.WheelEvent('wheel');
                            s.mousewheel.event = 'wheel';
                        } catch (e) {
                            if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
                                s.mousewheel.event = 'wheel';
                            }
                        }
                        if (!s.mousewheel.event && window.WheelEvent) {

                        }
                        if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                            s.mousewheel.event = 'mousewheel';
                        }
                        if (!s.mousewheel.event) {
                            s.mousewheel.event = 'DOMMouseScroll';
                        }
                    }
                    function handleMousewheel(e) {
                        if (e.originalEvent) e = e.originalEvent; //jquery fix
                        var we = s.mousewheel.event;
                        var delta = 0;
                        var rtlFactor = s.rtl ? -1 : 1;

                        //WebKits
                        if (we === 'mousewheel') {
                            if (s.params.mousewheelForceToAxis) {
                                if (s.isHorizontal()) {
                                    if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
                                    else return;
                                }
                                else {
                                    if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                                    else return;
                                }
                            }
                            else {
                                delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * rtlFactor : -e.wheelDeltaY;
                            }
                        }
                            //Old FireFox
                        else if (we === 'DOMMouseScroll') delta = -e.detail;
                            //New FireFox
                        else if (we === 'wheel') {
                            if (s.params.mousewheelForceToAxis) {
                                if (s.isHorizontal()) {
                                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
                                    else return;
                                }
                                else {
                                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                                    else return;
                                }
                            }
                            else {
                                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * rtlFactor : -e.deltaY;
                            }
                        }
                        if (delta === 0) return;

                        if (s.params.mousewheelInvert) delta = -delta;

                        if (!s.params.freeMode) {
                            if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                                if (delta < 0) {
                                    if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
                                    else if (s.params.mousewheelReleaseOnEdges) return true;
                                }
                                else {
                                    if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
                                    else if (s.params.mousewheelReleaseOnEdges) return true;
                                }
                            }
                            s.mousewheel.lastScrollTime = (new window.Date()).getTime();

                        }
                        else {
                            //Freemode or scrollContainer:
                            var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                            var wasBeginning = s.isBeginning,
                                wasEnd = s.isEnd;

                            if (position >= s.minTranslate()) position = s.minTranslate();
                            if (position <= s.maxTranslate()) position = s.maxTranslate();

                            s.setWrapperTransition(0);
                            s.setWrapperTranslate(position);
                            s.updateProgress();
                            s.updateActiveIndex();

                            if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                                s.updateClasses();
                            }

                            if (s.params.freeModeSticky) {
                                clearTimeout(s.mousewheel.timeout);
                                s.mousewheel.timeout = setTimeout(function () {
                                    s.slideReset();
                                }, 300);
                            }
                            else {
                                if (s.params.lazyLoading && s.lazy) {
                                    s.lazy.load();
                                }
                            }

                            // Return page scroll on edge positions
                            if (position === 0 || position === s.maxTranslate()) return;
                        }
                        if (s.params.autoplay) s.stopAutoplay();

                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                        return false;
                    }
                    s.disableMousewheelControl = function () {
                        if (!s.mousewheel.event) return false;
                        s.container.off(s.mousewheel.event, handleMousewheel);
                        return true;
                    };

                    s.enableMousewheelControl = function () {
                        if (!s.mousewheel.event) return false;
                        s.container.on(s.mousewheel.event, handleMousewheel);
                        return true;
                    };


                    /*=========================
                      Parallax
                      ===========================*/
                    function setParallaxTransform(el, progress) {
                        el = $(el);
                        var p, pX, pY;
                        var rtlFactor = s.rtl ? -1 : 1;

                        p = el.attr('data-swiper-parallax') || '0';
                        pX = el.attr('data-swiper-parallax-x');
                        pY = el.attr('data-swiper-parallax-y');
                        if (pX || pY) {
                            pX = pX || '0';
                            pY = pY || '0';
                        }
                        else {
                            if (s.isHorizontal()) {
                                pX = p;
                                pY = '0';
                            }
                            else {
                                pY = p;
                                pX = '0';
                            }
                        }

                        if ((pX).indexOf('%') >= 0) {
                            pX = parseInt(pX, 10) * progress * rtlFactor + '%';
                        }
                        else {
                            pX = pX * progress * rtlFactor + 'px';
                        }
                        if ((pY).indexOf('%') >= 0) {
                            pY = parseInt(pY, 10) * progress + '%';
                        }
                        else {
                            pY = pY * progress + 'px';
                        }

                        el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
                    }
                    s.parallax = {
                        setTranslate: function () {
                            s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                                setParallaxTransform(this, s.progress);

                            });
                            s.slides.each(function () {
                                var slide = $(this);
                                slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                                    var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                                    setParallaxTransform(this, progress);
                                });
                            });
                        },
                        setTransition: function (duration) {
                            if (typeof duration === 'undefined') duration = s.params.speed;
                            s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                                var el = $(this);
                                var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                                if (duration === 0) parallaxDuration = 0;
                                el.transition(parallaxDuration);
                            });
                        }
                    };


                    /*=========================
                      Plugins API. Collect all and init all plugins
                      ===========================*/
                    s._plugins = [];
                    for (var plugin in s.plugins) {
                        var p = s.plugins[plugin](s, s.params[plugin]);
                        if (p) s._plugins.push(p);
                    }
                    // Method to call all plugins event/method
                    s.callPlugins = function (eventName) {
                        for (var i = 0; i < s._plugins.length; i++) {
                            if (eventName in s._plugins[i]) {
                                s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            }
                        }
                    };

                    /*=========================
                      Events/Callbacks/Plugins Emitter
                      ===========================*/
                    function normalizeEventName(eventName) {
                        if (eventName.indexOf('on') !== 0) {
                            if (eventName[0] !== eventName[0].toUpperCase()) {
                                eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                            }
                            else {
                                eventName = 'on' + eventName;
                            }
                        }
                        return eventName;
                    }
                    s.emitterEventListeners = {

                    };
                    s.emit = function (eventName) {
                        // Trigger callbacks
                        if (s.params[eventName]) {
                            s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        }
                        var i;
                        // Trigger events
                        if (s.emitterEventListeners[eventName]) {
                            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                                s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            }
                        }
                        // Trigger plugins
                        if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    };
                    s.on = function (eventName, handler) {
                        eventName = normalizeEventName(eventName);
                        if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
                        s.emitterEventListeners[eventName].push(handler);
                        return s;
                    };
                    s.off = function (eventName, handler) {
                        var i;
                        eventName = normalizeEventName(eventName);
                        if (typeof handler === 'undefined') {
                            // Remove all handlers for such event
                            s.emitterEventListeners[eventName] = [];
                            return s;
                        }
                        if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
                        for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                            if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
                        }
                        return s;
                    };
                    s.once = function (eventName, handler) {
                        eventName = normalizeEventName(eventName);
                        var _handler = function () {
                            handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                            s.off(eventName, _handler);
                        };
                        s.on(eventName, _handler);
                        return s;
                    };

                    // Accessibility tools
                    s.a11y = {
                        makeFocusable: function ($el) {
                            $el.attr('tabIndex', '0');
                            return $el;
                        },
                        addRole: function ($el, role) {
                            $el.attr('role', role);
                            return $el;
                        },

                        addLabel: function ($el, label) {
                            $el.attr('aria-label', label);
                            return $el;
                        },

                        disable: function ($el) {
                            $el.attr('aria-disabled', true);
                            return $el;
                        },

                        enable: function ($el) {
                            $el.attr('aria-disabled', false);
                            return $el;
                        },

                        onEnterKey: function (event) {
                            if (event.keyCode !== 13) return;
                            if ($(event.target).is(s.params.nextButton)) {
                                s.onClickNext(event);
                                if (s.isEnd) {
                                    s.a11y.notify(s.params.lastSlideMessage);
                                }
                                else {
                                    s.a11y.notify(s.params.nextSlideMessage);
                                }
                            }
                            else if ($(event.target).is(s.params.prevButton)) {
                                s.onClickPrev(event);
                                if (s.isBeginning) {
                                    s.a11y.notify(s.params.firstSlideMessage);
                                }
                                else {
                                    s.a11y.notify(s.params.prevSlideMessage);
                                }
                            }
                            if ($(event.target).is('.' + s.params.bulletClass)) {
                                $(event.target)[0].click();
                            }
                        },

                        liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),

                        notify: function (message) {
                            var notification = s.a11y.liveRegion;
                            if (notification.length === 0) return;
                            notification.html('');
                            notification.html(message);
                        },
                        init: function () {
                            // Setup accessibility
                            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                                s.a11y.makeFocusable(s.nextButton);
                                s.a11y.addRole(s.nextButton, 'button');
                                s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                            }
                            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                                s.a11y.makeFocusable(s.prevButton);
                                s.a11y.addRole(s.prevButton, 'button');
                                s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                            }

                            $(s.container).append(s.a11y.liveRegion);
                        },
                        initPagination: function () {
                            if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                                s.bullets.each(function () {
                                    var bullet = $(this);
                                    s.a11y.makeFocusable(bullet);
                                    s.a11y.addRole(bullet, 'button');
                                    s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                                });
                            }
                        },
                        destroy: function () {
                            if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
                        }
                    };


                    /*=========================
                      Init/Destroy
                      ===========================*/
                    s.init = function () {
                        if (s.params.loop) s.createLoop();
                        s.updateContainerSize();
                        s.updateSlidesSize();
                        s.updatePagination();
                        if (s.params.scrollbar && s.scrollbar) {
                            s.scrollbar.set();
                            if (s.params.scrollbarDraggable) {
                                s.scrollbar.enableDraggable();
                            }
                        }
                        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                            if (!s.params.loop) s.updateProgress();
                            s.effects[s.params.effect].setTranslate();
                        }
                        if (s.params.loop) {
                            s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
                        }
                        else {
                            s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                            if (s.params.initialSlide === 0) {
                                if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                                if (s.lazy && s.params.lazyLoading) {
                                    s.lazy.load();
                                    s.lazy.initialImageLoaded = true;
                                }
                            }
                        }
                        s.attachEvents();
                        if (s.params.observer && s.support.observer) {
                            s.initObservers();
                        }
                        if (s.params.preloadImages && !s.params.lazyLoading) {
                            s.preloadImages();
                        }
                        if (s.params.autoplay) {
                            s.startAutoplay();
                        }
                        if (s.params.keyboardControl) {
                            if (s.enableKeyboardControl) s.enableKeyboardControl();
                        }
                        if (s.params.mousewheelControl) {
                            if (s.enableMousewheelControl) s.enableMousewheelControl();
                        }
                        if (s.params.hashnav) {
                            if (s.hashnav) s.hashnav.init();
                        }
                        if (s.params.a11y && s.a11y) s.a11y.init();
                        s.emit('onInit', s);
                    };

                    // Cleanup dynamic styles
                    s.cleanupStyles = function () {
                        // Container
                        s.container.removeClass(s.classNames.join(' ')).removeAttr('style');

                        // Wrapper
                        s.wrapper.removeAttr('style');

                        // Slides
                        if (s.slides && s.slides.length) {
                            s.slides
                                .removeClass([
                                  s.params.slideVisibleClass,
                                  s.params.slideActiveClass,
                                  s.params.slideNextClass,
                                  s.params.slidePrevClass
                                ].join(' '))
                                .removeAttr('style')
                                .removeAttr('data-swiper-column')
                                .removeAttr('data-swiper-row');
                        }

                        // Pagination/Bullets
                        if (s.paginationContainer && s.paginationContainer.length) {
                            s.paginationContainer.removeClass(s.params.paginationHiddenClass);
                        }
                        if (s.bullets && s.bullets.length) {
                            s.bullets.removeClass(s.params.bulletActiveClass);
                        }

                        // Buttons
                        if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
                        if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);

                        // Scrollbar
                        if (s.params.scrollbar && s.scrollbar) {
                            if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                            if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
                        }
                    };

                    // Destroy
                    s.destroy = function (deleteInstance, cleanupStyles) {
                        // Detach evebts
                        s.detachEvents();
                        // Stop autoplay
                        s.stopAutoplay();
                        // Disable draggable
                        if (s.params.scrollbar && s.scrollbar) {
                            if (s.params.scrollbarDraggable) {
                                s.scrollbar.disableDraggable();
                            }
                        }
                        // Destroy loop
                        if (s.params.loop) {
                            s.destroyLoop();
                        }
                        // Cleanup styles
                        if (cleanupStyles) {
                            s.cleanupStyles();
                        }
                        // Disconnect observer
                        s.disconnectObservers();
                        // Disable keyboard/mousewheel
                        if (s.params.keyboardControl) {
                            if (s.disableKeyboardControl) s.disableKeyboardControl();
                        }
                        if (s.params.mousewheelControl) {
                            if (s.disableMousewheelControl) s.disableMousewheelControl();
                        }
                        // Disable a11y
                        if (s.params.a11y && s.a11y) s.a11y.destroy();
                        // Destroy callback
                        s.emit('onDestroy');
                        // Delete instance
                        if (deleteInstance !== false) s = null;
                    };

                    s.init();



                    // Return swiper instance
                    return s;
                };


                /*==================================================
                    Prototype
                ====================================================*/
                Swiper.prototype = {
                    isSafari: (function () {
                        var ua = navigator.userAgent.toLowerCase();
                        return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
                    })(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                    isArray: function (arr) {
                        return Object.prototype.toString.apply(arr) === '[object Array]';
                    },
                    /*==================================================
                    Browser
                    ====================================================*/
                    browser: {
                        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                        ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
                    },
                    /*==================================================
                    Devices
                    ====================================================*/
                    device: (function () {
                        var ua = navigator.userAgent;
                        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
                        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
                        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
                        var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
                        return {
                            ios: ipad || iphone || ipod,
                            android: android
                        };
                    })(),
                    /*==================================================
                    Feature Detection
                    ====================================================*/
                    support: {
                        touch: (window.Modernizr && Modernizr.touch === true) || (function () {
                            return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
                        })(),

                        transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                            var div = document.createElement('div').style;
                            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
                        })(),

                        flexbox: (function () {
                            var div = document.createElement('div').style;
                            var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                            for (var i = 0; i < styles.length; i++) {
                                if (styles[i] in div) return true;
                            }
                        })(),

                        observer: (function () {
                            return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
                        })()
                    },
                    /*==================================================
                    Plugins
                    ====================================================*/
                    plugins: {}
                };


                /*===========================
                Dom7 Library
                ===========================*/
                var Dom7 = (function () {
                    var Dom7 = function (arr) {
                        var _this = this, i = 0;
                        // Create array-like object
                        for (i = 0; i < arr.length; i++) {
                            _this[i] = arr[i];
                        }
                        _this.length = arr.length;
                        // Return collection with methods
                        return this;
                    };
                    var $ = function (selector, context) {
                        var arr = [], i = 0;
                        if (selector && !context) {
                            if (selector instanceof Dom7) {
                                return selector;
                            }
                        }
                        if (selector) {
                            // String
                            if (typeof selector === 'string') {
                                var els, tempParent, html = selector.trim();
                                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                                    var toCreate = 'div';
                                    if (html.indexOf('<li') === 0) toCreate = 'ul';
                                    if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                                    if (html.indexOf('<tbody') === 0) toCreate = 'table';
                                    if (html.indexOf('<option') === 0) toCreate = 'select';
                                    tempParent = document.createElement(toCreate);
                                    tempParent.innerHTML = selector;
                                    for (i = 0; i < tempParent.childNodes.length; i++) {
                                        arr.push(tempParent.childNodes[i]);
                                    }
                                }
                                else {
                                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                                        // Pure ID selector
                                        els = [document.getElementById(selector.split('#')[1])];
                                    }
                                    else {
                                        // Other selectors
                                        els = (context || document).querySelectorAll(selector);
                                    }
                                    for (i = 0; i < els.length; i++) {
                                        if (els[i]) arr.push(els[i]);
                                    }
                                }
                            }
                                // Node/element
                            else if (selector.nodeType || selector === window || selector === document) {
                                arr.push(selector);
                            }
                                //Array of elements or instance of Dom
                            else if (selector.length > 0 && selector[0].nodeType) {
                                for (i = 0; i < selector.length; i++) {
                                    arr.push(selector[i]);
                                }
                            }
                        }
                        return new Dom7(arr);
                    };
                    Dom7.prototype = {
                        // Classes and attriutes
                        addClass: function (className) {
                            if (typeof className === 'undefined') {
                                return this;
                            }
                            var classes = className.split(' ');
                            for (var i = 0; i < classes.length; i++) {
                                for (var j = 0; j < this.length; j++) {
                                    this[j].classList.add(classes[i]);
                                }
                            }
                            return this;
                        },
                        removeClass: function (className) {
                            var classes = className.split(' ');
                            for (var i = 0; i < classes.length; i++) {
                                for (var j = 0; j < this.length; j++) {
                                    this[j].classList.remove(classes[i]);
                                }
                            }
                            return this;
                        },
                        hasClass: function (className) {
                            if (!this[0]) return false;
                            else return this[0].classList.contains(className);
                        },
                        toggleClass: function (className) {
                            var classes = className.split(' ');
                            for (var i = 0; i < classes.length; i++) {
                                for (var j = 0; j < this.length; j++) {
                                    this[j].classList.toggle(classes[i]);
                                }
                            }
                            return this;
                        },
                        attr: function (attrs, value) {
                            if (arguments.length === 1 && typeof attrs === 'string') {
                                // Get attr
                                if (this[0]) return this[0].getAttribute(attrs);
                                else return undefined;
                            }
                            else {
                                // Set attrs
                                for (var i = 0; i < this.length; i++) {
                                    if (arguments.length === 2) {
                                        // String
                                        this[i].setAttribute(attrs, value);
                                    }
                                    else {
                                        // Object
                                        for (var attrName in attrs) {
                                            this[i][attrName] = attrs[attrName];
                                            this[i].setAttribute(attrName, attrs[attrName]);
                                        }
                                    }
                                }
                                return this;
                            }
                        },
                        removeAttr: function (attr) {
                            for (var i = 0; i < this.length; i++) {
                                this[i].removeAttribute(attr);
                            }
                            return this;
                        },
                        data: function (key, value) {
                            if (typeof value === 'undefined') {
                                // Get value
                                if (this[0]) {
                                    var dataKey = this[0].getAttribute('data-' + key);
                                    if (dataKey) return dataKey;
                                    else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                                    else return undefined;
                                }
                                else return undefined;
                            }
                            else {
                                // Set value
                                for (var i = 0; i < this.length; i++) {
                                    var el = this[i];
                                    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                                    el.dom7ElementDataStorage[key] = value;
                                }
                                return this;
                            }
                        },
                        // Transforms
                        transform: function (transform) {
                            for (var i = 0; i < this.length; i++) {
                                var elStyle = this[i].style;
                                elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                            }
                            return this;
                        },
                        transition: function (duration) {
                            if (typeof duration !== 'string') {
                                duration = duration + 'ms';
                            }
                            for (var i = 0; i < this.length; i++) {
                                var elStyle = this[i].style;
                                elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                            }
                            return this;
                        },
                        //Events
                        on: function (eventName, targetSelector, listener, capture) {
                            function handleLiveEvent(e) {
                                var target = e.target;
                                if ($(target).is(targetSelector)) listener.call(target, e);
                                else {
                                    var parents = $(target).parents();
                                    for (var k = 0; k < parents.length; k++) {
                                        if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                                    }
                                }
                            }
                            var events = eventName.split(' ');
                            var i, j;
                            for (i = 0; i < this.length; i++) {
                                if (typeof targetSelector === 'function' || targetSelector === false) {
                                    // Usual events
                                    if (typeof targetSelector === 'function') {
                                        listener = arguments[1];
                                        capture = arguments[2] || false;
                                    }
                                    for (j = 0; j < events.length; j++) {
                                        this[i].addEventListener(events[j], listener, capture);
                                    }
                                }
                                else {
                                    //Live events
                                    for (j = 0; j < events.length; j++) {
                                        if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                                        this[i].dom7LiveListeners.push({ listener: listener, liveListener: handleLiveEvent });
                                        this[i].addEventListener(events[j], handleLiveEvent, capture);
                                    }
                                }
                            }

                            return this;
                        },
                        off: function (eventName, targetSelector, listener, capture) {
                            var events = eventName.split(' ');
                            for (var i = 0; i < events.length; i++) {
                                for (var j = 0; j < this.length; j++) {
                                    if (typeof targetSelector === 'function' || targetSelector === false) {
                                        // Usual events
                                        if (typeof targetSelector === 'function') {
                                            listener = arguments[1];
                                            capture = arguments[2] || false;
                                        }
                                        this[j].removeEventListener(events[i], listener, capture);
                                    }
                                    else {
                                        // Live event
                                        if (this[j].dom7LiveListeners) {
                                            for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                                if (this[j].dom7LiveListeners[k].listener === listener) {
                                                    this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return this;
                        },
                        once: function (eventName, targetSelector, listener, capture) {
                            var dom = this;
                            if (typeof targetSelector === 'function') {
                                targetSelector = false;
                                listener = arguments[1];
                                capture = arguments[2];
                            }
                            function proxy(e) {
                                listener(e);
                                dom.off(eventName, targetSelector, proxy, capture);
                            }
                            dom.on(eventName, targetSelector, proxy, capture);
                        },
                        trigger: function (eventName, eventData) {
                            for (var i = 0; i < this.length; i++) {
                                var evt;
                                try {
                                    evt = new window.CustomEvent(eventName, { detail: eventData, bubbles: true, cancelable: true });
                                }
                                catch (e) {
                                    evt = document.createEvent('Event');
                                    evt.initEvent(eventName, true, true);
                                    evt.detail = eventData;
                                }
                                this[i].dispatchEvent(evt);
                            }
                            return this;
                        },
                        transitionEnd: function (callback) {
                            var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                                i, j, dom = this;
                            function fireCallBack(e) {
                                /*jshint validthis:true */
                                if (e.target !== this) return;
                                callback.call(this, e);
                                for (i = 0; i < events.length; i++) {
                                    dom.off(events[i], fireCallBack);
                                }
                            }
                            if (callback) {
                                for (i = 0; i < events.length; i++) {
                                    dom.on(events[i], fireCallBack);
                                }
                            }
                            return this;
                        },
                        // Sizing/Styles
                        width: function () {
                            if (this[0] === window) {
                                return window.innerWidth;
                            }
                            else {
                                if (this.length > 0) {
                                    return parseFloat(this.css('width'));
                                }
                                else {
                                    return null;
                                }
                            }
                        },
                        outerWidth: function (includeMargins) {
                            if (this.length > 0) {
                                if (includeMargins)
                                    return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                                else
                                    return this[0].offsetWidth;
                            }
                            else return null;
                        },
                        height: function () {
                            if (this[0] === window) {
                                return window.innerHeight;
                            }
                            else {
                                if (this.length > 0) {
                                    return parseFloat(this.css('height'));
                                }
                                else {
                                    return null;
                                }
                            }
                        },
                        outerHeight: function (includeMargins) {
                            if (this.length > 0) {
                                if (includeMargins)
                                    return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                                else
                                    return this[0].offsetHeight;
                            }
                            else return null;
                        },
                        offset: function () {
                            if (this.length > 0) {
                                var el = this[0];
                                var box = el.getBoundingClientRect();
                                var body = document.body;
                                var clientTop = el.clientTop || body.clientTop || 0;
                                var clientLeft = el.clientLeft || body.clientLeft || 0;
                                var scrollTop = window.pageYOffset || el.scrollTop;
                                var scrollLeft = window.pageXOffset || el.scrollLeft;
                                return {
                                    top: box.top + scrollTop - clientTop,
                                    left: box.left + scrollLeft - clientLeft
                                };
                            }
                            else {
                                return null;
                            }
                        },
                        css: function (props, value) {
                            var i;
                            if (arguments.length === 1) {
                                if (typeof props === 'string') {
                                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                                }
                                else {
                                    for (i = 0; i < this.length; i++) {
                                        for (var prop in props) {
                                            this[i].style[prop] = props[prop];
                                        }
                                    }
                                    return this;
                                }
                            }
                            if (arguments.length === 2 && typeof props === 'string') {
                                for (i = 0; i < this.length; i++) {
                                    this[i].style[props] = value;
                                }
                                return this;
                            }
                            return this;
                        },

                        //Dom manipulation
                        each: function (callback) {
                            for (var i = 0; i < this.length; i++) {
                                callback.call(this[i], i, this[i]);
                            }
                            return this;
                        },
                        html: function (html) {
                            if (typeof html === 'undefined') {
                                return this[0] ? this[0].innerHTML : undefined;
                            }
                            else {
                                for (var i = 0; i < this.length; i++) {
                                    this[i].innerHTML = html;
                                }
                                return this;
                            }
                        },
                        text: function (text) {
                            if (typeof text === 'undefined') {
                                if (this[0]) {
                                    return this[0].textContent.trim();
                                }
                                else return null;
                            }
                            else {
                                for (var i = 0; i < this.length; i++) {
                                    this[i].textContent = text;
                                }
                                return this;
                            }
                        },
                        is: function (selector) {
                            if (!this[0]) return false;
                            var compareWith, i;
                            if (typeof selector === 'string') {
                                var el = this[0];
                                if (el === document) return selector === document;
                                if (el === window) return selector === window;

                                if (el.matches) return el.matches(selector);
                                else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                                else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
                                else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                                else {
                                    compareWith = $(selector);
                                    for (i = 0; i < compareWith.length; i++) {
                                        if (compareWith[i] === this[0]) return true;
                                    }
                                    return false;
                                }
                            }
                            else if (selector === document) return this[0] === document;
                            else if (selector === window) return this[0] === window;
                            else {
                                if (selector.nodeType || selector instanceof Dom7) {
                                    compareWith = selector.nodeType ? [selector] : selector;
                                    for (i = 0; i < compareWith.length; i++) {
                                        if (compareWith[i] === this[0]) return true;
                                    }
                                    return false;
                                }
                                return false;
                            }

                        },
                        index: function () {
                            if (this[0]) {
                                var child = this[0];
                                var i = 0;
                                while ((child = child.previousSibling) !== null) {
                                    if (child.nodeType === 1) i++;
                                }
                                return i;
                            }
                            else return undefined;
                        },
                        eq: function (index) {
                            if (typeof index === 'undefined') return this;
                            var length = this.length;
                            var returnIndex;
                            if (index > length - 1) {
                                return new Dom7([]);
                            }
                            if (index < 0) {
                                returnIndex = length + index;
                                if (returnIndex < 0) return new Dom7([]);
                                else return new Dom7([this[returnIndex]]);
                            }
                            return new Dom7([this[index]]);
                        },
                        append: function (newChild) {
                            var i, j;
                            for (i = 0; i < this.length; i++) {
                                if (typeof newChild === 'string') {
                                    var tempDiv = document.createElement('div');
                                    tempDiv.innerHTML = newChild;
                                    while (tempDiv.firstChild) {
                                        this[i].appendChild(tempDiv.firstChild);
                                    }
                                }
                                else if (newChild instanceof Dom7) {
                                    for (j = 0; j < newChild.length; j++) {
                                        this[i].appendChild(newChild[j]);
                                    }
                                }
                                else {
                                    this[i].appendChild(newChild);
                                }
                            }
                            return this;
                        },
                        prepend: function (newChild) {
                            var i, j;
                            for (i = 0; i < this.length; i++) {
                                if (typeof newChild === 'string') {
                                    var tempDiv = document.createElement('div');
                                    tempDiv.innerHTML = newChild;
                                    for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                                        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                                    }
                                    // this[i].insertAdjacentHTML('afterbegin', newChild);
                                }
                                else if (newChild instanceof Dom7) {
                                    for (j = 0; j < newChild.length; j++) {
                                        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                                    }
                                }
                                else {
                                    this[i].insertBefore(newChild, this[i].childNodes[0]);
                                }
                            }
                            return this;
                        },
                        insertBefore: function (selector) {
                            var before = $(selector);
                            for (var i = 0; i < this.length; i++) {
                                if (before.length === 1) {
                                    before[0].parentNode.insertBefore(this[i], before[0]);
                                }
                                else if (before.length > 1) {
                                    for (var j = 0; j < before.length; j++) {
                                        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                                    }
                                }
                            }
                        },
                        insertAfter: function (selector) {
                            var after = $(selector);
                            for (var i = 0; i < this.length; i++) {
                                if (after.length === 1) {
                                    after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                                }
                                else if (after.length > 1) {
                                    for (var j = 0; j < after.length; j++) {
                                        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                                    }
                                }
                            }
                        },
                        next: function (selector) {
                            if (this.length > 0) {
                                if (selector) {
                                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                                    else return new Dom7([]);
                                }
                                else {
                                    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                                    else return new Dom7([]);
                                }
                            }
                            else return new Dom7([]);
                        },
                        nextAll: function (selector) {
                            var nextEls = [];
                            var el = this[0];
                            if (!el) return new Dom7([]);
                            while (el.nextElementSibling) {
                                var next = el.nextElementSibling;
                                if (selector) {
                                    if ($(next).is(selector)) nextEls.push(next);
                                }
                                else nextEls.push(next);
                                el = next;
                            }
                            return new Dom7(nextEls);
                        },
                        prev: function (selector) {
                            if (this.length > 0) {
                                if (selector) {
                                    if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                                    else return new Dom7([]);
                                }
                                else {
                                    if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                                    else return new Dom7([]);
                                }
                            }
                            else return new Dom7([]);
                        },
                        prevAll: function (selector) {
                            var prevEls = [];
                            var el = this[0];
                            if (!el) return new Dom7([]);
                            while (el.previousElementSibling) {
                                var prev = el.previousElementSibling;
                                if (selector) {
                                    if ($(prev).is(selector)) prevEls.push(prev);
                                }
                                else prevEls.push(prev);
                                el = prev;
                            }
                            return new Dom7(prevEls);
                        },
                        parent: function (selector) {
                            var parents = [];
                            for (var i = 0; i < this.length; i++) {
                                if (selector) {
                                    if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                                }
                                else {
                                    parents.push(this[i].parentNode);
                                }
                            }
                            return $($.unique(parents));
                        },
                        parents: function (selector) {
                            var parents = [];
                            for (var i = 0; i < this.length; i++) {
                                var parent = this[i].parentNode;
                                while (parent) {
                                    if (selector) {
                                        if ($(parent).is(selector)) parents.push(parent);
                                    }
                                    else {
                                        parents.push(parent);
                                    }
                                    parent = parent.parentNode;
                                }
                            }
                            return $($.unique(parents));
                        },
                        find: function (selector) {
                            var foundElements = [];
                            for (var i = 0; i < this.length; i++) {
                                var found = this[i].querySelectorAll(selector);
                                for (var j = 0; j < found.length; j++) {
                                    foundElements.push(found[j]);
                                }
                            }
                            return new Dom7(foundElements);
                        },
                        children: function (selector) {
                            var children = [];
                            for (var i = 0; i < this.length; i++) {
                                var childNodes = this[i].childNodes;

                                for (var j = 0; j < childNodes.length; j++) {
                                    if (!selector) {
                                        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                                    }
                                    else {
                                        if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                                    }
                                }
                            }
                            return new Dom7($.unique(children));
                        },
                        remove: function () {
                            for (var i = 0; i < this.length; i++) {
                                if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                            }
                            return this;
                        },
                        add: function () {
                            var dom = this;
                            var i, j;
                            for (i = 0; i < arguments.length; i++) {
                                var toAdd = $(arguments[i]);
                                for (j = 0; j < toAdd.length; j++) {
                                    dom[dom.length] = toAdd[j];
                                    dom.length++;
                                }
                            }
                            return dom;
                        }
                    };
                    $.fn = Dom7.prototype;
                    $.unique = function (arr) {
                        var unique = [];
                        for (var i = 0; i < arr.length; i++) {
                            if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
                        }
                        return unique;
                    };

                    return $;
                })();


                /*===========================
                 Get Dom libraries
                 ===========================*/
                var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
                for (var i = 0; i < swiperDomPlugins.length; i++) {
                    if (window[swiperDomPlugins[i]]) {
                        addLibraryPlugin(window[swiperDomPlugins[i]]);
                    }
                }
                // Required DOM Plugins
                var domLib;
                if (typeof Dom7 === 'undefined') {
                    domLib = window.Dom7 || window.Zepto || window.jQuery;
                }
                else {
                    domLib = Dom7;
                }

                /*===========================
                Add .swiper plugin from Dom libraries
                ===========================*/
                function addLibraryPlugin(lib) {
                    lib.fn.swiper = function (params) {
                        var firstInstance;
                        lib(this).each(function () {
                            var s = new Swiper(this, params);
                            if (!firstInstance) firstInstance = s;
                        });
                        return firstInstance;
                    };
                }

                if (domLib) {
                    if (!('transitionEnd' in domLib.fn)) {
                        domLib.fn.transitionEnd = function (callback) {
                            var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                                i, j, dom = this;
                            function fireCallBack(e) {
                                /*jshint validthis:true */
                                if (e.target !== this) return;
                                callback.call(this, e);
                                for (i = 0; i < events.length; i++) {
                                    dom.off(events[i], fireCallBack);
                                }
                            }
                            if (callback) {
                                for (i = 0; i < events.length; i++) {
                                    dom.on(events[i], fireCallBack);
                                }
                            }
                            return this;
                        };
                    }
                    if (!('transform' in domLib.fn)) {
                        domLib.fn.transform = function (transform) {
                            for (var i = 0; i < this.length; i++) {
                                var elStyle = this[i].style;
                                elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                            }
                            return this;
                        };
                    }
                    if (!('transition' in domLib.fn)) {
                        domLib.fn.transition = function (duration) {
                            if (typeof duration !== 'string') {
                                duration = duration + 'ms';
                            }
                            for (var i = 0; i < this.length; i++) {
                                var elStyle = this[i].style;
                                elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                            }
                            return this;
                        };
                    }
                }

                window.Swiper = Swiper;
            })();

            if (typeof (module) !== 'undefined') {
                module.exports = window.Swiper;
            }
            else if (typeof define === 'function' && define.amd) {
                define([], function () {
                    'use strict';
                    return window.Swiper;
                });
            }
        }
        //
        , checkVersion: function (strVersionA, strVersionB) {
            try {
                var arrVersionA = strVersionA.split('.');
                var arrVersionB = strVersionB.split('.');
                var intVersionA = (10000 * parseInt(arrVersionA[0])) + (100 * parseInt(arrVersionA[1])) + parseInt(arrVersionA[2]);
                var intVersionB = (10000 * parseInt(arrVersionB[0])) + (100 * parseInt(arrVersionB[1])) + parseInt(arrVersionB[2]);

                if (intVersionA > intVersionB) {
                    return 1;
                } else if (intVersionA < intVersionB) {
                    return -1;
                } else {
                    return 0;
                }
                return false;
            } catch (e) {
                console.log(e);
            }
            return 1;
        }
        , loadScriptFile: function (url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded"
                            || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function () {
                    callback();
                };
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
        , loadjscssfile: function (filename, filetype) {
            if (filetype == "js") { // if filename is a external JavaScript file
                var fileref = document.createElement('script');
                fileref.setAttribute("type", "text/javascript");
                fileref.setAttribute("src", filename);
            } else if (filetype == "css") { // if filename is an external CSS file
                var fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", filename);
                fileref.setAttribute("media", "all");
            }
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
        }
        , showFancyPopup: function (content) {
            $.popupfancybox.open({
                content: content,
                beforeShow: function () {
                },
                afterShow: function () {
                },
                scrolling: 'no',
                openEffect: 'none', //normal
                openSpeed: 0, //normal
                afterClose: function () {

                }
            });
        }
        , loadConfig: function () {
            var model = {
                store: this.store,
            }
            $.ajax({
                url: this.host + "reviews/config",
                data: model,
                type: "GET",
                dataType: "jsonp",
                async: false,
                //cache: false,
                success: function (data) {
                    BPR.config = data;
                    BPR.starColor = data.star_color ? data.star_color : 'inherit';
                    BPR.lang = data.language;
                    BPR.initCallback();
                },
                error: function (e) {
                    console.log(e.message);
                }
            });
            return void 0;
        }
        //, createDivSummary: function (product) {
        //    var html = "";
        //    html += '<div class="title-bl">';
        //    html += '<h4>ĐÁNH GIÁ SẢN PHẨM</h4>';
        //    html += '</div>';
        //    html += '<div id="bizweb-product-reviews-sub" style="width:100%">';
        //    html += '<div class="bizweb-product-reviews-summary" id="bizweb-product-reviews-summary">';
        //    html += '<div itemscope="" itemtype="http://data-vocabulary.org/Review-aggregate">';
        //    html += '<meta itemprop="itemreviewed" content="' + product.product_name + '">';
        //    html += '<meta itemprop="votes" content="' + product.votes + '" />';
        //    html += '<div class="bpr-summary" itemprop="rating" itemscope="" itemtype="http://data-vocabulary.org/Rating">';
        //    html += '<span class="bpr-summary-average">' + product.rating + '</span>';
        //    html += '<meta itemprop="average" content="' + product.rating + '" />';
        //    html += '<meta itemprop="best" content="5" />';
        //    html += '<meta itemprop="worst" content="1" />';
        //    html += '<div id="bizweb-prv-summary-star" class="bizweb-product-reviews-star" data-score="' + product.rating + '" data-number="5"></div>';
        //    html += '</div>';
        //    html += '<div class="bpr-summary-caption"><div><p>' + product.votes + '</p></div><div><img src="' + BPR.host + '/assets/images/user.png" width="16" height="15"/></div></div>';
        //    html += '</div>';
        //    html += '</div>';
        //    html += '<div class="bizweb-product-reviews-list" id="bizweb-product-reviews-list">';
        //    html += '' + BPR.genReviews(product);
        //    html += '</div>';
        //    html += '</div>';

        //    $('#bizweb-product-reviews').html(html);
        //}
        //, createDivSummaryActions: function (product) {
        //    var html = "";
        //    html += "<span class=\"product-reviews-summary-actions\">";
        //    html += '<input type="button" value="Viết đánh giá" id="btnnewreview" onclick="BPR.toggleForm(' + product.product_id + ');return false;">';
        //    html += "</span>";
        //    $('#bpr-list').before(html);
        //}
        //, createSubmitForm: function (product) {
        //    var html = "";
        //    html += '<div style="display:none;" id="bpr-form" class="bizweb-product-reviews-form">';
        //    html += '<form name="bizweb-product-reviews-frm" id="bizweb-product-reviews-frm" onsubmit="BPR.submitForm(this);return false;" action="' + BPR.host + 'reviews/create" method="post">';
        //    html += '<input type="hidden" value="' + product.product_id + '" id="review_product_id" name="productId">';
        //    html += '<h4>Đánh giá</h4>';
        //    html += '<fieldset class="bpr-form-rating">';
        //    html += '<div id="dvRating"></div>';
        //    html += '<input type="hidden" value="3" id="review_rate" name="rating">';
        //    html += '<span class="bpr-form-message-error"></span>';
        //    html += '</fieldset>';
        //    html += '<fieldset class="bpr-form-contact">';
        //    html += '<div class="bpr-form-contact-name">';
        //    html += '<input type="text" placeholder="Tên" value="" name="author" id="review_author" maxlength="128" />';
        //    html += '<span class="bpr-form-message-error"></span>';
        //    html += '</div>';
        //    html += '<div class="bpr-form-contact-email">';
        //    html += '<input type="email" placeholder="Email" value="" name="email" id="review_email" maxlength="128" />';
        //    html += '<span class="bpr-form-message-error"></span>';
        //    html += '</div>';
        //    html += '</fieldset>';
        //    html += '<fieldset class="bpr-form-review">';
        //    html += '<div class="bpr-form-review-title">';
        //    html += '<input type="text" placeholder="Tiêu đề" value="" name="title" id="review_title" maxlength="512"/>';
        //    html += '<span class="bpr-form-message-error"></span>';
        //    html += '</div>';
        //    html += '<div class="bpr-form-review-body">';
        //    html += '<textarea placeholder="Nội dung" rows="5" name="body" id="review_body" maxlength="1500"></textarea>';
        //    html += '<span class="bpr-form-message-error"></span>';
        //    html += '</div>';
        //    html += '</fieldset>';
        //    html += '<fieldset class="bpr-form-actions">';
        //    html += '<input type="submit" class="bpr-button-submit" value="Gửi"/>';
        //    html += '</fieldset>';
        //    html += '</form>';
        //    html += "</div>"

        //    html += "<div class=\"bizweb-product-reviews-form\" id=\"bpr-thanks\" style=\"display:none;\" >";
        //    html += "<center><b>Cám ơn bạn đã đánh giá sản phẩm!</b><center>";
        //    html += "</div>"
        //    $('#bpr-list').before(html);
        //}
        , genReviews: function (data) {
            //console.log(product);
            var language = BPR.language;
            var reviews = data.reviews;
            var html = '';
            if (reviews == null) return;
            var len = reviews.length;
            for (var i = 0; i < len; i++) {
                var review = reviews[i];
                var strReply = '';
                if (review.reply != null) {
                    strReply += '<div class="bizweb-review-reply">';
                    strReply += '<p class="bizweb-review-reply-body">' + review.reply.content + '</p>';
                    strReply += '<span class="bizweb-review-reply-shop">- ' + review.reply.author_name + '</span>';
                    strReply += '</div>';
                }
                var str = '';
                str += '<div id="bizweb-review-' + review.id + '" class="bizweb-review" itemscope="" itemtype="http://data-vocabulary.org/Review">';
                str += '<div class="bizweb-review-header">';
                str += '<div>';
                str += '<div class="bizweb-review-header-img">';
                str += '<img src="' + BPR.host + '/assets/images/user.png" width="16" height="15"/>';
                str += '</div>';
                str += '</div>';
                str += '<div>';
                str += '<span class="bizweb-review-header-byline">' + review.author_name + '</span>';
                str += '<div class="bizweb-product-reviews-star" data-score="' + review.rating + '" data-number="5"></div>';
                str += '<span class="bizweb-review-header-time">' + review.time + '</span>';
                str += '</div>';
                str += '<div class="bizweb-review-reportreview">';
                if (BPR.checkReviewReport(review.id)) {
                    str += '<a href="javascript: void(0);" style="color: red;"><i aria-hidden="true" class="fa fa-warning"></i></a>';
                }
                else {
                    str += '<a onclick="BPR.reportReview(' + review.id + ');return false" title="' + language.report + '" href="javascript: void(0);">';
                    str += '<i aria-hidden="true" class="fa fa-warning"></i>';
                    str += '</a>';
                }
                str += '</div>';
                str += '<p class="bizweb-review-header-title">' + review.title + '</p>';
                str += '</div>';
                str += '<div class="bizweb-review-content">';
                str += '<p class="bizweb-review-content-body">' + review.content + '</p>';
                str += '</div>';
                str += strReply;
                str += '<div class="bizweb-review-footer">';
                str += '';
                str += '</div>';
                str += '<div style="display:none;"><span itemprop="itemreviewed">' + BPR.product.product_name + '</span><span itemprop="rating">' + review.rating + '</span></div>';
                str += '</div>';
                //console.log(str);
                html += str;
            };

            //var moreReviews = '';
            //if (BPR.product.next_id > 0) {
            //    moreReviews += '<a onclick="BPR.getMoreReviews(this); return false" href="javascript: void(0);">Xem thêm</a>';
            //}
            var e;
            e = $("#bizweb-product-reviews[data-id='" + BPR.product.product_id + "']");
            e.find("#bpr-list").html(html);
            var p = e.find("#bpr-more-reviews");
            if (data.records_total > data.limit) {
                p.pagination({
                    items: data.records_total,
                    itemsOnPage: data.limit,
                    currentPage: data.page,
                    cssStyle: 'light-theme',
                    prevText: '<',
                    nextText: '>',
                    displayedPages: 3,
                    onPageClick: function (page, event) {
                        p.pagination('disable');
                        BPR.getMoreReviews(page);
                    }
                });
            }
            else {
                p.html('');
            }
            BPR.loadStar();
            return void 0;
        }
        , getMoreReviews: function (page) {
            var id = $(BPR.reviewEl).attr("data-id");
            var e = {
                productId: id,
                page: page,
            };
            e = $.extend(e, BPR.extraAjaxParams);
            $.ajax({
                url: BPR.host + "reviews/getmorereviews",
                type: "GET",
                dataType: "jsonp",
                data: e,
                success: BPR.moreReviewsCallback,
                beforeSend: function () {
                    return;
                },
                complete: function () {
                    return;
                }
            });
            return false;
        }
        , moreReviewsCallback: function (data) {
            //BPR.product.next_id = data.next_id;
            BPR.genReviews(data);
            return;
        }
        , loadStar: function () {
            $("#bizweb-product-reviews .bizweb-product-reviews-star").raty({
                starType: 'i',
                number: function () {
                    return $(this).attr('data-number');
                },
                score: function () {
                    return $(this).attr('data-score');
                },
                readOnly: true
            });
            $("#bizweb-product-reviews .bizweb-product-reviews-star").css("color", this.starColor);
            $(window).resize();
        }
        , checkCommentator: function () {
            var id = $(BPR.reviewEl).attr("data-id");
            var e;
            e = $("#bizweb-product-reviews[data-id='" + id + "']");
            if (BPR.config.commentator_type == 'customer' && ProductReviewsAppUtil.customer == null) {
                $(e).find('.product-reviews-summary-actions').html('');
                $(e).find('.bizweb-product-reviews-form').html('');
                return;
            }
            if (ProductReviewsAppUtil.customer) {
                $(e).find('form #review_author').val(ProductReviewsAppUtil.customer.name);
                $(e).find('form #review_email').val(ProductReviewsAppUtil.customer.email);
            }
            return;
        }
        , checkReviewReport: function (reviewId) {
            if (ProductReviewsAppUtil.customer) {
                var cookies = BPR.readCookie();
                var id = ProductReviewsAppUtil.customer.id;
                var reviewIds = cookies[id];
                if (reviewIds && reviewIds.length > 0 && $.inArray(reviewId, reviewIds) != -1) return true;
            }
            return false;
        }
        , loadProduct: function () {
            if (this.reviewEl == null || this.reviewEl.length == 0) {
                return;
            }
            var id = $(this.reviewEl).attr("data-id");
            var model = {
                productId: id,
                store: this.store,
            };
            $.get(this.host + "reviews/product", model, this.productCallback, "jsonp");
            return void 0;
        }
        , productCallback: function (data) {
            var language = BPR.language;
            BPR.product = {
                product_id: data.product_id,
                product_name: data.product_name,
                rating: data.rating,
                votes: data.votes,
                next_id: data.next_id,
            };
            data = $.extend(data, {
                formId: 'bpr-form_' + data.product_id,
                imgUser: BPR.host + 'assets/images/user.png',
                actionForm: BPR.host + 'reviews/create',
                email_help: BPR.config.email_help,
                email_required: BPR.config.email_required,
                name_help: BPR.config.name_help,
                name_required: BPR.config.name_required,
            });
            data = $.extend(data, {
                language: language,
            });
            if (data.name_help == '') {
                data.name_help = language.form.review_author;
            }
            if (data.email_help == '') {
                data.email_help = language.form.review_email;
            }
            $("#bizweb-product-reviews").loadTemplate(BPR.host + 'assets/template/bpr.html', data
                , {
                    complete: function () {
                        BPR.genReviews(data);
                        BPR.checkCommentator();
                    }
                });
            return void 0;
        }
        , loadBadges: function () {
            var ids = this.badgeEls.map(function () {
                return $(this).attr("data-id");
            });
            if (ids.length > 0) {
                var model = $.extend({ productIds: ids.splice(0) }, BPR.extraAjaxParams);
                $.ajax({
                    url: this.host + "reviews/badges",
                    data: model,
                    type: "GET",
                    dataType: "jsonp",
                    //async: false,
                    //cache: false,
                    traditional: true,
                    success: function (data) {
                        BPR.badgesCallback(data);
                    },
                    error: function (e) {
                        console.log(e.message);
                    }
                });
                return void 0;
            }
        }
        , badgesCallback: function (data) {
            BPR.badgeEls.each(function () {
                var id = $(this).attr("data-id");
                var badge = BPR.filterBadge(data.badges, id);
                //debugger;
                var html = '';
                if (badge != null) {
                    html += '<div class="bizweb-product-reviews-star" data-score="' + badge.rating + '" data-number="5" ></div>';
                    html += '<div><p>' + badge.votes + '</p></div>';
                    html += '<div><img src="' + BPR.host + '/assets/images/user.png" width="18" height="17"/></div>';
                }
                else {
                    html += '<div class="bizweb-product-reviews-star" data-score="0" data-number="5" ></div>';
                    html += '<div><p>' + badge.votes + '</p></div>';
                    html += '<div><img src="' + BPR.host + '/assets/images/user.png" width="22" height="20"/></div>';
                }
                $(this).html(html);
            });
            BPR.loadBadgeStar();
        }
        , filterBadge: function (badges, id) {
            var len = badges.length;
            for (var i = 0; i < len; i++) {
                if (badges[i].id == id) {
                    return badges[i];
                }
            }
            return null;
        }
        , loadBadgeStar: function () {
            $(".bizweb-product-reviews-star").raty({
                starType: 'i',
                number: function () {
                    return $(this).attr('data-number');
                },
                score: function () {
                    return $(this).attr('data-score');
                },
                readOnly: true
            });
            $(".bizweb-product-reviews-star").css("color", this.starColor);
            $(window).resize();
        }
        , loadDefaultStar: function () {
            $("#bizweb-product-reviews-frm #dvRating").raty({
                starType: 'i',
                number: 5,
                //score: 3,
                click: function (score, evt) {
                    $("#bizweb-product-reviews-frm #review_rate").val(score);
                }
            });
            $("#bizweb-product-reviews-frm #dvRating").css("color", this.starColor);
            $(window).resize();
        }
        , submitForm: function (form) {
            var e, s;
            e = $(form).serializeObject();
            e = $.extend(e, BPR.extraAjaxParams);
            e.author = e.author.trim();
            e.email = e.email.trim();
            e.title = e.title.trim();
            e.body = e.body.trim();

            if (!BPR.validateForm(e)) {
                $.fancybox.update();
                return false;
            }
            $.fancybox.showLoading();

            $.ajax({
                url: BPR.host + "reviews/create",
                type: "POST",
                dataType: "json",
                data: e,
                success: BPR.formCallback,
                beforeSend: function () {
                    $(".bpr-button-submit").attr("disabled", "disabled");
                    return;
                },
                complete: function () {
                    $(".bpr-button-submit").removeAttr("disabled");
                    $.fancybox.hideLoading();
                    return;
                }
            });
            return false;
        }
        , formCallback: function (data) {
            if (data.status && data.status > 200) {
                $(".bpr-form-review-error .error").html(data.message);
                $(".bpr-form-review-error .error").show();
                return;
            }
            $(".bpr-form-review-error .error").hide();

            $.fancybox({
                href: "#bpr-thanks",
                //padding: 0,
                afterShow: function () {
                },
                afterClose: function () {
                }
            });
            $("#btnnewreview").remove();
        }
        , toggleForm: function (elem) {
            var id;
            id = $(elem).parents('#bizweb-product-reviews[data-id]').attr("data-id");
            //console.log(id);
            $.fancybox({
                href: "#bpr-form_" + id,
                //padding: 0,
                afterShow: function () {
                    BPR.loadDefaultStar();
                },
                afterClose: function () {
                    $.fancybox.hideLoading()
                }
            });
            return false;
        }
        , validateForm: function (e) {
            var f = BPR.language.form;
            // validate form
            var isRating = false;
            var isName = false;
            var isEmail = false;
            var isTitle = false;
            var isBody = false;

            if (e.rating == '' || e.rating < 1 || e.rating > 5) {
                $("#bizweb-product-reviews-frm .bpr-form-rating .bpr-form-message-error").html(f.rating_error.error).show();
            } else {
                $("#bizweb-product-reviews-frm .bpr-form-rating .bpr-form-message-error").hide();
                isRating = true;
            }

            if (e.author == '' && BPR.config.name_required == 'require') {
                $("#bizweb-product-reviews-frm .bpr-form-contact-name").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-contact-name .bpr-form-message-error").html(f.name_error.required);
            } else if (e.author.length > 128) {
                $("#bizweb-product-reviews-frm .bpr-form-contact-name").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-contact-name .bpr-form-message-error").html(f.name_error.maxlength);
            } else {
                $("#bizweb-product-reviews-frm .bpr-form-contact-name").removeClass("has-error");
                isName = true;
            }

            if (e.email == '' && BPR.config.email_required == 'require') {
                $("#bizweb-product-reviews-frm .bpr-form-contact-email").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-contact-email .bpr-form-message-error").html(f.email_error.required);
            } else if (e.email.length > 128) {
                $("#bizweb-product-reviews-frm .bpr-form-contact-email").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-contact-email .bpr-form-message-error").html(f.email_error.maxlength);
            } else if (e.email != '' && !BPR.isValidEmailAddress(e.email)) {
                $("#bizweb-product-reviews-frm .bpr-form-contact-email").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-contact-email .bpr-form-message-error").html(f.email_error.error);
            } else {
                $("#bizweb-product-reviews-frm .bpr-form-contact-email").removeClass("has-error");
                isEmail = true;
            }

            if (e.title == "") {
                $("#bizweb-product-reviews-frm .bpr-form-review-title").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-review-title .bpr-form-message-error").html(f.title_error.required);
            } else if (e.title.length > 512) {
                $("#bizweb-product-reviews-frm .bpr-form-review-title").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-review-title .bpr-form-message-error").html(f.title_error.maxlength);
            } else {
                $("#bizweb-product-reviews-frm .bpr-form-review-title").removeClass("has-error");
                isTitle = true;
            }

            if (e.body == "") {
                $("#bizweb-product-reviews-frm .bpr-form-review-body").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-review-body .bpr-form-message-error").html(f.body_error.required);
            } else if (e.body.length > 1500) {
                $("#bizweb-product-reviews-frm .bpr-form-review-body").addClass("has-error");
                $("#bizweb-product-reviews-frm .bpr-form-review-body .bpr-form-message-error").html(f.body_error.maxlength);
            } else {
                $("#bizweb-product-reviews-frm .bpr-form-review-body").removeClass("has-error");
                isBody = true;
            }

            if (isRating == false || isName == false || isEmail == false || isTitle == false || isBody == false) {
                return false;
            }
            else return true;
        }
        , isValidEmailAddress: function (emailAddress) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(emailAddress);
        }
        , reportReview: function (t) {
            var e;
            var language = BPR.language;
            return confirm(language.report_alert) && (e = $.extend({
                id: t
            }, BPR.extraAjaxParams), $.get("" + BPR.host + "/reviews/report", e, BPR.reportCallback, "jsonp")), !1
        }
        , reportCallback: function (data) {
            var html = '<a href="javascript: void(0);" style="color: red;"><i aria-hidden="true" class="fa fa-warning"></i></a>';
            $('#bizweb-review-' + data.id).find('.bizweb-review-reportreview').html(html);
            if (ProductReviewsAppUtil.customer) {
                var cookies = BPR.readCookie();
                var id = ProductReviewsAppUtil.customer.id;
                if (!cookies[id] || cookies[id].length == 0) {
                    cookies[id] = new Array();
                }
                cookies[id].push(data.id);
                BPR.writeCookie(cookies);
            }
            return;
        }
        , initDomEls: function () {
            this.badgeEls = $(".bizweb-product-reviews-badge[data-id]");
            this.reviewEl = $("#bizweb-product-reviews[data-id]").first();
            this.moduleEl = $(".bizweb-product-reviews-module");
        }
        , loadProductsModule: function () {
            if (BPR.moduleEl.length && BPR.moduleEl.length > 0) {
                var requestTimeout = 40000;
                var data = {
                    store: Bizweb.store,
                    page: Bizweb.template,
                };
                $.ajax({
                    url: BPR.host + 'reviews/productsmodule',
                    data: data,
                    type: "GET",
                    timeout: requestTimeout,
                    //dataType: "html",
                    traditional: true,
                    success: function (result) {
                        BPR.productsModuleCallback(result);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log('Có lỗi xảy ra!');
                    }
                });
            }
        }
        , productsModuleCallback: function (html) {
            if (html == null || html.length <= 0) {
                return;
            }
            BPR.moduleEl.html(html);

            var slidesPerView = parseInt(BPR.moduleEl.find('.bpr-products-module-slide').val(), 10);

            var swiperInstances = {};
            if ($('.bpr-products-module-body.swiper-container').length && $('.bpr-products-module-body.swiper-container').length > 0) {
                $('.bpr-products-module-body.swiper-container').each(function (index, element) {
                    var $this = $(this);
                    var $thisParents = $this.parents('.bpr-products-module-container')
                    var $wrapperOuter = $this.find('.bpr-wrapper-outer');

                    $this.addClass("instance-" + index);
                    $thisParents.addClass("instance-" + index);

                    //$thisParents.find('.swiper-pagination').addClass('is-pagination-' + index);
                    $thisParents.find('.bpr-button-prev').addClass('bpr-btn-prev-' + index);
                    $thisParents.find('.bpr-button-next').addClass('bpr-btn-next-' + index);

                    var settings = {
                        nextButton: '.bpr-btn-next-' + index,
                        prevButton: '.bpr-btn-prev-' + index,
                        lazyLoading: true,
                        breakpoints: {
                        },
                    };
                    var width = $wrapperOuter.width();
                    //console.log(width);
                    if (width <= 320) {
                        settings.slidesPerView = 1;
                        settings.spaceBetween = 0;
                        settings.breakpoints = {};
                    } else if (width <= 768) {
                        settings.slidesPerView = 2;
                        settings.spaceBetween = 10;
                        settings.breakpoints = {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                        };
                    } else if (width <= 992) {
                        settings.slidesPerView = 3;
                        settings.spaceBetween = 20;
                        settings.breakpoints = {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        };
                    } else {
                        settings.slidesPerView = slidesPerView;
                        settings.spaceBetween = 30;
                        settings.breakpoints = {
                            // when window width is <= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        };
                    }
                    //console.log(settings);
                    swiperInstances[index] = new Swiper('.bpr-products-module-body.swiper-container.instance-' + index + ' .bpr-wrapper-outer', settings);
                })
            }

            $(".bizweb-product-reviews-module .bpr-product-star").raty({
                starType: 'i',
                number: function () {
                    return $(this).attr('data-number');
                },
                score: function () {
                    return $(this).attr('data-score');
                },
                readOnly: true
            });
            $(window).resize();
        }
        , init: function () {
            this.loadjscssfile(this.host + 'assets/css/bpr.min.css', 'css');
            this.loadjscssfile(this.host + 'assets/css/productReviews.min.css', 'css');

            this.initDomEls();
            this.loadConfig();
        }
        , initCallback: function () {
            BPR.loadScriptFile(BPR.host + 'assets/js/lang/' + BPR.lang + '.min.js', function () {
                BPR.language = ProductReviewsAppUtil.lang[BPR.lang];
                BPR.loadProduct();
                BPR.loadBadges();
                BPR.loadProductsModule();
            })
        }
        , writeCookie: function (a) {
            var today = new Date();
            today = today.getTime();
            var expired_at = Math.round(today + BPR.cookie_expire * 60 * 60 * 1000);

            var b = new Date(expired_at)
                , c = b.toGMTString()
                , a = JSON.stringify(a);
            document.cookie = "bpr-app=" + a + ";expires=" + c + ";path=/;"
        }
        , readCookie: function () {
            //if (BPR.cookies) return BPR.cookies;
            BPR.cookies = {};
            for (var a = null, b = "bpr-app=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " == e.charAt(0) ;) e = e.substring(1, e.length);
                if (0 == e.indexOf(b)) {
                    a = e.substring(b.length, e.length);
                    break
                }
            }
            return a && (BPR.cookies = JSON.parse(a)), BPR.cookies
        }
    });

    if (!BPR.trackingInit) {
        BPR.trackingInit = true;

        BPR.fancybox(window, document, $, undefined);
        BPR.raty($);
        BPR.serializeObject($);
        BPR.loadTemplate($);
        BPR.pagination($);
        BPR.swiper();

        $(document).ready(function () {
            BPR.init();
        });
    }
}.call(this);