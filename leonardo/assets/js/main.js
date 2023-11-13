/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() { return f.call(this) },
        get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] },
        pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b },
        each: function(a) { return r.each(this, a) },
        map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(f.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === r.type(a) },
        isArray: Array.isArray,
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) },
        isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a },
        globalEval: function(a) { p(a) },
        camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(s, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" });
        try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) {
            G = {
                apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return X.test(a.nodeName) },
                input: function(a) { return W.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: pa(function() { return [0] }),
                last: pa(function(a, b) { return [b - 1] }),
                eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }),
                even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
                odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
                lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) }
    r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) { return this.pushStack(D(this, a || [], !1)) },
        not: function(a) { return this.pushStack(D(this, a || [], !0)) },
        is: function(a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return J(a, "nextSibling") }, prev: function(a) { return J(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return a.contentDocument || r.merge([], a.childNodes) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e) } });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) { var b = {}; return r.each(a.match(K) || [], function(a, c) { b[c] = !0 }), b }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    };

    function M(a) { return a }

    function N(a) { throw a }

    function O(a, b, c) { var d; try { a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() { return d },
                    always: function() { return f.done(arguments).fail(arguments), this },
                    "catch": function(a) { return e.then(null, a) },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)) }).promise()
                    },
                    promise: function(a) { return null != a ? r.extend(a, e) : e }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var Q = r.Deferred();
    r.fn.ready = function(a) { return Q.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? r.readyWait++ : r.ready(!0) },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) { e = !0; for (h in c) S(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function U() { this.expando = r.expando + U.uid++ }
    U.uid = 1, U.prototype = {
        cache: function(a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] },
        access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } },
        hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a) }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try { c = Z(c) } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({ hasData: function(a) { return W.hasData(a) || V.hasData(a) }, data: function(a, b, c) { return W.access(a, b, c) }, removeData: function(a, b) { W.remove(a, b) }, _data: function(a, b, c) { return V.access(a, b, c) }, _removeData: function(a, b) { V.remove(a, b) } }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { W.set(this, a) }) : S(this, function(b) { var c; if (f && void 0 === b) { if (c = W.get(f, a), void 0 !== c) return c; if (c = $(f, a), void 0 !== c) return c } else this.each(function() { W.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { W.remove(this, a) }) }
    }), r.extend({
        queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [] },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function() { V.remove(a, [b + "queue", c]) }) }) }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }
    r.fn.extend({ show: function() { return ha(this, !0) }, hide: function() { return ha(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { ca(this) ? r(this).show() : r(this).hide() }) } });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c }

    function na(a, b) { for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")) }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) { k = 0; while (f = g[k++]) ka.test(f.type || "") && c.push(f) }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() { return !0 }

    function va() { return !1 }

    function wa() { try { return d.activeElement } catch (a) {} }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) xa(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(K) || [""], j = b.length; while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f })
                    }
            return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
        },
        addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) },
        fix: function(a) { return a[r.expando] ? a : new r.Event(a) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== wa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === wa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) { return r.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({ on: function(a, b, c, d) { return xa(this, a, b, c, d) }, one: function(a, b, c, d) { return xa(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a }

    function Ea(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Fa(a) { var b = Ba.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d)); return a }
    r.extend({
        htmlPrefilter: function(a) { return a.replace(ya, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) { return Ja(this, a, !0) },
        remove: function(a) { return Ja(this, a) },
        text: function(a) { return S(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return Ia(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return Ia(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } }))
    }();

    function Na(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Oa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = { position: "absolute", visibility: "hidden", display: "block" },
        Ra = { letterSpacing: "0", fontWeight: "400" },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) { var d = aa.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Wa(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e))); return g }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Na(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) { if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() { return Xa(a, b, d) }) },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ka.test(a) || (r.cssHooks[a + b].set = Va) }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) { for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) { return new Ya.prototype.init(a, b, c, d, e) }
    r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ya.propHooks[this.prop]; return a && a.get ? a.get(this) : Ya.propHooks._default.get(this) }, run: function(a) { var b, c = Ya.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() { $a && (a.requestAnimationFrame(bb), r.fx.tick()) }

    function cb() { return a.setTimeout(function() { Za = void 0 }), Za = r.now() }

    function db(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() { p || ha([a]), V.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return ea(c.elem, a, aa.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b) }, prefilters: [fb], prefilter: function(a, b) { b ? hb.prefilters.unshift(a) : hb.prefilters.push(a) } }), r.speed = function(a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue) }, e }, r.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e) }
        }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function(a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop() }, r.fx.interval = 13, r.fx.start = function() { $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval)) }, r.fx.stop = function() { a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return S(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return S(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });

    function mb(a) { var b = a.match(K) || []; return b.join(" ") }

    function nb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, nb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, nb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, nb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(K) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : mb(r.text(a)) } },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(ub, "\r\n") } }) : { name: b.name, value: c.replace(ub, "\r\n") } }).get() } });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a) },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) { h = {}; while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return k ? g : null },
                    setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this },
                    overrideMimeType: function(a) { return null == k && (o.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout));
                try { k = !1, e.send(v, A) } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) { return r.get(a, b, c, "json") },
        getScript: function(a, b) { return r.get(a, void 0, b, "script") }
    }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({
        wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this }
    }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i }
            },
            abort: function() { c && c() }
        }
    }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length };

    function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || qa }) }
    }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return S(this, function(a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
    }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) { if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r }, b || (a.jQuery = a.$ = r), r
});

/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    "use strict";
    var n = "animsition",
        i = {
            init: function(a) {
                a = t.extend({ inClass: "fade-in", outClass: "fade-out", inDuration: 1500, outDuration: 800, linkElement: ".animsition-link", loading: !0, loadingParentElement: "body", loadingClass: "animsition-loading", loadingInner: "", timeout: !1, timeoutCountdown: 5e3, onLoadEvent: !0, browser: ["animation-duration", "-webkit-animation-duration"], overlay: !1, overlayClass: "animsition-overlay-slide", overlayParentElement: "body", transition: function(t) { window.location.href = t } }, a), i.settings = { timer: !1, data: { inClass: "animsition-in-class", inDuration: "animsition-in-duration", outClass: "animsition-out-class", outDuration: "animsition-out-duration", overlay: "animsition-overlay" }, events: { inStart: "animsition.inStart", inEnd: "animsition.inEnd", outStart: "animsition.outStart", outEnd: "animsition.outEnd" } };
                var o = i.supportCheck.call(this, a);
                if (!o && a.browser.length > 0 && (!o || !this.length)) return "console" in window || (window.console = {}, window.console.log = function(t) { return t }), this.length || console.log("Animsition: Element does not exist on page."), o || console.log("Animsition: Does not support this browser."), i.destroy.call(this);
                var e = i.optionCheck.call(this, a);
                return e && t("." + a.overlayClass).length <= 0 && i.addOverlay.call(this, a), a.loading && t("." + a.loadingClass).length <= 0 && i.addLoading.call(this, a), this.each(function() {
                    var o = this,
                        e = t(this),
                        s = t(window),
                        r = t(document),
                        l = e.data(n);
                    l || (a = t.extend({}, a), e.data(n, { options: a }), a.timeout && i.addTimer.call(o), a.onLoadEvent && s.on("load." + n, function() { i.settings.timer && clearTimeout(i.settings.timer), i["in"].call(o) }), s.on("pageshow." + n, function(t) { t.originalEvent.persisted && i["in"].call(o) }), s.on("unload." + n, function() {}), r.on("click." + n, a.linkElement, function(n) {
                        n.preventDefault();
                        var a = t(this),
                            e = a.attr("href");
                        2 === n.which || n.metaKey || n.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && n.ctrlKey ? window.open(e, "_blank") : i.out.call(o, a, e)
                    }))
                })
            },
            addOverlay: function(n) { t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>') },
            addLoading: function(n) { t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>") },
            removeLoading: function() {
                var i = t(this),
                    a = i.data(n).options,
                    o = t(a.loadingParentElement).children("." + a.loadingClass);
                o.fadeOut().remove()
            },
            addTimer: function() {
                var a = this,
                    o = t(this),
                    e = o.data(n).options;
                i.settings.timer = setTimeout(function() { i["in"].call(a), t(window).off("load." + n) }, e.timeoutCountdown)
            },
            supportCheck: function(n) {
                var i = t(this),
                    a = n.browser,
                    o = a.length,
                    e = !1;
                0 === o && (e = !0);
                for (var s = 0; o > s; s++)
                    if ("string" == typeof i.css(a[s])) { e = !0; break }
                return e
            },
            optionCheck: function(n) { var a, o = t(this); return a = n.overlay || o.data(i.settings.data.overlay) ? !0 : !1 },
            animationCheck: function(i, a, o) {
                var e = t(this),
                    s = e.data(n).options,
                    r = typeof i,
                    l = !a && "number" === r,
                    d = a && "string" === r && i.length > 0;
                return l || d ? i = i : a && o ? i = s.inClass : !a && o ? i = s.inDuration : a && !o ? i = s.outClass : a || o || (i = s.outDuration), i
            },
            "in": function() {
                var a = this,
                    o = t(this),
                    e = o.data(n).options,
                    s = o.data(i.settings.data.inDuration),
                    r = o.data(i.settings.data.inClass),
                    l = i.animationCheck.call(a, s, !1, !0),
                    d = i.animationCheck.call(a, r, !0, !0),
                    u = i.optionCheck.call(a, e),
                    c = o.data(n).outClass;
                e.loading && i.removeLoading.call(a), c && o.removeClass(c), u ? i.inOverlay.call(a, d, l) : i.inDefault.call(a, d, l)
            },
            inDefault: function(n, a) {
                var o = t(this);
                o.css({ "animation-duration": a + "ms" }).addClass(n).trigger(i.settings.events.inStart).animateCallback(function() { o.removeClass(n).css({ opacity: 1 }).trigger(i.settings.events.inEnd) })
            },
            inOverlay: function(a, o) {
                var e = t(this),
                    s = e.data(n).options;
                e.css({ opacity: 1 }).trigger(i.settings.events.inStart), t(s.overlayParentElement).children("." + s.overlayClass).css({ "animation-duration": o + "ms" }).addClass(a).animateCallback(function() { e.trigger(i.settings.events.inEnd) })
            },
            out: function(a, o) {
                var e = this,
                    s = t(this),
                    r = s.data(n).options,
                    l = a.data(i.settings.data.outClass),
                    d = s.data(i.settings.data.outClass),
                    u = a.data(i.settings.data.outDuration),
                    c = s.data(i.settings.data.outDuration),
                    m = l ? l : d,
                    g = u ? u : c,
                    f = i.animationCheck.call(e, m, !0, !1),
                    v = i.animationCheck.call(e, g, !1, !1),
                    h = i.optionCheck.call(e, r);
                s.data(n).outClass = f, h ? i.outOverlay.call(e, f, v, o) : i.outDefault.call(e, f, v, o)
            },
            outDefault: function(a, o, e) {
                var s = t(this),
                    r = s.data(n).options;
                s.css({ "animation-duration": o + 1 + "ms" }).addClass(a).trigger(i.settings.events.outStart).animateCallback(function() { s.trigger(i.settings.events.outEnd), r.transition(e) })
            },
            outOverlay: function(a, o, e) {
                var s = this,
                    r = t(this),
                    l = r.data(n).options,
                    d = r.data(i.settings.data.inClass),
                    u = i.animationCheck.call(s, d, !0, !0);
                t(l.overlayParentElement).children("." + l.overlayClass).css({ "animation-duration": o + 1 + "ms" }).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function() { r.trigger(i.settings.events.outEnd), l.transition(e) })
            },
            destroy: function() {
                return this.each(function() {
                    var i = t(this);
                    t(window).off("." + n), i.css({ opacity: 1 }).removeData(n)
                })
            }
        };
    t.fn.animateCallback = function(n) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function() {
            var a = t(this);
            a.on(i, function() { return a.off(i), n.call(this) })
        })
    }, t.fn.animsition = function(a) { return i[a] ? i[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void t.error("Method " + a + " does not exist on jQuery." + n) : i.init.apply(this, arguments) }
});
/* flatpickr v4.5.7,, @license MIT */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).flatpickr = t()
}(this, function() {
    "use strict";
    var e = function() {
            return (e = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        n = {
            _disable: [],
            _enable: [],
            allowInput: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enable: [],
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function(e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function(e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                var n = new Date(t.getFullYear(), 0, 4);
                return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        },
        a = {
            weekdays: {
                shorthand: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
                longhand: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
            },
            months: {
                shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                longhand: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(e) {
                var t = e % 100;
                if (t > 3 && t < 21) return "th";
                switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year"
        },
        i = function(e) {
            return ("0" + e).slice(-2)
        },
        o = function(e) {
            return !0 === e ? 1 : 0
        };

    function r(e, t, n) {
        var a;
        return void 0 === n && (n = !1),
            function() {
                var i = this,
                    o = arguments;
                null !== a && clearTimeout(a), a = window.setTimeout(function() {
                    a = null, n || e.apply(i, o)
                }, t), n && !a && e.apply(i, o)
            }
    }
    var l = function(e) {
        return e instanceof Array ? e : [e]
    };

    function c(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t)
    }

    function d(e, t, n) {
        var a = window.document.createElement(e);
        return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), a
    }

    function s(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function u(e, t) {
        var n = d("div", "numInputWrapper"),
            a = d("input", "numInput " + e),
            i = d("span", "arrowUp"),
            o = d("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== t)
            for (var r in t) a.setAttribute(r, t[r]);
        return n.appendChild(a), n.appendChild(i), n.appendChild(o), n
    }
    var f = function() {},
        m = function(e, t, n) {
            return n.months[t ? "shorthand" : "longhand"][e]
        },
        g = {
            D: f,
            F: function(e, t, n) {
                e.setMonth(n.months.longhand.indexOf(t))
            },
            G: function(e, t) {
                e.setHours(parseFloat(t))
            },
            H: function(e, t) {
                e.setHours(parseFloat(t))
            },
            J: function(e, t) {
                e.setDate(parseFloat(t))
            },
            K: function(e, t, n) {
                e.setHours(e.getHours() % 12 + 12 * o(new RegExp(n.amPM[1], "i").test(t)))
            },
            M: function(e, t, n) {
                e.setMonth(n.months.shorthand.indexOf(t))
            },
            S: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            U: function(e, t) {
                return new Date(1e3 * parseFloat(t))
            },
            W: function(e, t) {
                var n = parseInt(t);
                return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0)
            },
            Y: function(e, t) {
                e.setFullYear(parseFloat(t))
            },
            Z: function(e, t) {
                return new Date(t)
            },
            d: function(e, t) {
                e.setDate(parseFloat(t))
            },
            h: function(e, t) {
                e.setHours(parseFloat(t))
            },
            i: function(e, t) {
                e.setMinutes(parseFloat(t))
            },
            j: function(e, t) {
                e.setDate(parseFloat(t))
            },
            l: f,
            m: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            n: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            s: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            u: function(e, t) {
                return new Date(parseFloat(t))
            },
            w: f,
            y: function(e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        },
        p = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        h = {
            Z: function(e) {
                return e.toISOString()
            },
            D: function(e, t, n) {
                return t.weekdays.shorthand[h.w(e, t, n)]
            },
            F: function(e, t, n) {
                return m(h.n(e, t, n) - 1, !1, t)
            },
            G: function(e, t, n) {
                return i(h.h(e, t, n))
            },
            H: function(e) {
                return i(e.getHours())
            },
            J: function(e, t) {
                return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
            },
            K: function(e, t) {
                return t.amPM[o(e.getHours() > 11)]
            },
            M: function(e, t) {
                return m(e.getMonth(), !0, t)
            },
            S: function(e) {
                return i(e.getSeconds())
            },
            U: function(e) {
                return e.getTime() / 1e3
            },
            W: function(e, t, n) {
                return n.getWeek(e)
            },
            Y: function(e) {
                return e.getFullYear()
            },
            d: function(e) {
                return i(e.getDate())
            },
            h: function(e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function(e) {
                return i(e.getMinutes())
            },
            j: function(e) {
                return e.getDate()
            },
            l: function(e, t) {
                return t.weekdays.longhand[e.getDay()]
            },
            m: function(e) {
                return i(e.getMonth() + 1)
            },
            n: function(e) {
                return e.getMonth() + 1
            },
            s: function(e) {
                return e.getSeconds()
            },
            u: function(e) {
                return e.getTime()
            },
            w: function(e) {
                return e.getDay()
            },
            y: function(e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        v = function(e) {
            var t = e.config,
                i = void 0 === t ? n : t,
                o = e.l10n,
                r = void 0 === o ? a : o;
            return function(e, t, n) {
                var a = n || r;
                return void 0 !== i.formatDate ? i.formatDate(e, t, a) : t.split("").map(function(t, n, o) {
                    return h[t] && "\\" !== o[n - 1] ? h[t](e, a, i) : "\\" !== t ? t : ""
                }).join("")
            }
        },
        D = function(e) {
            var t = e.config,
                i = void 0 === t ? n : t,
                o = e.l10n,
                r = void 0 === o ? a : o;
            return function(e, t, a, o) {
                if (0 === e || e) {
                    var l, c = o || r,
                        d = e;
                    if (e instanceof Date) l = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
                    else if ("string" == typeof e) {
                        var s = t || (i || n).dateFormat,
                            u = String(e).trim();
                        if ("today" === u) l = new Date, a = !0;
                        else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                        else if (i && i.parseDate) l = i.parseDate(e, s);
                        else {
                            l = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
                            for (var f = void 0, m = [], h = 0, v = 0, D = ""; h < s.length; h++) {
                                var w = s[h],
                                    b = "\\" === w,
                                    y = "\\" === s[h - 1] || b;
                                if (p[w] && !y) {
                                    D += p[w];
                                    var C = new RegExp(D).exec(e);
                                    C && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                        fn: g[w],
                                        val: C[++v]
                                    })
                                } else b || (D += ".");
                                m.forEach(function(e) {
                                    var t = e.fn,
                                        n = e.val;
                                    return l = t(l, n, c) || l
                                })
                            }
                            l = f ? l : void 0
                        }
                    }
                    if (l instanceof Date && !isNaN(l.getTime())) return !0 === a && l.setHours(0, 0, 0, 0), l;
                    i.errorHandler(new Error("Invalid date provided: " + d))
                }
            }
        };

    function w(e, t, n) {
        return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
    }
    var b = function(e, t, n) {
            return e > Math.min(t, n) && e < Math.max(t, n)
        },
        y = {
            DAY: 864e5
        };
    "function" != typeof Object.assign && (Object.assign = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var a = function(t) {
                t && Object.keys(t).forEach(function(n) {
                    return e[n] = t[n]
                })
            }, i = 0, o = t; i < o.length; i++) {
            a(o[i])
        }
        return e
    });
    var C = 300;

    function M(n, f) {
        var g = {
            config: e({}, E.defaultConfig),
            l10n: a
        };

        function h(e) {
            return e.bind(g)
        }

        function M() {
            var e = g.config;
            !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame(function() {
                if (void 0 !== g.calendarContainer && (g.calendarContainer.style.visibility = "hidden", g.calendarContainer.style.display = "block"), void 0 !== g.daysContainer) {
                    var t = (g.days.offsetWidth + 1) * e.showMonths;
                    g.daysContainer.style.width = t + "px", g.calendarContainer.style.width = t + (void 0 !== g.weekWrapper ? g.weekWrapper.offsetWidth : 0) + "px", g.calendarContainer.style.removeProperty("visibility"), g.calendarContainer.style.removeProperty("display")
                }
            })
        }

        function x(e) {
            0 === g.selectedDates.length && ne(), void 0 !== e && "blur" !== e.type && function(e) {
                e.preventDefault();
                var t = "keydown" === e.type,
                    n = e.target;
                void 0 !== g.amPM && e.target === g.amPM && (g.amPM.textContent = g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]);
                var a = parseFloat(n.getAttribute("min")),
                    r = parseFloat(n.getAttribute("max")),
                    l = parseFloat(n.getAttribute("step")),
                    c = parseInt(n.value, 10),
                    d = e.delta || (t ? 38 === e.which ? 1 : -1 : 0),
                    s = c + l * d;
                if (void 0 !== n.value && 2 === n.value.length) {
                    var u = n === g.hourElement,
                        f = n === g.minuteElement;
                    s < a ? (s = r + s + o(!u) + (o(u) && o(!g.amPM)), f && Y(void 0, -1, g.hourElement)) : s > r && (s = n === g.hourElement ? s - r - o(!g.amPM) : a, f && Y(void 0, 1, g.hourElement)), g.amPM && u && (1 === l ? s + c === 23 : Math.abs(s - c) > l) && (g.amPM.textContent = g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]), n.value = i(s)
                }
            }(e);
            var t = g._input.value;
            T(), ve(), g._input.value !== t && g._debouncedChange()
        }

        function T() {
            if (void 0 !== g.hourElement && void 0 !== g.minuteElement) {
                var e, t, n = (parseInt(g.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(g.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== g.secondElement ? (parseInt(g.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== g.amPM && (e = n, t = g.amPM.textContent, n = e % 12 + 12 * o(t === g.l10n.amPM[1]));
                var r = void 0 !== g.config.minTime || g.config.minDate && g.minDateHasTime && g.latestSelectedDateObj && 0 === w(g.latestSelectedDateObj, g.config.minDate, !0);
                if (void 0 !== g.config.maxTime || g.config.maxDate && g.maxDateHasTime && g.latestSelectedDateObj && 0 === w(g.latestSelectedDateObj, g.config.maxDate, !0)) {
                    var l = void 0 !== g.config.maxTime ? g.config.maxTime : g.config.maxDate;
                    (n = Math.min(n, l.getHours())) === l.getHours() && (a = Math.min(a, l.getMinutes())), a === l.getMinutes() && (i = Math.min(i, l.getSeconds()))
                }
                if (r) {
                    var c = void 0 !== g.config.minTime ? g.config.minTime : g.config.minDate;
                    (n = Math.max(n, c.getHours())) === c.getHours() && (a = Math.max(a, c.getMinutes())), a === c.getMinutes() && (i = Math.max(i, c.getSeconds()))
                }
                O(n, a, i)
            }
        }

        function k(e) {
            var t = e || g.latestSelectedDateObj;
            t && O(t.getHours(), t.getMinutes(), t.getSeconds())
        }

        function I() {
            var e = g.config.defaultHour,
                t = g.config.defaultMinute,
                n = g.config.defaultSeconds;
            if (void 0 !== g.config.minDate) {
                var a = g.config.minDate.getHours(),
                    i = g.config.minDate.getMinutes();
                (e = Math.max(e, a)) === a && (t = Math.max(i, t)), e === a && t === i && (n = g.config.minDate.getSeconds())
            }
            if (void 0 !== g.config.maxDate) {
                var o = g.config.maxDate.getHours(),
                    r = g.config.maxDate.getMinutes();
                (e = Math.min(e, o)) === o && (t = Math.min(r, t)), e === o && t === r && (n = g.config.maxDate.getSeconds())
            }
            O(e, t, n)
        }

        function O(e, t, n) {
            void 0 !== g.latestSelectedDateObj && g.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), g.hourElement && g.minuteElement && !g.isMobile && (g.hourElement.value = i(g.config.time_24hr ? e : (12 + e) % 12 + 12 * o(e % 12 == 0)), g.minuteElement.value = i(t), void 0 !== g.amPM && (g.amPM.textContent = g.l10n.amPM[o(e >= 12)]), void 0 !== g.secondElement && (g.secondElement.value = i(n)))
        }

        function S(e) {
            var t = parseInt(e.target.value) + (e.delta || 0);
            (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && V(t)
        }

        function _(e, t, n, a) {
            return t instanceof Array ? t.forEach(function(t) {
                return _(e, t, n, a)
            }) : e instanceof Array ? e.forEach(function(e) {
                return _(e, t, n, a)
            }) : (e.addEventListener(t, n, a), void g._handlers.push({
                element: e,
                event: t,
                handler: n,
                options: a
            }))
        }

        function N(e) {
            return function(t) {
                1 === t.which && e(t)
            }
        }

        function F() {
            fe("onChange")
        }

        function P(e) {
            var t = void 0 !== e ? g.parseDate(e) : g.latestSelectedDateObj || (g.config.minDate && g.config.minDate > g.now ? g.config.minDate : g.config.maxDate && g.config.maxDate < g.now ? g.config.maxDate : g.now);
            try {
                void 0 !== t && (g.currentYear = t.getFullYear(), g.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, g.config.errorHandler(e)
            }
            g.redraw()
        }

        function A(e) {
            ~e.target.className.indexOf("arrow") && Y(e, e.target.classList.contains("arrowUp") ? 1 : -1)
        }

        function Y(e, t, n) {
            var a = e && e.target,
                i = n || a && a.parentNode && a.parentNode.firstChild,
                o = me("increment");
            o.delta = t, i && i.dispatchEvent(o)
        }

        function j(e, t, n, a) {
            var i = Z(t, !0),
                o = d("span", "flatpickr-day " + e, t.getDate().toString());
            return o.dateObj = t, o.$i = a, o.setAttribute("aria-label", g.formatDate(t, g.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === w(t, g.now) && (g.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, ge(t) && (o.classList.add("selected"), g.selectedDateElem = o, "range" === g.config.mode && (c(o, "startRange", g.selectedDates[0] && 0 === w(t, g.selectedDates[0], !0)), c(o, "endRange", g.selectedDates[1] && 0 === w(t, g.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("disabled"), "range" === g.config.mode && function(e) {
                return !("range" !== g.config.mode || g.selectedDates.length < 2) && w(e, g.selectedDates[0]) >= 0 && w(e, g.selectedDates[1]) <= 0
            }(t) && !ge(t) && o.classList.add("inRange"), g.weekNumbers && 1 === g.config.showMonths && "prevMonthDay" !== e && n % 7 == 1 && g.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + g.config.getWeek(t) + "</span>"), fe("onDayCreate", o), o
        }

        function H(e) {
            e.focus(), "range" === g.config.mode && ee(e)
        }

        function L(e) {
            for (var t = e > 0 ? 0 : g.config.showMonths - 1, n = e > 0 ? g.config.showMonths : -1, a = t; a != n; a += e)
                for (var i = g.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                    var c = i.children[l];
                    if (-1 === c.className.indexOf("hidden") && Z(c.dateObj)) return c
                }
        }

        function W(e, t) {
            var n = Q(document.activeElement || document.body),
                a = void 0 !== e ? e : n ? document.activeElement : void 0 !== g.selectedDateElem && Q(g.selectedDateElem) ? g.selectedDateElem : void 0 !== g.todayDateElem && Q(g.todayDateElem) ? g.todayDateElem : L(t > 0 ? 1 : -1);
            return void 0 === a ? g._input.focus() : n ? void

            function(e, t) {
                for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : g.currentMonth, a = t > 0 ? g.config.showMonths : -1, i = t > 0 ? 1 : -1, o = n - g.currentMonth; o != a; o += i)
                    for (var r = g.daysContainer.children[o], l = n - g.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0, c = r.children.length, d = l; d >= 0 && d < c && d != (t > 0 ? c : -1); d += i) {
                        var s = r.children[d];
                        if (-1 === s.className.indexOf("hidden") && Z(s.dateObj) && Math.abs(e.$i - d) >= Math.abs(t)) return H(s)
                    }
                g.changeMonth(i), W(L(i), 0)
            }(a, t): H(a)
        }

        function R(e, t) {
            for (var n = (new Date(e, t, 1).getDay() - g.l10n.firstDayOfWeek + 7) % 7, a = g.utils.getDaysInMonth((t - 1 + 12) % 12), i = g.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = g.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - n, u = 0; s <= a; s++, u++) o.appendChild(j(l, new Date(e, t - 1, s), s, u));
            for (s = 1; s <= i; s++, u++) o.appendChild(j("", new Date(e, t, s), s, u));
            for (var f = i + 1; f <= 42 - n && (1 === g.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(j(c, new Date(e, t + 1, f % i), f, u));
            var m = d("div", "dayContainer");
            return m.appendChild(o), m
        }

        function B() {
            if (void 0 !== g.daysContainer) {
                s(g.daysContainer), g.weekNumbers && s(g.weekNumbers);
                for (var e = document.createDocumentFragment(), t = 0; t < g.config.showMonths; t++) {
                    var n = new Date(g.currentYear, g.currentMonth, 1);
                    n.setMonth(g.currentMonth + t), e.appendChild(R(n.getFullYear(), n.getMonth()))
                }
                g.daysContainer.appendChild(e), g.days = g.daysContainer.firstChild, "range" === g.config.mode && 1 === g.selectedDates.length && ee()
            }
        }

        function K() {
            var e = d("div", "flatpickr-month"),
                t = window.document.createDocumentFragment(),
                n = d("span", "cur-month"),
                a = u("cur-year", {
                    tabindex: "-1"
                }),
                i = a.getElementsByTagName("input")[0];
            i.setAttribute("aria-label", g.l10n.yearAriaLabel), g.config.minDate && i.setAttribute("min", g.config.minDate.getFullYear().toString()), g.config.maxDate && (i.setAttribute("max", g.config.maxDate.getFullYear().toString()), i.disabled = !!g.config.minDate && g.config.minDate.getFullYear() === g.config.maxDate.getFullYear());
            var o = d("div", "flatpickr-current-month");
            return o.appendChild(n), o.appendChild(a), t.appendChild(o), e.appendChild(t), {
                container: e,
                yearElement: i,
                monthElement: n
            }
        }

        function J() {
            s(g.monthNav), g.monthNav.appendChild(g.prevMonthNav), g.config.showMonths && (g.yearElements = [], g.monthElements = []);
            for (var e = g.config.showMonths; e--;) {
                var t = K();
                g.yearElements.push(t.yearElement), g.monthElements.push(t.monthElement), g.monthNav.appendChild(t.container)
            }
            g.monthNav.appendChild(g.nextMonthNav)
        }

        function U() {
            g.weekdayContainer ? s(g.weekdayContainer) : g.weekdayContainer = d("div", "flatpickr-weekdays");
            for (var e = g.config.showMonths; e--;) {
                var t = d("div", "flatpickr-weekdaycontainer");
                g.weekdayContainer.appendChild(t)
            }
            return q(), g.weekdayContainer
        }

        function q() {
            var e = g.l10n.firstDayOfWeek,
                t = g.l10n.weekdays.shorthand.slice();
            e > 0 && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
            for (var n = g.config.showMonths; n--;) g.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
        }

        function $(e, t) {
            void 0 === t && (t = !0);
            var n = t ? e : e - g.currentMonth;
            n < 0 && !0 === g._hidePrevMonthArrow || n > 0 && !0 === g._hideNextMonthArrow || (g.currentMonth += n, (g.currentMonth < 0 || g.currentMonth > 11) && (g.currentYear += g.currentMonth > 11 ? 1 : -1, g.currentMonth = (g.currentMonth + 12) % 12, fe("onYearChange")), B(), fe("onMonthChange"), pe())
        }

        function z(e) {
            return !(!g.config.appendTo || !g.config.appendTo.contains(e)) || g.calendarContainer.contains(e)
        }

        function G(e) {
            if (g.isOpen && !g.config.inline) {
                var t = "function" == typeof(r = e).composedPath ? r.composedPath()[0] : r.target,
                    n = z(t),
                    a = t === g.input || t === g.altInput || g.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(g.input) || ~e.path.indexOf(g.altInput)),
                    i = "blur" === e.type ? a && e.relatedTarget && !z(e.relatedTarget) : !a && !n && !z(e.relatedTarget),
                    o = !g.config.ignoredFocusElements.some(function(e) {
                        return e.contains(t)
                    });
                i && o && (g.close(), "range" === g.config.mode && 1 === g.selectedDates.length && (g.clear(!1), g.redraw()))
            }
            var r
        }

        function V(e) {
            if (!(!e || g.config.minDate && e < g.config.minDate.getFullYear() || g.config.maxDate && e > g.config.maxDate.getFullYear())) {
                var t = e,
                    n = g.currentYear !== t;
                g.currentYear = t || g.currentYear, g.config.maxDate && g.currentYear === g.config.maxDate.getFullYear() ? g.currentMonth = Math.min(g.config.maxDate.getMonth(), g.currentMonth) : g.config.minDate && g.currentYear === g.config.minDate.getFullYear() && (g.currentMonth = Math.max(g.config.minDate.getMonth(), g.currentMonth)), n && (g.redraw(), fe("onYearChange"))
            }
        }

        function Z(e, t) {
            void 0 === t && (t = !0);
            var n = g.parseDate(e, void 0, t);
            if (g.config.minDate && n && w(n, g.config.minDate, void 0 !== t ? t : !g.minDateHasTime) < 0 || g.config.maxDate && n && w(n, g.config.maxDate, void 0 !== t ? t : !g.maxDateHasTime) > 0) return !1;
            if (0 === g.config.enable.length && 0 === g.config.disable.length) return !0;
            if (void 0 === n) return !1;
            for (var a = g.config.enable.length > 0, i = a ? g.config.enable : g.config.disable, o = 0, r = void 0; o < i.length; o++) {
                if ("function" == typeof(r = i[o]) && r(n)) return a;
                if (r instanceof Date && void 0 !== n && r.getTime() === n.getTime()) return a;
                if ("string" == typeof r && void 0 !== n) {
                    var l = g.parseDate(r, void 0, !0);
                    return l && l.getTime() === n.getTime() ? a : !a
                }
                if ("object" == typeof r && void 0 !== n && r.from && r.to && n.getTime() >= r.from.getTime() && n.getTime() <= r.to.getTime()) return a
            }
            return !a
        }

        function Q(e) {
            return void 0 !== g.daysContainer && (-1 === e.className.indexOf("hidden") && g.daysContainer.contains(e))
        }

        function X(e) {
            var t = e.target === g._input,
                n = g.config.allowInput,
                a = g.isOpen && (!n || !t),
                i = g.config.inline && t && !n;
            if (13 === e.keyCode && t) {
                if (n) return g.setDate(g._input.value, !0, e.target === g.altInput ? g.config.altFormat : g.config.dateFormat), e.target.blur();
                g.open()
            } else if (z(e.target) || a || i) {
                var o = !!g.timeContainer && g.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        o ? (x(), le()) : ce(e);
                        break;
                    case 27:
                        e.preventDefault(), le();
                        break;
                    case 8:
                    case 46:
                        t && !g.config.allowInput && (e.preventDefault(), g.clear());
                        break;
                    case 37:
                    case 39:
                        if (o) g.hourElement && g.hourElement.focus();
                        else if (e.preventDefault(), void 0 !== g.daysContainer && (!1 === n || document.activeElement && Q(document.activeElement))) {
                            var r = 39 === e.keyCode ? 1 : -1;
                            e.ctrlKey ? (e.stopPropagation(), $(r), W(L(1), 0)) : W(void 0, r)
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var l = 40 === e.keyCode ? 1 : -1;
                        g.daysContainer && void 0 !== e.target.$i || e.target === g.input ? e.ctrlKey ? (e.stopPropagation(), V(g.currentYear - l), W(L(1), 0)) : o || W(void 0, 7 * l) : g.config.enableTime && (!o && g.hourElement && g.hourElement.focus(), x(e), g._debouncedChange());
                        break;
                    case 9:
                        if (o) {
                            var c = [g.hourElement, g.minuteElement, g.secondElement, g.amPM].filter(function(e) {
                                    return e
                                }),
                                d = c.indexOf(e.target);
                            if (-1 !== d) {
                                var s = c[d + (e.shiftKey ? -1 : 1)];
                                void 0 !== s ? (e.preventDefault(), s.focus()) : e.shiftKey && (e.preventDefault(), g._input.focus())
                            }
                        }
                }
            }
            if (void 0 !== g.amPM && e.target === g.amPM) switch (e.key) {
                case g.l10n.amPM[0].charAt(0):
                case g.l10n.amPM[0].charAt(0).toLowerCase():
                    g.amPM.textContent = g.l10n.amPM[0], T(), ve();
                    break;
                case g.l10n.amPM[1].charAt(0):
                case g.l10n.amPM[1].charAt(0).toLowerCase():
                    g.amPM.textContent = g.l10n.amPM[1], T(), ve()
            }
            fe("onKeyDown", e)
        }

        function ee(e) {
            if (1 === g.selectedDates.length && (!e || e.classList.contains("flatpickr-day") && !e.classList.contains("disabled"))) {
                for (var t = e ? e.dateObj.getTime() : g.days.firstElementChild.dateObj.getTime(), n = g.parseDate(g.selectedDates[0], void 0, !0).getTime(), a = Math.min(t, g.selectedDates[0].getTime()), i = Math.max(t, g.selectedDates[0].getTime()), o = g.daysContainer.lastChild.lastChild.dateObj.getTime(), r = !1, l = 0, c = 0, d = a; d < o; d += y.DAY) Z(new Date(d), !0) || (r = r || d > a && d < i, d < n && (!l || d > l) ? l = d : d > n && (!c || d < c) && (c = d));
                for (var s = 0; s < g.config.showMonths; s++)
                    for (var u = g.daysContainer.children[s], f = g.daysContainer.children[s - 1], m = function(a, i) {
                            var o = u.children[a],
                                d = o.dateObj.getTime(),
                                m = l > 0 && d < l || c > 0 && d > c;
                            return m ? (o.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(e) {
                                o.classList.remove(e)
                            }), "continue") : r && !m ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach(function(e) {
                                o.classList.remove(e)
                            }), void(void 0 !== e && (e.classList.add(t < g.selectedDates[0].getTime() ? "startRange" : "endRange"), !u.contains(e) && s > 0 && f && f.lastChild.dateObj.getTime() >= d || (n < t && d === n ? o.classList.add("startRange") : n > t && d === n && o.classList.add("endRange"), d >= l && (0 === c || d <= c) && b(d, n, t) && o.classList.add("inRange")))))
                        }, p = 0, h = u.children.length; p < h; p++) m(p)
            }
        }

        function te() {
            !g.isOpen || g.config.static || g.config.inline || oe()
        }

        function ne() {
            g.setDate(void 0 !== g.config.minDate ? new Date(g.config.minDate.getTime()) : new Date, !1), I(), ve()
        }

        function ae(e) {
            return function(t) {
                var n = g.config["_" + e + "Date"] = g.parseDate(t, g.config.dateFormat),
                    a = g.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== n && (g["min" === e ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0), g.selectedDates && (g.selectedDates = g.selectedDates.filter(function(e) {
                    return Z(e)
                }), g.selectedDates.length || "min" !== e || k(n), ve()), g.daysContainer && (re(), void 0 !== n ? g.currentYearElement[e] = n.getFullYear().toString() : g.currentYearElement.removeAttribute(e), g.currentYearElement.disabled = !!a && void 0 !== n && a.getFullYear() === n.getFullYear())
            }
        }

        function ie() {
            "object" != typeof g.config.locale && void 0 === E.l10ns[g.config.locale] && g.config.errorHandler(new Error("flatpickr: invalid locale " + g.config.locale)), g.l10n = e({}, E.l10ns.default, "object" == typeof g.config.locale ? g.config.locale : "default" !== g.config.locale ? E.l10ns[g.config.locale] : void 0), p.K = "(" + g.l10n.amPM[0] + "|" + g.l10n.amPM[1] + "|" + g.l10n.amPM[0].toLowerCase() + "|" + g.l10n.amPM[1].toLowerCase() + ")", g.formatDate = v(g), g.parseDate = D({
                config: g.config,
                l10n: g.l10n
            })
        }

        function oe(e) {
            if (void 0 !== g.calendarContainer) {
                fe("onPreCalendarPosition");
                var t = e || g._positionElement,
                    n = Array.prototype.reduce.call(g.calendarContainer.children, function(e, t) {
                        return e + t.offsetHeight
                    }, 0),
                    a = g.calendarContainer.offsetWidth,
                    i = g.config.position.split(" "),
                    o = i[0],
                    r = i.length > 1 ? i[1] : null,
                    l = t.getBoundingClientRect(),
                    d = window.innerHeight - l.bottom,
                    s = "above" === o || "below" !== o && d < n && l.top > n,
                    u = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
                if (c(g.calendarContainer, "arrowTop", !s), c(g.calendarContainer, "arrowBottom", s), !g.config.inline) {
                    var f = window.pageXOffset + l.left - (null != r && "center" === r ? (a - l.width) / 2 : 0),
                        m = window.document.body.offsetWidth - l.right,
                        p = f + a > window.document.body.offsetWidth,
                        h = m + a > window.document.body.offsetWidth;
                    if (c(g.calendarContainer, "rightMost", p), !g.config.static)
                        if (g.calendarContainer.style.top = u + "px", p)
                            if (h) {
                                var v = document.styleSheets[0];
                                if (void 0 === v) return;
                                var D = window.document.body.offsetWidth,
                                    w = Math.max(0, D / 2 - a / 2),
                                    b = v.cssRules.length,
                                    y = "{left:" + l.left + "px;right:auto;}";
                                c(g.calendarContainer, "rightMost", !1), c(g.calendarContainer, "centerMost", !0), v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, b), g.calendarContainer.style.left = w + "px", g.calendarContainer.style.right = "auto"
                            } else g.calendarContainer.style.left = "auto", g.calendarContainer.style.right = m + "px";
                    else g.calendarContainer.style.left = f + "px", g.calendarContainer.style.right = "auto"
                }
            }
        }

        function re() {
            g.config.noCalendar || g.isMobile || (pe(), B())
        }

        function le() {
            g._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(g.close, 0) : g.close()
        }

        function ce(e) {
            e.preventDefault(), e.stopPropagation();
            var t = function e(t, n) {
                return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0
            }(e.target, function(e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("disabled") && !e.classList.contains("notAllowed")
            });
            if (void 0 !== t) {
                var n = t,
                    a = g.latestSelectedDateObj = new Date(n.dateObj.getTime()),
                    i = (a.getMonth() < g.currentMonth || a.getMonth() > g.currentMonth + g.config.showMonths - 1) && "range" !== g.config.mode;
                if (g.selectedDateElem = n, "single" === g.config.mode) g.selectedDates = [a];
                else if ("multiple" === g.config.mode) {
                    var o = ge(a);
                    o ? g.selectedDates.splice(parseInt(o), 1) : g.selectedDates.push(a)
                } else "range" === g.config.mode && (2 === g.selectedDates.length && g.clear(!1, !1), g.latestSelectedDateObj = a, g.selectedDates.push(a), 0 !== w(a, g.selectedDates[0], !0) && g.selectedDates.sort(function(e, t) {
                    return e.getTime() - t.getTime()
                }));
                if (T(), i) {
                    var r = g.currentYear !== a.getFullYear();
                    g.currentYear = a.getFullYear(), g.currentMonth = a.getMonth(), r && fe("onYearChange"), fe("onMonthChange")
                }
                if (pe(), B(), ve(), g.config.enableTime && setTimeout(function() {
                        return g.showTimeInput = !0
                    }, 50), i || "range" === g.config.mode || 1 !== g.config.showMonths ? void 0 !== g.selectedDateElem && void 0 === g.hourElement && g.selectedDateElem && g.selectedDateElem.focus() : H(n), void 0 !== g.hourElement && void 0 !== g.hourElement && g.hourElement.focus(), g.config.closeOnSelect) {
                    var l = "single" === g.config.mode && !g.config.enableTime,
                        c = "range" === g.config.mode && 2 === g.selectedDates.length && !g.config.enableTime;
                    (l || c) && le()
                }
                F()
            }
        }
        g.parseDate = D({
            config: g.config,
            l10n: g.l10n
        }), g._handlers = [], g._bind = _, g._setHoursFromDate = k, g._positionCalendar = oe, g.changeMonth = $, g.changeYear = V, g.clear = function(e, t) {
            void 0 === e && (e = !0);
            void 0 === t && (t = !0);
            g.input.value = "", void 0 !== g.altInput && (g.altInput.value = "");
            void 0 !== g.mobileInput && (g.mobileInput.value = "");
            g.selectedDates = [], g.latestSelectedDateObj = void 0, !0 === t && (g.currentYear = g._initialDate.getFullYear(), g.currentMonth = g._initialDate.getMonth());
            g.showTimeInput = !1, !0 === g.config.enableTime && I();
            g.redraw(), e && fe("onChange")
        }, g.close = function() {
            g.isOpen = !1, g.isMobile || (void 0 !== g.calendarContainer && g.calendarContainer.classList.remove("open"), void 0 !== g._input && g._input.classList.remove("active"));
            fe("onClose")
        }, g._createElement = d, g.destroy = function() {
            void 0 !== g.config && fe("onDestroy");
            for (var e = g._handlers.length; e--;) {
                var t = g._handlers[e];
                t.element.removeEventListener(t.event, t.handler, t.options)
            }
            if (g._handlers = [], g.mobileInput) g.mobileInput.parentNode && g.mobileInput.parentNode.removeChild(g.mobileInput), g.mobileInput = void 0;
            else if (g.calendarContainer && g.calendarContainer.parentNode)
                if (g.config.static && g.calendarContainer.parentNode) {
                    var n = g.calendarContainer.parentNode;
                    if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                        for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                        n.parentNode.removeChild(n)
                    }
                } else g.calendarContainer.parentNode.removeChild(g.calendarContainer);
            g.altInput && (g.input.type = "text", g.altInput.parentNode && g.altInput.parentNode.removeChild(g.altInput), delete g.altInput);
            g.input && (g.input.type = g.input._type, g.input.classList.remove("flatpickr-input"), g.input.removeAttribute("readonly"), g.input.value = "");
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(e) {
                try {
                    delete g[e]
                } catch (e) {}
            })
        }, g.isEnabled = Z, g.jumpToDate = P, g.open = function(e, t) {
            void 0 === t && (t = g._positionElement);
            if (!0 === g.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()), void 0 !== g.mobileInput && (g.mobileInput.focus(), g.mobileInput.click()), void fe("onOpen");
            if (g._input.disabled || g.config.inline) return;
            var n = g.isOpen;
            g.isOpen = !0, n || (g.calendarContainer.classList.add("open"), g._input.classList.add("active"), fe("onOpen"), oe(t));
            !0 === g.config.enableTime && !0 === g.config.noCalendar && (0 === g.selectedDates.length && ne(), !1 !== g.config.allowInput || void 0 !== e && g.timeContainer.contains(e.relatedTarget) || setTimeout(function() {
                return g.hourElement.select()
            }, 50))
        }, g.redraw = re, g.set = function(e, n) {
            null !== e && "object" == typeof e ? Object.assign(g.config, e) : (g.config[e] = n, void 0 !== de[e] ? de[e].forEach(function(e) {
                return e()
            }) : t.indexOf(e) > -1 && (g.config[e] = l(n)));
            g.redraw(), ve(!1)
        }, g.setDate = function(e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = g.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return g.clear(t);
            se(e, n), g.showTimeInput = g.selectedDates.length > 0, g.latestSelectedDateObj = g.selectedDates[0], g.redraw(), P(), k(), ve(t), t && fe("onChange")
        }, g.toggle = function(e) {
            if (!0 === g.isOpen) return g.close();
            g.open(e)
        };
        var de = {
            locale: [ie, q],
            showMonths: [J, M, U]
        };

        function se(e, t) {
            var n = [];
            if (e instanceof Array) n = e.map(function(e) {
                return g.parseDate(e, t)
            });
            else if (e instanceof Date || "number" == typeof e) n = [g.parseDate(e, t)];
            else if ("string" == typeof e) switch (g.config.mode) {
                case "single":
                case "time":
                    n = [g.parseDate(e, t)];
                    break;
                case "multiple":
                    n = e.split(g.config.conjunction).map(function(e) {
                        return g.parseDate(e, t)
                    });
                    break;
                case "range":
                    n = e.split(g.l10n.rangeSeparator).map(function(e) {
                        return g.parseDate(e, t)
                    })
            } else g.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            g.selectedDates = n.filter(function(e) {
                return e instanceof Date && Z(e, !1)
            }), "range" === g.config.mode && g.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime()
            })
        }

        function ue(e) {
            return e.slice().map(function(e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? g.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: g.parseDate(e.from, void 0),
                    to: g.parseDate(e.to, void 0)
                } : e
            }).filter(function(e) {
                return e
            })
        }

        function fe(e, t) {
            if (void 0 !== g.config) {
                var n = g.config[e];
                if (void 0 !== n && n.length > 0)
                    for (var a = 0; n[a] && a < n.length; a++) n[a](g.selectedDates, g.input.value, g, t);
                "onChange" === e && (g.input.dispatchEvent(me("change")), g.input.dispatchEvent(me("input")))
            }
        }

        function me(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        }

        function ge(e) {
            for (var t = 0; t < g.selectedDates.length; t++)
                if (0 === w(g.selectedDates[t], e)) return "" + t;
            return !1
        }

        function pe() {
            g.config.noCalendar || g.isMobile || !g.monthNav || (g.yearElements.forEach(function(e, t) {
                var n = new Date(g.currentYear, g.currentMonth, 1);
                n.setMonth(g.currentMonth + t), g.monthElements[t].textContent = m(n.getMonth(), g.config.shorthandCurrentMonth, g.l10n) + " ", e.value = n.getFullYear().toString()
            }), g._hidePrevMonthArrow = void 0 !== g.config.minDate && (g.currentYear === g.config.minDate.getFullYear() ? g.currentMonth <= g.config.minDate.getMonth() : g.currentYear < g.config.minDate.getFullYear()), g._hideNextMonthArrow = void 0 !== g.config.maxDate && (g.currentYear === g.config.maxDate.getFullYear() ? g.currentMonth + 1 > g.config.maxDate.getMonth() : g.currentYear > g.config.maxDate.getFullYear()))
        }

        function he(e) {
            return g.selectedDates.map(function(t) {
                return g.formatDate(t, e)
            }).filter(function(e, t, n) {
                return "range" !== g.config.mode || g.config.enableTime || n.indexOf(e) === t
            }).join("range" !== g.config.mode ? g.config.conjunction : g.l10n.rangeSeparator)
        }

        function ve(e) {
            if (void 0 === e && (e = !0), 0 === g.selectedDates.length) return g.clear(e);
            void 0 !== g.mobileInput && g.mobileFormatStr && (g.mobileInput.value = void 0 !== g.latestSelectedDateObj ? g.formatDate(g.latestSelectedDateObj, g.mobileFormatStr) : ""), g.input.value = he(g.config.dateFormat), void 0 !== g.altInput && (g.altInput.value = he(g.config.altFormat)), !1 !== e && fe("onValueUpdate")
        }

        function De(e) {
            e.preventDefault();
            var t = g.prevMonthNav.contains(e.target),
                n = g.nextMonthNav.contains(e.target);
            t || n ? $(t ? -1 : 1) : g.yearElements.indexOf(e.target) >= 0 ? e.target.select() : e.target.classList.contains("arrowUp") ? g.changeYear(g.currentYear + 1) : e.target.classList.contains("arrowDown") && g.changeYear(g.currentYear - 1)
        }
        return function() {
            g.element = g.input = n, g.isOpen = !1,
                function() {
                    var a = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                        i = e({}, f, JSON.parse(JSON.stringify(n.dataset || {}))),
                        o = {};
                    g.config.parseDate = i.parseDate, g.config.formatDate = i.formatDate, Object.defineProperty(g.config, "enable", {
                        get: function() {
                            return g.config._enable
                        },
                        set: function(e) {
                            g.config._enable = ue(e)
                        }
                    }), Object.defineProperty(g.config, "disable", {
                        get: function() {
                            return g.config._disable
                        },
                        set: function(e) {
                            g.config._disable = ue(e)
                        }
                    });
                    var r = "time" === i.mode;
                    i.dateFormat || !i.enableTime && !r || (o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : E.defaultConfig.dateFormat + " H:i" + (i.enableSeconds ? ":S" : "")), i.altInput && (i.enableTime || r) && !i.altFormat && (o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : E.defaultConfig.altFormat + " h:i" + (i.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(g.config, "minDate", {
                        get: function() {
                            return g.config._minDate
                        },
                        set: ae("min")
                    }), Object.defineProperty(g.config, "maxDate", {
                        get: function() {
                            return g.config._maxDate
                        },
                        set: ae("max")
                    });
                    var c = function(e) {
                        return function(t) {
                            g.config["min" === e ? "_minTime" : "_maxTime"] = g.parseDate(t, "H:i")
                        }
                    };
                    Object.defineProperty(g.config, "minTime", {
                        get: function() {
                            return g.config._minTime
                        },
                        set: c("min")
                    }), Object.defineProperty(g.config, "maxTime", {
                        get: function() {
                            return g.config._maxTime
                        },
                        set: c("max")
                    }), "time" === i.mode && (g.config.noCalendar = !0, g.config.enableTime = !0), Object.assign(g.config, o, i);
                    for (var d = 0; d < a.length; d++) g.config[a[d]] = !0 === g.config[a[d]] || "true" === g.config[a[d]];
                    t.filter(function(e) {
                        return void 0 !== g.config[e]
                    }).forEach(function(e) {
                        g.config[e] = l(g.config[e] || []).map(h)
                    }), g.isMobile = !g.config.disableMobile && !g.config.inline && "single" === g.config.mode && !g.config.disable.length && !g.config.enable.length && !g.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (var d = 0; d < g.config.plugins.length; d++) {
                        var s = g.config.plugins[d](g) || {};
                        for (var u in s) t.indexOf(u) > -1 ? g.config[u] = l(s[u]).map(h).concat(g.config[u]) : void 0 === i[u] && (g.config[u] = s[u])
                    }
                    fe("onParseConfig")
                }(), ie(), g.input = g.config.wrap ? n.querySelector("[data-input]") : n, g.input ? (g.input._type = g.input.type, g.input.type = "text", g.input.classList.add("flatpickr-input"), g._input = g.input, g.config.altInput && (g.altInput = d(g.input.nodeName, g.input.className + " " + g.config.altInputClass), g._input = g.altInput, g.altInput.placeholder = g.input.placeholder, g.altInput.disabled = g.input.disabled, g.altInput.required = g.input.required, g.altInput.tabIndex = g.input.tabIndex, g.altInput.type = "text", g.input.setAttribute("type", "hidden"), !g.config.static && g.input.parentNode && g.input.parentNode.insertBefore(g.altInput, g.input.nextSibling)), g.config.allowInput || g._input.setAttribute("readonly", "readonly"), g._positionElement = g.config.positionElement || g._input) : g.config.errorHandler(new Error("Invalid input element specified")),
                function() {
                    g.selectedDates = [], g.now = g.parseDate(g.config.now) || new Date;
                    var e = g.config.defaultDate || ("INPUT" !== g.input.nodeName && "TEXTAREA" !== g.input.nodeName || !g.input.placeholder || g.input.value !== g.input.placeholder ? g.input.value : null);
                    e && se(e, g.config.dateFormat), g._initialDate = g.selectedDates.length > 0 ? g.selectedDates[0] : g.config.minDate && g.config.minDate.getTime() > g.now.getTime() ? g.config.minDate : g.config.maxDate && g.config.maxDate.getTime() < g.now.getTime() ? g.config.maxDate : g.now, g.currentYear = g._initialDate.getFullYear(), g.currentMonth = g._initialDate.getMonth(), g.selectedDates.length > 0 && (g.latestSelectedDateObj = g.selectedDates[0]), void 0 !== g.config.minTime && (g.config.minTime = g.parseDate(g.config.minTime, "H:i")), void 0 !== g.config.maxTime && (g.config.maxTime = g.parseDate(g.config.maxTime, "H:i")), g.minDateHasTime = !!g.config.minDate && (g.config.minDate.getHours() > 0 || g.config.minDate.getMinutes() > 0 || g.config.minDate.getSeconds() > 0), g.maxDateHasTime = !!g.config.maxDate && (g.config.maxDate.getHours() > 0 || g.config.maxDate.getMinutes() > 0 || g.config.maxDate.getSeconds() > 0), Object.defineProperty(g, "showTimeInput", {
                        get: function() {
                            return g._showTimeInput
                        },
                        set: function(e) {
                            g._showTimeInput = e, g.calendarContainer && c(g.calendarContainer, "showTimeInput", e), g.isOpen && oe()
                        }
                    })
                }(), g.utils = {
                    getDaysInMonth: function(e, t) {
                        return void 0 === e && (e = g.currentMonth), void 0 === t && (t = g.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : g.l10n.daysInMonth[e]
                    }
                }, g.isMobile || function() {
                    var e = window.document.createDocumentFragment();
                    if (g.calendarContainer = d("div", "flatpickr-calendar"), g.calendarContainer.tabIndex = -1, !g.config.noCalendar) {
                        if (e.appendChild((g.monthNav = d("div", "flatpickr-months"), g.yearElements = [], g.monthElements = [], g.prevMonthNav = d("span", "flatpickr-prev-month"), g.prevMonthNav.innerHTML = g.config.prevArrow, g.nextMonthNav = d("span", "flatpickr-next-month"), g.nextMonthNav.innerHTML = g.config.nextArrow, J(), Object.defineProperty(g, "_hidePrevMonthArrow", {
                                get: function() {
                                    return g.__hidePrevMonthArrow
                                },
                                set: function(e) {
                                    g.__hidePrevMonthArrow !== e && (c(g.prevMonthNav, "disabled", e), g.__hidePrevMonthArrow = e)
                                }
                            }), Object.defineProperty(g, "_hideNextMonthArrow", {
                                get: function() {
                                    return g.__hideNextMonthArrow
                                },
                                set: function(e) {
                                    g.__hideNextMonthArrow !== e && (c(g.nextMonthNav, "disabled", e), g.__hideNextMonthArrow = e)
                                }
                            }), g.currentYearElement = g.yearElements[0], pe(), g.monthNav)), g.innerContainer = d("div", "flatpickr-innerContainer"), g.config.weekNumbers) {
                            var t = function() {
                                    g.calendarContainer.classList.add("hasWeeks");
                                    var e = d("div", "flatpickr-weekwrapper");
                                    e.appendChild(d("span", "flatpickr-weekday", g.l10n.weekAbbreviation));
                                    var t = d("div", "flatpickr-weeks");
                                    return e.appendChild(t), {
                                        weekWrapper: e,
                                        weekNumbers: t
                                    }
                                }(),
                                n = t.weekWrapper,
                                a = t.weekNumbers;
                            g.innerContainer.appendChild(n), g.weekNumbers = a, g.weekWrapper = n
                        }
                        g.rContainer = d("div", "flatpickr-rContainer"), g.rContainer.appendChild(U()), g.daysContainer || (g.daysContainer = d("div", "flatpickr-days"), g.daysContainer.tabIndex = -1), B(), g.rContainer.appendChild(g.daysContainer), g.innerContainer.appendChild(g.rContainer), e.appendChild(g.innerContainer)
                    }
                    g.config.enableTime && e.appendChild(function() {
                        g.calendarContainer.classList.add("hasTime"), g.config.noCalendar && g.calendarContainer.classList.add("noCalendar"), g.timeContainer = d("div", "flatpickr-time"), g.timeContainer.tabIndex = -1;
                        var e = d("span", "flatpickr-time-separator", ":"),
                            t = u("flatpickr-hour");
                        g.hourElement = t.getElementsByTagName("input")[0];
                        var n = u("flatpickr-minute");
                        if (g.minuteElement = n.getElementsByTagName("input")[0], g.hourElement.tabIndex = g.minuteElement.tabIndex = -1, g.hourElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getHours() : g.config.time_24hr ? g.config.defaultHour : function(e) {
                                switch (e % 24) {
                                    case 0:
                                    case 12:
                                        return 12;
                                    default:
                                        return e % 12
                                }
                            }(g.config.defaultHour)), g.minuteElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getMinutes() : g.config.defaultMinute), g.hourElement.setAttribute("step", g.config.hourIncrement.toString()), g.minuteElement.setAttribute("step", g.config.minuteIncrement.toString()), g.hourElement.setAttribute("min", g.config.time_24hr ? "0" : "1"), g.hourElement.setAttribute("max", g.config.time_24hr ? "23" : "12"), g.minuteElement.setAttribute("min", "0"), g.minuteElement.setAttribute("max", "59"), g.timeContainer.appendChild(t), g.timeContainer.appendChild(e), g.timeContainer.appendChild(n), g.config.time_24hr && g.timeContainer.classList.add("time24hr"), g.config.enableSeconds) {
                            g.timeContainer.classList.add("hasSeconds");
                            var a = u("flatpickr-second");
                            g.secondElement = a.getElementsByTagName("input")[0], g.secondElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getSeconds() : g.config.defaultSeconds), g.secondElement.setAttribute("step", g.minuteElement.getAttribute("step")), g.secondElement.setAttribute("min", "0"), g.secondElement.setAttribute("max", "59"), g.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), g.timeContainer.appendChild(a)
                        }
                        return g.config.time_24hr || (g.amPM = d("span", "flatpickr-am-pm", g.l10n.amPM[o((g.latestSelectedDateObj ? g.hourElement.value : g.config.defaultHour) > 11)]), g.amPM.title = g.l10n.toggleTitle, g.amPM.tabIndex = -1, g.timeContainer.appendChild(g.amPM)), g.timeContainer
                    }()), c(g.calendarContainer, "rangeMode", "range" === g.config.mode), c(g.calendarContainer, "animate", !0 === g.config.animate), c(g.calendarContainer, "multiMonth", g.config.showMonths > 1), g.calendarContainer.appendChild(e);
                    var r = void 0 !== g.config.appendTo && void 0 !== g.config.appendTo.nodeType;
                    if ((g.config.inline || g.config.static) && (g.calendarContainer.classList.add(g.config.inline ? "inline" : "static"), g.config.inline && (!r && g.element.parentNode ? g.element.parentNode.insertBefore(g.calendarContainer, g._input.nextSibling) : void 0 !== g.config.appendTo && g.config.appendTo.appendChild(g.calendarContainer)), g.config.static)) {
                        var l = d("div", "flatpickr-wrapper");
                        g.element.parentNode && g.element.parentNode.insertBefore(l, g.element), l.appendChild(g.element), g.altInput && l.appendChild(g.altInput), l.appendChild(g.calendarContainer)
                    }
                    g.config.static || g.config.inline || (void 0 !== g.config.appendTo ? g.config.appendTo : window.document.body).appendChild(g.calendarContainer)
                }(),
                function() {
                    if (g.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(e) {
                            Array.prototype.forEach.call(g.element.querySelectorAll("[data-" + e + "]"), function(t) {
                                return _(t, "click", g[e])
                            })
                        }), g.isMobile) ! function() {
                        var e = g.config.enableTime ? g.config.noCalendar ? "time" : "datetime-local" : "date";
                        g.mobileInput = d("input", g.input.className + " flatpickr-mobile"), g.mobileInput.step = g.input.getAttribute("step") || "any", g.mobileInput.tabIndex = 1, g.mobileInput.type = e, g.mobileInput.disabled = g.input.disabled, g.mobileInput.required = g.input.required, g.mobileInput.placeholder = g.input.placeholder, g.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", g.selectedDates.length > 0 && (g.mobileInput.defaultValue = g.mobileInput.value = g.formatDate(g.selectedDates[0], g.mobileFormatStr)), g.config.minDate && (g.mobileInput.min = g.formatDate(g.config.minDate, "Y-m-d")), g.config.maxDate && (g.mobileInput.max = g.formatDate(g.config.maxDate, "Y-m-d")), g.input.type = "hidden", void 0 !== g.altInput && (g.altInput.type = "hidden");
                        try {
                            g.input.parentNode && g.input.parentNode.insertBefore(g.mobileInput, g.input.nextSibling)
                        } catch (e) {}
                        _(g.mobileInput, "change", function(e) {
                            g.setDate(e.target.value, !1, g.mobileFormatStr), fe("onChange"), fe("onClose")
                        })
                    }();
                    else {
                        var e = r(te, 50);
                        g._debouncedChange = r(F, C), g.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && _(g.daysContainer, "mouseover", function(e) {
                            "range" === g.config.mode && ee(e.target)
                        }), _(window.document.body, "keydown", X), g.config.static || _(g._input, "keydown", X), g.config.inline || g.config.static || _(window, "resize", e), void 0 !== window.ontouchstart ? _(window.document, "click", G) : _(window.document, "mousedown", N(G)), _(window.document, "focus", G, {
                            capture: !0
                        }), !0 === g.config.clickOpens && (_(g._input, "focus", g.open), _(g._input, "mousedown", N(g.open))), void 0 !== g.daysContainer && (_(g.monthNav, "mousedown", N(De)), _(g.monthNav, ["keyup", "increment"], S), _(g.daysContainer, "mousedown", N(ce))), void 0 !== g.timeContainer && void 0 !== g.minuteElement && void 0 !== g.hourElement && (_(g.timeContainer, ["increment"], x), _(g.timeContainer, "blur", x, {
                            capture: !0
                        }), _(g.timeContainer, "mousedown", N(A)), _([g.hourElement, g.minuteElement], ["focus", "click"], function(e) {
                            return e.target.select()
                        }), void 0 !== g.secondElement && _(g.secondElement, "focus", function() {
                            return g.secondElement && g.secondElement.select()
                        }), void 0 !== g.amPM && _(g.amPM, "mousedown", N(function(e) {
                            x(e), F()
                        })))
                    }
                }(), (g.selectedDates.length || g.config.noCalendar) && (g.config.enableTime && k(g.config.noCalendar ? g.latestSelectedDateObj || g.config.minDate : void 0), ve(!1)), M(), g.showTimeInput = g.selectedDates.length > 0 || g.config.noCalendar;
            var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !g.isMobile && a && oe(), fe("onReady")
        }(), g
    }

    function x(e, t) {
        for (var n = Array.prototype.slice.call(e).filter(function(e) {
                return e instanceof HTMLElement
            }), a = [], i = 0; i < n.length; i++) {
            var o = n[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = M(o, t || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }
    "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
        return x(this, e)
    }, HTMLElement.prototype.flatpickr = function(e) {
        return x([this], e)
    });
    var E = function(e, t) {
        return "string" == typeof e ? x(window.document.querySelectorAll(e), t) : e instanceof Node ? x([e], t) : x(e, t)
    };
    return E.defaultConfig = n, E.l10ns = {
        en: e({}, a),
        default: e({}, a)
    }, E.localize = function(t) {
        E.l10ns.default = e({}, E.l10ns.default, t)
    }, E.setDefaults = function(t) {
        E.defaultConfig = e({}, E.defaultConfig, t)
    }, E.parseDate = D({}), E.formatDate = v({}), E.compareDates = w, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function(e) {
        return x(this, e)
    }), Date.prototype.fp_incr = function(e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = E), E
});

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;
(function(factory) {
    var registeredInModuleLoader = false;
    if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
    }
    if (typeof exports === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function() {
            window.Cookies = OldCookies;
            return api;
        };
    }
}(function() {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (typeof document === 'undefined') {
                return;
            }

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                // We're using "expires" because "max-age" is not supported by IE
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                var stringifiedAttributes = '';

                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }
                    stringifiedAttributes += '=' + attributes[attributeName];
                }
                return (document.cookie = key + '=' + value + stringifiedAttributes);
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                        cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {}
            }

            return result;
        }

        api.set = api;
        api.get = function(key) {
            return api.call(api, key);
        };
        api.getJSON = function() {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function(key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function() {});
}));

/*
 *  Remodal - v1.1.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(c) { return b(a, c) }) : "object" == typeof exports ? b(a, require("jquery")) : b(a, a.jQuery || a.Zepto) }(this, function(a, b) {
    "use strict";

    function c(a) {
        if (w && "none" === a.css("animation-name") && "none" === a.css("-webkit-animation-name") && "none" === a.css("-moz-animation-name") && "none" === a.css("-o-animation-name") && "none" === a.css("-ms-animation-name")) return 0;
        var b, c, d, e, f = a.css("animation-duration") || a.css("-webkit-animation-duration") || a.css("-moz-animation-duration") || a.css("-o-animation-duration") || a.css("-ms-animation-duration") || "0s",
            g = a.css("animation-delay") || a.css("-webkit-animation-delay") || a.css("-moz-animation-delay") || a.css("-o-animation-delay") || a.css("-ms-animation-delay") || "0s",
            h = a.css("animation-iteration-count") || a.css("-webkit-animation-iteration-count") || a.css("-moz-animation-iteration-count") || a.css("-o-animation-iteration-count") || a.css("-ms-animation-iteration-count") || "1";
        for (f = f.split(", "), g = g.split(", "), h = h.split(", "), e = 0, c = f.length, b = Number.NEGATIVE_INFINITY; e < c; e++) d = parseFloat(f[e]) * parseInt(h[e], 10) + parseFloat(g[e]), d > b && (b = d);
        return b
    }

    function d() {
        if (b(document).height() <= b(window).height()) return 0;
        var a, c, d = document.createElement("div"),
            e = document.createElement("div");
        return d.style.visibility = "hidden", d.style.width = "100px", document.body.appendChild(d), a = d.offsetWidth, d.style.overflow = "scroll", e.style.width = "100%", d.appendChild(e), c = e.offsetWidth, d.parentNode.removeChild(d), a - c
    }

    function e() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) || (c = b(document.body), a = parseInt(c.css("padding-right"), 10) + d(), c.css("padding-right", a + "px"), e.addClass(f))
        }
    }

    function f() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) && (c = b(document.body), a = parseInt(c.css("padding-right"), 10) - d(), c.css("padding-right", a + "px"), e.removeClass(f))
        }
    }

    function g(a, b, c, d) {
        var e = k("is", b),
            f = [k("is", u.CLOSING), k("is", u.OPENING), k("is", u.CLOSED), k("is", u.OPENED)].join(" ");
        a.$bg.removeClass(f).addClass(e), a.$overlay.removeClass(f).addClass(e), a.$wrapper.removeClass(f).addClass(e), a.$modal.removeClass(f).addClass(e), a.state = b, !c && a.$modal.trigger({ type: b, reason: d }, [{ reason: d }])
    }

    function h(a, d, e) {
        var f = 0,
            g = function(a) { a.target === this && f++ },
            h = function(a) { a.target === this && 0 === --f && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) { e[b].off(r + " " + s) }), d()) };
        b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) { e[b].on(r, g).on(s, h) }), a(), 0 === c(e.$bg) && 0 === c(e.$overlay) && 0 === c(e.$wrapper) && 0 === c(e.$modal) && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) { e[b].off(r + " " + s) }), d())
    }

    function i(a) { a.state !== u.CLOSED && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(b, c) { a[c].off(r + " " + s) }), a.$bg.removeClass(a.settings.modifier), a.$overlay.removeClass(a.settings.modifier).hide(), a.$wrapper.hide(), f(), g(a, u.CLOSED, !0)) }

    function j(a) { var b, c, d, e, f = {}; for (a = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), b = a.split(","), e = 0, c = b.length; e < c; e++) b[e] = b[e].split(":"), d = b[e][1], ("string" == typeof d || d instanceof String) && (d = "true" === d || "false" !== d && d), ("string" == typeof d || d instanceof String) && (d = isNaN(d) ? d : +d), f[b[e][0]] = d; return f }

    function k() { for (var a = q, b = 0; b < arguments.length; ++b) a += "-" + arguments[b]; return a }

    function l() {
        var a, c, d = location.hash.replace("#", "");
        if (d) {
            try { c = b('[data-remodal-id="' + d + '"]') } catch (e) {}
            c && c.length && (a = b[p].lookup[c.data(p)], a && a.settings.hashTracking && a.open())
        } else n && n.state === u.OPENED && n.settings.hashTracking && n.close()
    }

    function m(a, c) {
        var d = b(document.body),
            e = d,
            f = this;
        f.settings = b.extend({}, t, c), f.index = b[p].lookup.push(f) - 1, f.state = u.CLOSED, f.$overlay = b("." + k("overlay")), null !== f.settings.appendTo && f.settings.appendTo.length && (e = b(f.settings.appendTo)), f.$overlay.length || (f.$overlay = b("<div>").addClass(k("overlay") + " " + k("is", u.CLOSED)).hide(), e.append(f.$overlay)), f.$bg = b("." + k("bg")).addClass(k("is", u.CLOSED)), f.$modal = a.addClass(q + " " + k("is-initialized") + " " + f.settings.modifier + " " + k("is", u.CLOSED)).attr("tabindex", "-1"), f.$wrapper = b("<div>").addClass(k("wrapper") + " " + f.settings.modifier + " " + k("is", u.CLOSED)).hide().append(f.$modal), e.append(f.$wrapper), f.$wrapper.on("click." + q, '[data-remodal-action="close"]', function(a) { a.preventDefault(), f.close() }), f.$wrapper.on("click." + q, '[data-remodal-action="cancel"]', function(a) { a.preventDefault(), f.$modal.trigger(v.CANCELLATION), f.settings.closeOnCancel && f.close(v.CANCELLATION) }), f.$wrapper.on("click." + q, '[data-remodal-action="confirm"]', function(a) { a.preventDefault(), f.$modal.trigger(v.CONFIRMATION), f.settings.closeOnConfirm && f.close(v.CONFIRMATION) }), f.$wrapper.on("click." + q, function(a) {
            var c = b(a.target);
            c.hasClass(k("wrapper")) && f.settings.closeOnOutsideClick && f.close()
        })
    }
    var n, o, p = "remodal",
        q = a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.NAMESPACE || p,
        r = b.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(a) { return a + "." + q }).join(" "),
        s = b.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(a) { return a + "." + q }).join(" "),
        t = b.extend({ hashTracking: !0, closeOnConfirm: !0, closeOnCancel: !0, closeOnEscape: !0, closeOnOutsideClick: !0, modifier: "", appendTo: null }, a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.DEFAULTS),
        u = { CLOSING: "closing", CLOSED: "closed", OPENING: "opening", OPENED: "opened" },
        v = { CONFIRMATION: "confirmation", CANCELLATION: "cancellation" },
        w = function() { var a = document.createElement("div").style; return void 0 !== a.animationName || void 0 !== a.WebkitAnimationName || void 0 !== a.MozAnimationName || void 0 !== a.msAnimationName || void 0 !== a.OAnimationName }(),
        x = /iPad|iPhone|iPod/.test(navigator.platform);
    m.prototype.open = function() {
        var a, c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && (a = c.$modal.attr("data-remodal-id"), a && c.settings.hashTracking && (o = b(window).scrollTop(), location.hash = a), n && n !== c && i(n), n = c, e(), c.$bg.addClass(c.settings.modifier), c.$overlay.addClass(c.settings.modifier).show(), c.$wrapper.show().scrollTop(0), c.$modal.focus(), h(function() { g(c, u.OPENING) }, function() { g(c, u.OPENED) }, c))
    }, m.prototype.close = function(a) {
        var c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && c.state !== u.CLOSED && (c.settings.hashTracking && c.$modal.attr("data-remodal-id") === location.hash.substr(1) && (location.hash = "", b(window).scrollTop(o)), h(function() { g(c, u.CLOSING, !1, a) }, function() { c.$bg.removeClass(c.settings.modifier), c.$overlay.removeClass(c.settings.modifier).hide(), c.$wrapper.hide(), f(), g(c, u.CLOSED, !1, a) }, c))
    }, m.prototype.getState = function() { return this.state }, m.prototype.destroy = function() {
        var a, c = b[p].lookup;
        i(this), this.$wrapper.remove(), delete c[this.index], a = b.grep(c, function(a) { return !!a }).length, 0 === a && (this.$overlay.remove(), this.$bg.removeClass(k("is", u.CLOSING) + " " + k("is", u.OPENING) + " " + k("is", u.CLOSED) + " " + k("is", u.OPENED)))
    }, b[p] = { lookup: [] }, b.fn[p] = function(a) { var c, d; return this.each(function(e, f) { d = b(f), null == d.data(p) ? (c = new m(d, a), d.data(p, c.index), c.settings.hashTracking && d.attr("data-remodal-id") === location.hash.substr(1) && c.open()) : c = b[p].lookup[d.data(p)] }), c }, b(document).ready(function() {
        b(document).on("click", "[data-remodal-target]", function(a) {
            a.preventDefault();
            var c = a.currentTarget,
                d = c.getAttribute("data-remodal-target"),
                e = b('[data-remodal-id="' + d + '"]');
            b[p].lookup[e.data(p)].open()
        }), b(document).find("." + q).each(function(a, c) {
            var d = b(c),
                e = d.data("remodal-options");
            e ? ("string" == typeof e || e instanceof String) && (e = j(e)) : e = {}, d[p](e)
        }), b(document).on("keydown." + q, function(a) { n && n.settings.closeOnEscape && n.state === u.OPENED && 27 === a.keyCode && n.close() }), b(window).on("hashchange." + q, l)
    })
});
! function() {
    "use strict";

    function e(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.6", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = { elements: {}, containers: [] }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O) }

    function t(e) { if (e && e.container) { if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container); if (O.tools.isNode(e.container)) return e.container } return O.defaults.container }

    function n(e, t) { return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : [] }

    function i() { return ++O.uid }

    function o(e, t, n) { t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X" }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " }

    function a(e) {
        var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = { target: e, config: t, interval: n };
        O.history.push(i)
    }

    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0)
        }
        return O
    }

    function d() { T(y) }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function(o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function(n) { t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1) })
    }

    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = { started: new Date }, e.sequence.timer.clock = window.setTimeout(function() { o.blocked = !1, e.sequence.timer = null, d() }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case "reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function() { t.config[r](t.domEl), t.timer = null }, o - i)
    }

    function g(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return t.active && !t.blocked && !e.revealing && !e.disabled } return q(e) && !e.revealing && !e.disabled }

    function w(e) { var t = e.config.useDelay; return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen }

    function v(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return !t.active && e.config.reset && e.revealing && !e.disabled } return !q(e) && e.config.reset && e.revealing && !e.disabled }

    function b(e) { return { width: e.clientWidth, height: e.clientHeight } }

    function h(e) { if (e && e !== window.document.documentElement) { var t = x(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } }

    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return { top: t, left: n, height: i, width: o }
    }

    function q(e) {
        function t() {
            var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n < w && y > p
        }

        function n() { return "fixed" === window.getComputedStyle(e.domEl).position }
        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l;
        return t() || n()
    }

    function E() {}
    var O, T;
    e.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: window.document.documentElement, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, beforeReveal: function(e) {}, beforeReset: function(e) {}, afterReveal: function(e) {}, afterReset: function(e) {} }, e.prototype.isSupported = function() { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, e.prototype.reveal = function(e, s, a, d) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 });
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O
    }, e.prototype.sync = function() {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            f()
        }
        return O
    }, E.prototype.isObject = function(e) { return null !== e && "object" == typeof e && e.constructor === Object }, E.prototype.isNode = function(e) { return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, E.prototype.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function(e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, E.prototype.extend = function(e, t) { return this.forOwn(t, function(n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, E.prototype.extendClone = function(e, t) { return this.extend(this.extend({}, e), t) }, E.prototype.isMobile = function() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return e }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();
/**
 * Swiper 4.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 1, 2018
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t() }(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
        t = "undefined" == typeof window ? { document: e, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
        i = function(e) { for (var t = 0; t < e.length; t += 1) this[t] = e[t]; return this.length = e.length, this };

    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) { var h = "div"; for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n]) } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e) r.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) { for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]); return t }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) { return !!this[0] && this[0].classList.contains(e) },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this },
        data: function(e, t) { var i; if (void 0 !== t) { for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t; return this } if (i = this[0]) { if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e]; var a = i.getAttribute("data-" + e); return a || void 0 } },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, o)
                    } else
                        for (h = 0; h < p.length; h += 1) {
                            var f = p[h];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({ listener: n, proxyListener: d }), u.addEventListener(f, d, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    !a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]);
                    for (var u = c.length - 1; u >= 0; u -= 1) {
                        var v = c[u];
                        r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                    }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try { h = new t.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 }) } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                    }
                    d.dom7EventData = i.filter(function(e, t) { return t > 0 }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
        outerHeight: function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return { top: s.top + o - r, left: s.left + l - n }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) { for (s = 0; s < this.length; s += 1) this[s].style[e] = i; return this }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this },
        text: function(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = e; return this },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } },
        eq: function(e) { if (void 0 === e) return this; var t, s = this.length; return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]) },
        append: function() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) { var o = e.createElement("div"); for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild) } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                else this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) { var r = e.createElement("div"); for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]) } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) { return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]) },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        prev: function(e) { if (this.length > 0) { var t = this[0]; return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]) } return new i([]) },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        parent: function(e) { for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode)); return s(a(t)) },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) { var t = this; return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        remove: function() { for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this },
        add: function() { for (var e = [], t = arguments.length; t--;) e[t] = arguments[t]; var i, a; for (i = 0; i < e.length; i += 1) { var r = s(e[i]); for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1 } return this },
        styles: function() { return this[0] ? t.getComputedStyle(this[0], null) : {} }
    };
    Object.keys(r).forEach(function(e) { s.fn[e] = r[e] });
    var n, o, l, d = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} })
            },
            nextTick: function(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) },
            now: function() { return Date.now() },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
            },
            parseUrlQuery: function(e) {
                var i, s, a, r, n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) { return "" !== e })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return n
            },
            isObject: function(e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (void 0 !== a && null !== a)
                        for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                h = Object.getOwnPropertyDescriptor(a, l);
                            void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
                        }
                }
                return i
            }
        },
        h = (l = e.createElement("div"), {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
            prefixedPointerEvents: !!t.navigator.msPointerEnabled,
            transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
            transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
            flexbox: function() {
                for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        }),
        p = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) { t.on(e, t.params.on[e]) })
        },
        c = { components: { configurable: !0 } };
    p.prototype.on = function(e, t, i) { var s = this; if ("function" != typeof t) return s; var a = i ? "unshift" : "push"; return e.split(" ").forEach(function(e) { s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t) }), s }, p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        return s.on(e, function i() {
            for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
            t.apply(s, a), s.off(e, i)
        }, i)
    }, p.prototype.off = function(e, t) { var i = this; return i.eventsListeners ? (e.split(" ").forEach(function(e) { void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) { s === t && i.eventsListeners[e].splice(a, 1) }) }), i) : i }, p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) { t.push(e) }), t.forEach(function(e) { e.apply(a, s) })
            }
        }), r) : r
    }, p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        })
    }, p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) { t.on(e, s.on[e]) }), s.create && s.create.bind(t)(a)
        })
    }, c.components.set = function(e) { this.use && this.use(e) }, p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) { s.prototype[t] = e.proto[t] }), e.static && Object.keys(e.static).forEach(function(t) { s[t] = e.static[t] }), e.install && e.install.apply(s, t), s
    }, p.use = function(e) { for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1]; var s = this; return Array.isArray(e) ? (e.forEach(function(e) { return s.installModule(e) }), s) : s.installModule.apply(s, [e].concat(t)) }, Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }))
        },
        updateSlides: function() {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                n = i.children("." + this.params.slideClass),
                o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
                l = [],
                p = [],
                c = [],
                u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var v = e.slidesOffsetAfter;
            "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
            var f = o,
                m = this.snapGrid.length,
                g = this.snapGrid.length,
                b = e.spaceBetween,
                w = -u,
                y = 0,
                x = 0;
            if (void 0 !== s) {
                var E, T;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
                    T = 0;
                    var P = n.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var $ = void 0,
                            L = void 0,
                            I = void 0;
                        "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({ "-webkit-box-ordinal-group": $, "-moz-box-ordinal-group": $, "-ms-flex-order": $, "-webkit-order": $, order: $ })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var D = t.getComputedStyle(P[0], null),
                                O = P[0].style.transform;
                            O && (P[0].style.transform = "none"), T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), O && (P[0].style.transform = O), e.roundLengths && (T = Math.floor(T))
                        } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");
                        n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) {
                    S = [];
                    for (var A = 0; A < l.length; A += 1) l[A] < this.virtualSize + l[0] && S.push(l[A]);
                    l = S
                }
                if (!e.centeredSlides) {
                    S = [];
                    for (var G = 0; G < l.length; G += 1) l[G] <= this.virtualSize - s && S.push(l[G]);
                    l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s)
                }
                0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" }) : n.css({ marginBottom: b + "px" })), d.extend(this, { slides: n, snapGrid: l, slidesGrid: p, slidesSizesGrid: c }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [],
                s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length) break;
                    i.push(this.slides.eq(a)[0])
                } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() { for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
                i = this.slides,
                s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r],
                        o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset),
                            d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                    }
                    n.progress = s ? -o : o
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                s = this.progress,
                a = this.isBeginning,
                r = this.isEnd,
                n = a,
                o = r;
            0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, { progress: s, isBeginning: a, isEnd: r }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                n = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, { snapIndex: t, realIndex: c, previousIndex: n, activeIndex: h }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = s(e.target).closest("." + t.slideClass)[0],
                a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.progress,
                n = 0,
                o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() { return -this.snapGrid[0] },
        maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
    };
    var f = {
        setTransition: function(e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this,
                r = e;
            r < 0 && (r = 0);
            var n = a.params,
                o = a.snapGrid,
                l = a.slidesGrid,
                d = a.previousIndex,
                p = a.activeIndex,
                c = a.rtlTranslate;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var v, f = -o[u];
            if (a.updateProgress(f), n.normalizeSlideIndex)
                for (var m = 0; m < l.length; m += 1) - Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
            if (a.initialized && r !== p) { if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1; if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r) return !1 }
            return v = r > p ? "next" : r < p ? "prev" : "reset", c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(f), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) { a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(i, v)) }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.transitionEnd(i, v)), !0)
        },
        slideToLoop: function(e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); var a = e; return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s) },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            var l, d = o ? this.translate : -this.translate,
                h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
            return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i)
        },
        slideReset: function(e, t, i) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i) },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex,
                a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
            }
            return this.slideTo(s, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() { t.slideTo(n) })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() { t.slideTo(n) })) : t.slideTo(n)
            } else t.slideTo(n)
        }
    };
    var g = {
        loopCreate: function() {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this.params,
                i = this.activeIndex,
                s = this.slides,
                a = this.loopedSlides,
                r = this.allowSlidePrev,
                n = this.allowSlideNext,
                o = this.snapGrid,
                l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r, this.allowSlideNext = n
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() { h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") }
    };
    var w = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && h.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        y = function() {
            var i = t.navigator.userAgent,
                s = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: t.cordova || t.phonegap, phonegap: t.cordova || t.phonegap },
                a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = i.match(/(iPad).*OS\s([\d_]+)/),
                o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
                var d = s.osVersion.split("."),
                    h = e.querySelector('meta[name="viewport"]');
                s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return s.pixelRatio = t.devicePixelRatio || 1, s
        }();

    function x() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    var E = {
        attachEvents: function() {
            var i = this.params,
                a = this.touchEvents,
                r = this.el,
                n = this.wrapperEl;
            this.onTouchStart = function(i) {
                var a = this.touchEventsData,
                    r = this.params,
                    n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        var l = n.currentX,
                            h = n.currentY;
                        if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                            if (d.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var p = !0;
                                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault()
                            }
                            this.emit("touchStart", o)
                        }
                    }
                }
            }.bind(this), this.onTouchMove = function(t) {
                var i = this.touchEventsData,
                    a = this.params,
                    r = this.touches,
                    n = this.rtlTranslate,
                    o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = l, void(r.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(r, { startX: l, startY: h, currentX: l, currentY: h }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                            if (this.isVertical()) { if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1) } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = h;
                            var p, c = r.currentX - r.startX,
                                u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0,
                                    m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) { if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY) }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: d.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
            }.bind(this), this.onTouchEnd = function(e) {
                var t = this,
                    i = t.touchEventsData,
                    s = t.params,
                    a = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    h = e;
                if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(),
                    u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() { t && !t.destroyed && t.emit("click", h) }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() { t.destroyed || (t.allowClick = !0) }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(),
                                f = i.velocities.pop(),
                                m = v.position - f.position,
                                g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x, E, T = !1,
                            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for (var C, M = 0; M < l.length; M += 1)
                                if (l[M] > -y) { C = M; break }
                            y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (E && t.once("transitionEnd", function() { t.loopFix() }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() { t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else { for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]); var $ = (p - o[z]) / k; if (u > s.longSwipesMs) { if (!s.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)) } else { if (!s.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z) } }
            }.bind(this), this.onClick = function(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(this);
            var o = "container" === i.touchEventsTarget ? r : n,
                l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? { passive: !1, capture: l } : l), o.addEventListener(a.end, this.onTouchEnd, p)
                }(i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0)
        },
        detachEvents: function() {
            var t = this.params,
                i = this.touchEvents,
                s = this.el,
                a = this.wrapperEl,
                r = "container" === t.touchEventsTarget ? s : a,
                n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o)
                }(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x)
        }
    };
    var T = {
            setBreakpoint: function() {
                var e = this.activeIndex,
                    t = this.initialized,
                    i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params,
                    a = s.breakpoints;
                if (a && (!a || 0 !== Object.keys(a).length)) {
                    var r = this.getBreakpoint(a);
                    if (r && this.currentBreakpoint !== r) {
                        var n = r in a ? a[r] : this.originalParams,
                            o = s.loop && n.slidesPerView !== s.slidesPerView;
                        d.extend(this.params, n), d.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = r, o && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", n)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var i = !1,
                        s = [];
                    Object.keys(e).forEach(function(e) { s.push(e) }), s.sort(function(e, t) { return parseInt(e, 10) - parseInt(t, 10) });
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        r >= t.innerWidth && !i && (i = r)
                    }
                    return i || "max"
                }
            }
        },
        S = function() { return { isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g), isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) }; var e }();
    var C = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
        M = {
            update: u,
            translate: v,
            transition: f,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: w,
            events: E,
            breakpoints: T,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) { e.push(t.containerModifierClass + i) }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    var o;

                    function l() { n && n() }
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() { void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        z = {},
        k = function(e) {
            function t() {
                for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function(e) { Object.keys(M[e]).forEach(function(i) { t.prototype[i] || (t.prototype[i] = M[e][i]) }) });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 })
                    }
                });
                var p = d.extend({}, C);
                l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
                var c = s(l.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function(e, i) {
                            var s = d.extend({}, r, { el: i });
                            u.push(new t(s))
                        }), u
                    }
                    a.swiper = l, c.data("swiper", l);
                    var v, f, m = c.children("." + l.params.wrapperClass);
                    return d.extend(l, { $el: c, el: a, $wrapperEl: m, wrapperEl: m[0], classNames: [], slides: s(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === l.params.direction }, isVertical: function() { return "vertical" === l.params.direction }, rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")), wrongRTL: "-webkit-box" === m.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: v[0], move: v[1], end: v[2] }, l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: d.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), l
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) { for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0)); for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0)) } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.init = function() { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")) }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    n = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) { i.off(e) }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null)
            }, t.extendDefaults = function(e) { d.extend(z, e) }, i.extendedDefaults.get = function() { return z }, i.defaults.get = function() { return C }, i.Class.get = function() { return e }, i.$.get = function() { return s }, Object.defineProperties(t, i), t
        }(p),
        P = { name: "device", proto: { device: y }, static: { device: y } },
        $ = { name: "support", proto: { support: h }, static: { support: h } },
        L = { name: "browser", proto: { browser: S }, static: { browser: S } },
        I = {
            name: "resize",
            create: function() {
                var e = this;
                d.extend(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } })
            },
            on: { init: function() { t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
        },
        D = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = this,
                    s = new(0, D.func)(function(e) { e.forEach(function(e) { i.emit("observerUpdate", e) }) });
                s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s)
            },
            init: function() {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 })
                }
            },
            destroy: function() { this.observer.observers.forEach(function(e) { e.disconnect() }), this.observer.observers = [] }
        },
        O = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { d.extend(this, { observer: { init: D.init.bind(this), attach: D.attach.bind(this), destroy: D.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
        A = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.virtual,
                    o = n.from,
                    l = n.to,
                    h = n.slides,
                    p = n.slidesGrid,
                    c = n.renderSlide,
                    u = n.offset;
                t.updateActiveIndex();
                var v, f, m, g = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
                var b = Math.max((g || 0) - m, 0),
                    w = Math.min((g || 0) + f, h.length - 1),
                    y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                function x() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() }
                if (d.extend(t.virtual, { from: b, to: w, offset: y, slidesGrid: t.slidesGrid }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: y, from: b, to: w, slides: function() { for (var e = [], t = b; t <= w; t += 1) e.push(h[t]); return e }() }), void x();
                var E = [],
                    T = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
                T.forEach(function(e) { t.$wrapperEl.append(c(h[e], e)) }), E.sort(function(e, t) { return e < t }).forEach(function(e) { t.$wrapperEl.prepend(c(h[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x()
            },
            renderSlide: function(e, t) { var i = this.params.virtual; if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]; var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a },
            appendSlide: function(e) { this.virtual.slides.push(e), this.virtual.update(!0) },
            prependSlide: function(e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache,
                        i = {};
                    Object.keys(t).forEach(function(e) { i[e + 1] = t[e] }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        },
        G = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
            create: function() { d.extend(this, { virtual: { update: A.update.bind(this), appendSlide: A.appendSlide.bind(this), prependSlide: A.prependSlide.bind(this), renderSlide: A.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } }) },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = { watchSlidesProgress: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
                    }
                },
                setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
            }
        },
        H = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [
                                [d.left, d.top],
                                [d.left + this.width, d.top],
                                [d.left, d.top + this.height],
                                [d.left + this.width, d.top + this.height]
                            ], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r)
                }
            },
            enable: function() { this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
            disable: function() { this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
        },
        N = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { d.extend(this, { keyboard: { enabled: !1, enable: H.enable.bind(this), disable: H.disable.bind(this), handle: H.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } };
    var B = {
            lastScrollTime: d.now(),
            event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: s, pixelY: a }
            },
            handleMouseEnter: function() { this.mouseEntered = !0 },
            handleMouseLeave: function() { this.mouseEntered = !1 },
            handle: function(e) {
                var i = e,
                    s = this,
                    a = s.params.mousewheel;
                if (!s.mouseEntered && !a.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                var r = 0,
                    n = s.rtlTranslate ? -1 : 1,
                    o = B.normalize(i);
                if (a.forceToAxis)
                    if (s.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if (a.invert && (r = -r), s.params.freeMode) {
                    s.params.loop && s.loopFix();
                    var l = s.getTranslate() + r * a.sensitivity,
                        h = s.isBeginning,
                        p = s.isEnd;
                    if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function() { s.slideToClosest() }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0
                } else {
                    if (d.now() - s.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if (s.isEnd && !s.params.loop || s.animating) { if (a.releaseOnEdges) return !0 } else s.slideNext(), s.emit("scroll", i);
                    else if (s.isBeginning && !s.params.loop || s.animating) { if (a.releaseOnEdges) return !0 } else s.slidePrev(), s.emit("scroll", i);
                    s.mousewheel.lastScrollTime = (new t.Date).getTime()
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            },
            enable: function() { if (!B.event) return !1; if (this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0 },
            disable: function() { if (!B.event) return !1; if (!this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0 }
        },
        X = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            init: function() {
                var e, t, i = this,
                    a = i.params.navigation;
                (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) { e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext() }), t && t.length > 0 && t.on("click", function(e) { e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev() }), d.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        Y = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, d, h = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
                            var r = s(a),
                                n = r.index();
                            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                        else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
                            p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                        if (t.dynamicBullets) {
                            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                m = e ? "right" : "left";
                            h.css(this.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
                        var g;
                        g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var b = (i + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), d.extend(e.pagination, { $el: i, el: i[0] }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        V = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() { n[0].style.opacity = 0, n.transition(400) }, 1e3))
                }
            },
            setTransition: function(e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() { i.css("opacity", 0), i.transition(400) }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                    h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                    h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() { this.scrollbar.disableDraggable() }
        },
        R = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p
                }
                if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) { e.parallax.setTransform(i, a) }), i.each(function(t, i) {
                    var n = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) { e.parallax.setTransform(i, n) })
                })
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                })
            }
        },
        F = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) { if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1); if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1) }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                }
            }
        },
        W = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                        var o = s(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, h, p, !1, function() {
                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function d(e) { if (n) { if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (a[e]) return !0; return !1 }

                function h(e) { return n ? s(e).attr("data-swiper-slide-index") : s(e).index() }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                });
                else if (l > 1)
                    for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) { for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m); for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g) } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        q = {
            LinearSpline: function(e, t) { var i, s, a, r, n, o = function(e, t) { for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a; return i }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) { return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0 }, this },
            getInterpolateFunction: function(e) { this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid)) },
            setTranslate: function(e, t) {
                var i, s, a = this,
                    r = a.controller.control;

                function n(e) { var t = a.rtlTranslate ? -a.translate : a.translate; "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses() }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);
                else r instanceof k && t !== r && n(r)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    a = s.controller.control;

                function r(t) { t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() { a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd()) })) }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);
                else a instanceof k && t !== a && r(a)
            }
        },
        j = {
            makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e },
            addElRole: function(e, t) { return e.attr("role", t), e },
            addElLabel: function(e, t) { return e.attr("aria-label", t), e },
            disableEl: function(e) { return e.attr("aria-disabled", !0), e },
            enableEl: function(e) { return e.attr("aria-disabled", !1), e },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                    var r = s(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        K = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() { this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState) },
            setHistoryPopState: function() { this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter(function(e) { return "" !== e }),
                    i = e.length;
                return { key: e[i - 2], value: e[i - 1] }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = K.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a))
                }
            },
            slugify: function(e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        U = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() { this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange) }
        },
        _ = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, i)
            },
            start: function() { return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)) },
            stop: function() { return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)) },
            pause: function(e) { this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run()))) }
        },
        Z = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd(function() { if (!a && t && !t.destroyed) { a = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]) } })
                }
            }
        },
        Q = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                        var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / z,
                            $ = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    }
                var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        J = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                        var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd(function() { if (!r && t && !t.destroyed) { r = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]) } })
                }
            }
        },
        ee = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                    var f = i.eq(u),
                        m = r[u],
                        g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = o ? p * g : 0,
                        w = o ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = o ? 0 : n.stretch * g,
                        E = o ? n.stretch * g : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) }
        },
        te = [P, $, L, I, O, G, N, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function() { d.extend(this, { mousewheel: { enabled: !1, enable: B.enable.bind(this), disable: B.disable.bind(this), handle: B.handle.bind(this), handleMouseEnter: B.handleMouseEnter.bind(this), handleMouseLeave: B.handleMouseLeave.bind(this), lastScrollTime: d.now() } }) }, on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } } }, {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
            create: function() { d.extend(this, { navigation: { init: X.init.bind(this), update: X.update.bind(this), destroy: X.destroy.bind(this) } }) },
            on: {
                init: function() { this.navigation.init(), this.navigation.update() },
                toEdge: function() { this.navigation.update() },
                fromEdge: function() { this.navigation.update() },
                destroy: function() { this.navigation.destroy() },
                click: function(e) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        a = t.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { d.extend(this, { pagination: { init: Y.init.bind(this), render: Y.render.bind(this), update: Y.update.bind(this), destroy: Y.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function() { this.params.loop || this.pagination.update() }, slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { d.extend(this, { scrollbar: { init: V.init.bind(this), destroy: V.destroy.bind(this), updateSize: V.updateSize.bind(this), setTranslate: V.setTranslate.bind(this), setTransition: V.setTransition.bind(this), enableDraggable: V.enableDraggable.bind(this), disableDraggable: V.disableDraggable.bind(this), setDragPosition: V.setDragPosition.bind(this), onDragStart: V.onDragStart.bind(this), onDragMove: V.onDragMove.bind(this), onDragEnd: V.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(e) { this.scrollbar.setTransition(e) }, destroy: function() { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { d.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(e) { this.params.parallax && this.parallax.setTransition(e) } } }, {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function() {
                var e = this,
                    t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) { t[i] = F[i].bind(e) }), d.extend(e, { zoom: t })
            },
            on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function(e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function(e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
        }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { d.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } }) }, on: { beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function() { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { d.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: q.getInterpolateFunction.bind(this), setTranslate: q.setTranslate.bind(this), setTransition: q.setTransition.bind(this) } }) }, on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function(e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, {
            name: "a11y",
            params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
            create: function() {
                var e = this;
                d.extend(e, { a11y: { liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(j).forEach(function(t) { e.a11y[t] = j[t].bind(e) })
            },
            on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
        }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { d.extend(this, { history: { init: K.init.bind(this), setHistory: K.setHistory.bind(this), setHistoryPopState: K.setHistoryPopState.bind(this), scrollToSlide: K.scrollToSlide.bind(this), destroy: K.destroy.bind(this) } }) }, on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { d.extend(this, { hashNavigation: { initialized: !1, init: U.init.bind(this), destroy: U.destroy.bind(this), setHash: U.setHash.bind(this), onHashCange: U.onHashCange.bind(this) } }) }, on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, {
            name: "autoplay",
            params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
            create: function() {
                var e = this;
                d.extend(e, { autoplay: { running: !1, paused: !1, run: _.run.bind(e), start: _.start.bind(e), stop: _.stop.bind(e), pause: _.pause.bind(e), onTransitionEnd: function(t) { e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()) } } })
            },
            on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } }
        }, {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function() { d.extend(this, { fadeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                setTransition: function(e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) }
            }
        }, {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
            create: function() { d.extend(this, { cubeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                setTransition: function(e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) }
            }
        }, {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() { d.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                setTransition: function(e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) }
            }
        }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { d.extend(this, { coverflowEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } }) }, on: { beforeInit: function() { "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k
});
//# sourceMappingURL=swiper.min.js.map

/**
 * @Author: Rafał Karczmarzyk
 * @Date:   30-Aug-2017 12:58:51
 * @Email:  rk@leonardo.pl
 * @Filename: animations.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 30-Aug-2017 15:27:09
 */

$(function() {
    // window.sr = ScrollReveal({
    //   reset: true,
    //   viewFactor: 0.2,
    //   easing: 'ease-out',
    //   viewOffset: {
    //     top: -1000
    //   }
    // });
    //
    // sr.reveal('.anim, .page-header, .blue-box, .boxes-header, .section-header',{
    //   scale: 1,
    //   distance: '50px',
    //   duration: 500,
    //   viewFactor: 0.05,
    //   delay: 100,
    // });
    //
    // sr.reveal('.page-baner, .header-box, .icons-menu',{
    //   scale: 1,
    //   distance: '50px',
    //   duration: 500,
    //   viewFactor: 0.05,
    //   delay: 300,
    // });
    //
    // sr.reveal('.items-anim',{
    //   distance: '50px',
    //   duration: 500,
    //   viewFactor: 0.05,
    //   delay: 100,
    // });
    //
    // sr.reveal('.see-also .news-box, .see-also .news-box-clear',{
    //   distance: '50px',
    //   duration: 500,
    //   viewFactor: 0.05,
    //   delay: 100,
    // }, 300);
    //
    // sr.reveal('.partners .item, .team .item',{
    //   distance: '50px',
    //   duration: 500,
    //   viewFactor: 0.05,
    //   delay: 100,
    // }, 300);

});

var isRetina = (
    window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
);

if (isRetina) {
    $('html').addClass("isRetina");
}

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;



if (isOpera) {
    $('html').addClass("isOpera");
}
if (isFirefox) {
    $('html').addClass("isFirefox");
}
if (isSafari) {
    $('html').addClass("isSafari");
}
if (isIE) {
    $('html').addClass("isIE");
}
if (isEdge) {
    $('html').addClass("isEdge");
}
if (isChrome) {
    $('html').addClass("isChrome");
}
if (isBlink) {
    $('html').addClass("isBlink");
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass("isMobile");
}


navigator.sayswho = (function() {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var browserBufer = navigator.sayswho.split(' ');

var browserVersion = {
    name: browserBufer[0],
    varsion: browserBufer[1],
    info: navigator.sayswho
};

// console.log(browserVersion);

$(function() {
    if (browserVersion.name === 'IE') {
        $('#browser-alert').addClass('show');
    }
});


$(function() {
    if (browserVersion.name === 'IE') {
        $('#browser-alert').addClass('show');
    }

    setInterval(function() {
        // console.log(mouse.y);
        if ((mouse.y - $(window).scrollTop()) <= 200) {
            $('#browser-alert').addClass('hover');
        } else {
            $('#browser-alert').removeClass('hover');
        }
    }, 1);
});

/**
 * @Author: Rafał Karczmarzyk
 * @Date:   27-Apr-2017 13:17:15
 * @Email:  rk@leonardo.pl
 * @Filename: cookie.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 28-Sep-2017 13:15:53
 */

var cookieNotify = Cookies.get('cookieNotify');
$(function() {

    if (cookieNotify == null) {
        setTimeout(function() {
            $('#cookie-notify').addClass('show');
        }, 300);
    }

    $('#accept-cookies').click(function() {
        $('#cookie-notify').addClass('fadeOff');
        Cookies.set('cookieNotify', false, { expires: 7, path: '/' });
        return false;
    });

});

/*
Obiekt 'konwertujący' breakpoint'y css do js.
do poprawnego działania potrzebuje definicje css w sass\layout\_layout.css-to-js.scss
*/
function CssToJs() {
    var thisObject = this;
    thisObject.navbarBreakPoint = null;
    // constructor
    thisObject._constructor = function() {
            thisObject.update();
            $(window).resize(thisObject.update);
        }
        // update
    thisObject.update = function() {
            thisObject.navbarBreakPoint = ($('#navbar-break-point').css('opacity') == '0') ? false : true;
        }
        // pobieranie stanu klasy do obiektu
    thisObject.get = function(param) {
            var result = false;
            if (typeof param === 'undefined') {
                // console.log('Nie podano parametru, pobieranie obiektu');
                result = {
                    navbarBreakPoint: thisObject.navbarBreakPoint
                };
            } else {
                // console.log('Podano parametr, pobieranie okreslonej wartości: ', param);
                result = thisObject[param];
            }
            return result;
        }
        // _constructor
    $(function() {
        thisObject._constructor();
    });
}

var cssToJs = new CssToJs();

var developerConfig = {
    iconPosition: "left:0;bottom:0",
    features: [
        // {
        //   label: 'Grid debug',
        //   type: 'button',
        //   action: function() {
        //     $('body').toggleClass('debug-grid');
        //   }
        // },
        {
            label: 'Force reload CSS',
            type: 'button',
            action: function() {
                $('script[src*="main.js"]');
                var cssSrc = $('link[href*="main.css"]');
                var css = cssSrc.attr('href').split('?')[0];
                cssSrc.attr('href', css + "?ver=" + Math.random());
            }
        },
        // {
        //   label: 'Force reload JS',
        //   type: 'button',
        //   action: function(){
        //     var jsSrc = $('script[src*="main.js"]');
        //     var js = jsSrc.attr('src').split('?')[0];
        //     jsSrc.attr('src', js+"?ver="+Math.random() );
        //   }
        // },
        {
            label: 'Show cookie info',
            type: 'button',
            action: function() {
                if ($('#cookie-notify').hasClass('fadeOff')) {
                    $('#cookie-notify').removeClass('fadeOff');
                    $('#cookie-notify').addClass('show');
                } else {
                    $('#cookie-notify').toggleClass('show');
                }
            }
        },
        {
            label: 'Show browser alert',
            type: 'button',
            action: function() {
                $('#browser-alert').toggleClass('show');
            }
        },
        {
            label: 'Input data to contact form',
            type: 'button',
            action: function() {
                $('*[name="your-firstname"]').val('Foo');
                $('*[name="your-lastname"]').val('Foo');
                $('*[name="your-date"]').val('1983-01-12');
                $('*[name="your-email"]').val('foo@bar.com');
                $('*[name="your-topic"]').val('Lorem Ipsum');
                $('*[name="your-phone"]').val('666 666 666');
                $('*[name="your-message"]').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');
            }
        },
        // {
        //   label: '404 page',
        //   type: 'button',
        //   action: function() {
        //     window.location.href = "404.html";
        //   }
        // },
    ]
}

function enableDeveloper() {
    $('#developer').addClass('show');
}

function createCallback(i) {
    return function() {
        i();
    }
}

function developerSetConfig() {



    $('#rf-version').html(redJsConfig.info.version);

    $('#developer .circle').attr('style', developerConfig.iconPosition);

    for (var i = 0; i < developerConfig.features.length; i++) {
        var thisFeature = developerConfig.features[i];
        // console.log('parsing feature', thisFeature);

        var html = "";
        html += '<div class="feature" id="feature-' + i + '">';
        html += '<p>' + thisFeature.label + '</p>';
        switch (thisFeature.type) {
            case 'button':
                html += '<button>Run</button>';
                break;
        }
        html += '</div>';
        $('#developer-features').append(html);

        switch (thisFeature.type) {
            case 'button':
                $('#feature-' + i + ' button').click(createCallback(thisFeature.action));
                break;
        }

    }
}

$(function() {
    developerSetConfig();
    if (redJsConfig.developer) {
        enableDeveloper();
    }
    $('#developer-toggle').click(function() {
        $(this).toggleClass('active');
        $('#developer .box').toggleClass('show');
        // $('body').toggleClass('debug-grid');
    });
});

/**
 * @Author: Rafał Karczmarzyk <LiptuN>
 * @Date:   24-Apr-2017 11:22:47
 * @Email:  rk@leonardo.pl
 * @Filename: konami.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 30-Aug-2017 14:59:46
 */



var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var keyBuffer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(window).keydown(function(e) {

    keyBuffer.push(e.keyCode);
    keyBuffer.shift();

    $('#secret-menu .key-buffer code').html(e.keyCode);

    var valid = true;
    for (var i = 0; i < 10; i++) {
        if (keyBuffer[i] !== konami[i]) {
            valid = false;
        }
    }

    if (valid) {
        console.log('Proper Konami Code');
        enableDeveloper();
    }
});

/**
 * @Author: Rafał Karczmarzyk
 * @Date:   29-Aug-2017 15:27:49
 * @Email:  rk@leonardo.pl
 * @Filename: mouse.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 29-Aug-2017 15:44:18
 */

var mouse = {
    x: 0,
    y: 0
}

$(function() {
    $('body').mousemove(function(e) {
        mouse = {
            x: e.pageX,
            y: e.pageY
        };
        // console.log(mouse);
    });
});

$(function() {
    $('#main-navbar .hamburger .icon').click(function() {
        $(this).toggleClass('close');
        $('.mobile-navbar').toggleClass('show');
        $('body').toggleClass('lock');
    });
    menuScroll();
    $(window).scroll(function() {
        menuScroll();
    });

    document.querySelectorAll('.mobile-navbar .sub-menu').forEach(function(el) {
        var expandElement = document.createElement('span');
        expandElement.classList.add('toggle-submenu');
        el.parentNode.classList.add('has-sub-menu');
        el.parentNode.prepend(expandElement);
    });

    document.querySelectorAll('.mobile-navbar .toggle-submenu').forEach(function(el) {
        el.addEventListener('click', function() {
            console.log('click');
            this.classList.toggle('active');
            this.parentNode.classList.toggle('open-submenu');
        });
    });

});




function menuScroll() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
        $('#main-navbar').addClass('fixed');
    } else {
        $('#main-navbar').removeClass('fixed');
    }
};

$(function() {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 200,
        outDuration: 200,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href*="#"]):not([href^="tel:"]):not([href^="mailto:"]):not(.fancybox):not(.fancybox-item):not(.fancybox-nav):not(.zg a)',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: true,
        timeoutCountdown: 100,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) { window.location.href = url; }
    });
});

(function($) {

    $.fn.formControl = function(options) {


        var settings = $.extend({
            validateOnFocusOut: true,
            validateOnTyping: true,
            validateOnClick: true,
            validateOnChange: true,
            highlightRequiredFields: true,
            wrapLabels: true,
            highlightRequiredFieldsOptions: {
                cssClass: "red-js-form-required",
                placeholder: "{placeholder}*"
            },
            reCaptcha: false,
            fields: [],
            messages: {
                min_length_error: "Wprowadzona wartość jest za krótka",
                max_length_error: "Wprowadzona wartość jest za długa",
                pattern_error: "Wprowadzona wartość jest niepoprawna",
                required_error: "To pole jest wymagane",
                formError: "Wystapiły błędy w formularzu",
                reCaptcha: "Udowodnij że nie jesteś robotem",
                equal_to: "Pola nie są takie same",
                validation_error: "Wystąpiły błędy, sprawdź formularz"
            },
            // callbacks
            onValidForm: function() {},
            onInvalidForm: function() {}
        }, options);


        // jQuery loop
        return this.each(function() {


            // current form object
            var thisForm = $(this);


            // add CSS dependency classes
            thisForm.addClass('red-js-form');
            thisForm.find('input, textarea, select, .recaptcha')
                .addClass('red-js-form-control')
                .wrap('<div class="red-js-form-control-wrapper"></div>')
                .parent().append('<div class="red-js-form-icon"><div class="red-js-form-message"></div></div>');

            if (settings.wrapLabels) {
                thisForm.find('label').each(function(index, element) {
                    if ($("#" + $(element).attr('for')).attr('type') === 'checkbox') {

                        $(element).appendTo($("#" + $(element).attr('for')).parent());
                    }
                    // console.log( $(element).attr('for') );
                });
            }



            // validate field
            function validateField(field) {

                // console.group('validateField', field);

                var errorMessage = "";
                var result = true;
                var continueChecking = true;
                var thisPattern;
                var thisInput = thisForm.find('*[name="' + field.name + '"]');
                var fieldRequired = false;
                var fieldRequiredStatus = false;


                thisInput.addClass('validate-auto');


                // type of input

                thisInput.type = thisInput.attr('data-input-type');

                // check basic validation

                if (continueChecking) {
                    // if requered
                    if (typeof field.required !== 'undefined') {
                        fieldRequired = field.required;
                    } else {
                        fieldRequired = false;
                    }


                    switch (thisInput.type) {
                        case 'text':
                        case 'textarea':
                        case 'email':
                        case 'password':
                            // check as text
                            if (fieldRequired === false && thisInput.val() === "") {
                                continueChecking = false;
                                fieldRequiredStatus = true;
                            }
                            if (fieldRequired === true && thisInput.val() === "") {
                                continueChecking = false;
                                result = false;
                                fieldRequiredStatus = false;
                                // console.log('foo');
                            }
                            break;
                        case 'checkbox':
                            if (fieldRequired === true && !thisInput.is(":checked")) {
                                result = false;
                                fieldRequiredStatus = false;
                            }
                            continueChecking = false;
                            break;
                        case 'select':
                            if (fieldRequired === true && (thisInput.val() === null)) {
                                result = false;
                                fieldRequiredStatus = false;
                            }
                            continueChecking = false;
                            break;
                        default:
                            continueChecking = false;
                            console.error(thisInput.type + ' is not supported in this version');
                    }


                    if (!fieldRequiredStatus) {
                        // message
                        if (typeof field.messages !== 'undefined' && typeof field.messages.required_error !== 'undefined') {
                            errorMessage = field.messages.required_error;
                        } else {
                            errorMessage = settings.messages.required_error;
                        }
                    }

                } // continueChecking


                if (continueChecking) {
                    // min length of input string
                    if (typeof field.min_length !== 'undefined') {
                        if (thisInput.val().length < field.min_length) {
                            result = false;
                            continueChecking = false;

                            // message
                            if (typeof field.messages !== 'undefined' && typeof field.messages.min_length_error !== 'undefined') {
                                errorMessage = field.messages.min_length_error;
                            } else {
                                errorMessage = settings.messages.min_length_error;
                            }

                        }
                    }
                } // continueChecking

                if (continueChecking) {
                    // max length of input string
                    if (typeof field.max_length !== 'undefined') {
                        if (thisInput.val().length > field.max_length) {
                            result = false;
                            continueChecking = false;

                            // message
                            if (typeof field.messages !== 'undefined' && typeof field.messages.max_length_error !== 'undefined') {
                                errorMessage = field.messages.max_length_error;
                            } else {
                                errorMessage = settings.messages.max_length_error;
                            }

                        }
                    }
                } // continueChecking



                // console.log( field.pattern );
                if (continueChecking && typeof field.pattern !== 'undefined') {


                    // check is a RegExp
                    if (field.pattern instanceof RegExp) {
                        // RegExp as input

                        thisPattern = field.pattern;

                    } else {
                        // String as input
                        // defaults fields patterns
                        switch (field.pattern) {
                            case 'email':
                                thisPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                                break;
                            case 'name':
                                thisPattern = /^[a-zążźćńłó]{2,}$/i;
                                break;
                            case 'phone':
                                // thisPattern = /^((\([0-9]{2,3}\)|([0-9]{2,3}))?[\- ]?[0-9]{3}([\- ]?[0-9]{2}){2}|[0-9]{3}[\- ]?[0-9]{3}[\- ]?[0-9]{3})$/;
                                thisPattern = /^[0-9]{9,}$/;
                                break;
                            default:
                                thisPattern = /./i;
                        }
                    }

                    if (thisPattern.test(thisInput.val())) {
                        // valid
                    } else {
                        // invalid
                        result = false;

                        // message
                        if (typeof field.messages !== 'undefined' && typeof field.messages.pattern_error !== 'undefined') {
                            errorMessage = field.messages.pattern_error;
                        } else {
                            errorMessage = settings.messages.pattern_error;
                        }

                    }

                } // continueChecking

                // equal to
                if (continueChecking && typeof field.equal_to !== 'undefined') {

                    var equalToValue = thisForm.find('*[name="' + field.equal_to + '"]').val();
                    // console.log('thisInput',thisInput);

                    if (thisInput.val() === equalToValue) {

                    } else {
                        result = false;
                        // message
                        if (typeof field.messages !== 'undefined' && typeof field.messages.equal_to !== 'undefined') {
                            errorMessage = field.messages.equal_to;
                        } else {
                            errorMessage = settings.messages.equal_to;
                        }
                    }

                }

                thisInput.removeClass('info');
                thisInput.removeClass('valid');
                thisInput.removeClass('invalid');
                thisInput.parent().children('.red-js-form-icon').removeClass('info');
                thisInput.parent().children('.red-js-form-icon').removeClass('valid');
                thisInput.parent().children('.red-js-form-icon').removeClass('invalid');

                // error popups
                if (result) {
                    thisInput.addClass('valid');
                    thisInput.parent().children('.red-js-form-icon').addClass('valid');
                } else {
                    thisInput.addClass('invalid');
                    thisInput.parent().children('.red-js-form-icon').addClass('invalid');

                    thisInput.parent().find('.red-js-form-message').html("<p>" + errorMessage + "</p>");
                }

                // console.groupEnd('vatidateField', field)
                return result;

            }

            function getFieldObj(name) {
                result = false;
                $.each(settings.fields, function(index, value) {

                    if (value.name === name) {
                        result = value;
                        return false;
                    }

                });
                return result;
            }


            // check fields
            $.each(settings.fields, function(index, value) {

                // console.log( value );
                var thisInput = thisForm.find('*[name="' + value.name + '"]');

                if (thisInput.is('input')) {
                    thisInput.type = thisInput.attr('type');
                } else if (thisInput.is('textarea')) {
                    thisInput.type = 'textarea'
                } else if (thisInput.is('select')) {
                    thisInput.type = 'select'
                }

                thisInput.attr('data-input-type', thisInput.type);
                thisInput.type = thisInput.attr('data-input-type');



                thisInput.addClass('red-js-form-control-input');
                thisInput.removeAttr('required');

                // add info mark
                if (typeof value.info !== 'undefined') {
                    thisInput.parent().children('.red-js-form-icon').addClass('info');
                    thisInput.parent().find('.red-js-form-message').html('<p>' + value.info + '</p>');
                }


                if (settings.highlightRequiredFields) {

                    if (typeof value.required !== 'undefined' && value.required) {
                        if (settings.highlightRequiredFieldsOptions.cssClass) {
                            thisInput.addClass(settings.highlightRequiredFieldsOptions.cssClass);
                        }
                        if (settings.highlightRequiredFieldsOptions.placeholder) {
                            var placeholder = thisInput.attr('placeholder');
                            placeholder = settings.highlightRequiredFieldsOptions.placeholder.replace('{placeholder}', placeholder);
                            thisInput.attr('placeholder', placeholder);
                        }
                    }

                }

                // bind events
                var thisField = getFieldObj(thisInput.attr('name'));
                var validateOnFocusOut = settings.validateOnFocusOut;
                var validateOnTyping = settings.validateOnTyping;
                var validateOnClick = settings.validateOnClick;
                var validateOnChange = settings.validateOnChange;
                // focusout
                // console.log(thisField);


                if (typeof thisField.validateOnFocusOut !== 'undefined') {
                    validateOnFocusOut = thisField.validateOnFocusOut;
                }

                if (validateOnFocusOut) {
                    thisInput.focusout(function() {
                        // console.log('focusout');
                        thisInput.removeClass('firstClick');
                        validateField(getFieldObj(thisInput.attr('name')));
                        // thisInput.addClass('validate-auto');
                    });
                }

                // typing

                if (typeof thisField.validateOnTyping !== 'undefined') {
                    // input set
                    validateOnTyping = thisField.validateOnTyping;
                }

                if (validateOnTyping) {

                    thisInput.keydown(function() {
                        // console.log('keypress');
                        setTimeout(function() {
                            if (thisInput.hasClass('validate-auto')) {
                                validateField(getFieldObj(thisInput.attr('name')));
                            }
                        }, 10);
                    });
                }


                // change

                if (typeof thisField.validateOnChange !== 'undefined') {
                    validateOnChange = thisField.validateOnChange;
                }

                if (validateOnChange) {
                    thisInput.change(function() {
                        validateField(getFieldObj(thisInput.attr('name')));
                    });
                }


                // click
                if (typeof thisField.validateOnClick !== 'undefined') {
                    validateOnClick = thisField.validateOnClick;
                }

                if (validateOnClick) {
                    thisInput.click(function() {
                        // console.log("click ",$(thisInput), thisInput.type );
                        switch (thisInput.type) {
                            case 'checkbox':
                                validateField(getFieldObj(thisInput.attr('name')));
                                break;
                            case 'select':
                                thisInput.toggleClass('firstClick');
                                if (!thisInput.hasClass('firstClick')) {
                                    validateField(getFieldObj(thisInput.attr('name')));
                                }
                        }
                    });
                }


            });


            thisForm.attr('novalidate', 'novalidate'); // disable HTML5 validation to avoid conflicts

            thisForm.submit(function() {
                // console.log("submiting form");
                var formErrorMessage = "";
                var validationResult = true;
                $.each(settings.fields, function(index, value) {
                    if (validateField(value) === false) {
                        validationResult = false;
                    }

                });

                // reCaptcha check
                if (settings.reCaptcha !== false) {
                    if (grecaptcha.getResponse(settings.reCaptcha).length === 0) {
                        // console.log("Captcha err");
                        validationResult = false;
                        formErrorMessage += "<p>" + settings.messages.reCaptcha + "</p>";
                        // thisForm.find('.recaptcha').parent().children('.red-js-form-icon').addClass('invalid');
                    }
                }

                if (validationResult) {
                    // valid
                    var validResult = settings.onValidForm();
                    if (validResult === false) {
                        return false;
                    }
                } else {
                    // invalid
                    settings.onInvalidForm();
                    // form errors
                    formErrorMessage += "<p>" + settings.messages.formError + "</p>";


                    var thisSubmit = thisForm.find('[type="submit"]');

                    thisSubmit.addClass('invalid');
                    thisSubmit.parent().children('.red-js-form-icon').addClass('invalid');
                    thisSubmit.parent().find('.red-js-form-message').html("<p>" + settings.messages.validation_error + "</p>");


                    thisForm.find('.red-js-form-errors').html(formErrorMessage).show();

                    return false;
                }
            });


        });

    }

}(jQuery));

//# sourceMappingURL=red.js.form.control.js.map

/**
 * @Author: Rafał Karczmarzyk <LiptuN>
 * @Date:   24-Apr-2017 11:22:47
 * @Email:  rk@leonardo.pl
 * @Filename: responsive.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 28-Apr-2017 13:52:18
 */

function responsiveComponents() {
    $('.responsive').each(function(index, element) {
        thisElement = $(element);
        thisElement.attr('data-width', thisElement.width());
        var breakpoints = [];
        for (var i = 0; i < 60; i++) {
            breakpoints.push(i * 20);
        }
        var attribute = '';
        for (i = 0; i < breakpoints.length - 1; i++) {
            if (thisElement.width() < breakpoints[i]) {
                attribute += breakpoints[i] + " ";
            }
        }
        thisElement.attr('data-lower', attribute);
    });
}

$(function() {
    responsiveComponents();
    $(window).resize(function() {
        responsiveComponents();
    });
});

/**
 * @Author: Rafał Karczmarzyk <LiptuN>
 * @Date:   24-Apr-2017 11:22:47
 * @Email:  rk@leonardo.pl
 * @Filename: scrollTo.js
 * @Last modified by:   Rafał Karczmarzyk
 * @Last modified time: 28-Apr-2017 14:05:23
 */

function scrollTo(target, offset) {
    $('html, body').animate({
        scrollTop: $(target).offset().top + offset
    }, 800);
}

var redJsConfig = {
    developer: false,
    info: {
        version: "1.0",
        projectName: "Bolero"
    }
}

$(function() {
    console.info('%cReD Responsive Framework', 'color: red;background:#121212;padding:2px 4px;font-weight:900');
    // console.info('Version: ' + redJsConfig.info.version);
});


$(function() {
    if ($("#custom_order_date").length > 0) {
        $("#custom_order_date").flatpickr({
            minDate: new Date().fp_incr(5),
            disable: disabledDates,
            locale: {
                "firstDayOfWeek": 1 // start week on Monday
            }
        });
    }
});

// Product card

$('.gallery .slide-image img').click(function() {
    var imgUrl = $(this).attr('src');
    $('.big-photo img').attr('src', imgUrl);
});


function updateExtraDataField() {
    $('#validation-info').html('');
    var extraData = "<ul>";

    // Старый функционал - перебор .extra-product-data-input элементов
    $('.extra-product-data-input').each(function(i, e) {
        var text = "";
        if ($(e).attr('data-value') === 'checked') {
            text = $(e).attr('data-label') + ": ";
            text += $(e).find('.value').val();
        }
        if (text) {
            extraData += `<li>${text}</li>`;
        }
    });

    // Новый функционал - перебор выбранных чекбоксов с data-name
    $('.size-checkbox:checked').each(function(i, e) {
        var text = $(e).data('name');
        extraData += `<li>${text}</li>`;
    });

    // Добавляем также data-name из выбранных чекбоксов с data-name
    $('.topper-checkbox:checked').each(function(i, e) {
        var text = $(e).data('name');
        extraData += `<li>${text}</li>`;
    });

    extraData += "</ul>";
    extraData = extraData.replace(/<li>(undefined|undefined:.+?)<\/li>/g, '');

    $('#extra-product-data-input').val(extraData);
    $('#debug').html(extraData);
}

function updateCustomCart() {
    // var variant = $('.variant-select .item.active').attr('data-value');
    if ($('#single-product-price').length > 0) {
        var price = $('#single-product-price').html().replace(/(<([^>]+)>)/ig, "");
    } else {

        var prices = document.querySelectorAll('.variant-select .item.active .woocommerce-Price-amount');
        var price = 0;

        if (prices.length === 1) {
            price = prices[0].innerHTML;
        } else {
            price = prices[1].innerHTML;
        }

        price = price.replace(/(<([^>]+)>)/ig, "");
    }
    price = price.split('&nbsp;');

    price[0] = parseFloat(price[0].replace(',', '.'));
    price[0] *= quantity;
    price[0] = price[0].toFixed(2).replace('.', ',');
    price = price.join(' ');
    $('#custom-total-display').html(price);
    $('#custom-quantity-display').html(quantity);
    $('.quantity input[type="number"]').val(quantity).trigger('change');
}

function validateExtraData() {
    var result = true;
    $('.extra-product-data-input.active').each(function(i, e) {
        // console.log(e);
        if ($(e).find('.validate').val() === '') {
            result = false;
        }
        // console.log( $(e).find('.value').val() );
    });
    return result;
}
var quantity = 1;
if ($('.product-card').length > 0) {

    $(function() {

        quantity = parseInt($('.quantity input').val());


        $('.variant-select .item[data-value="' + $("#rozmiar").val() + '"]').addClass('active');
        updateCustomCart();

        $('.extra-product-data-input input').change(function() {
            updateExtraDataField();
        });

        $('.variant-select .item').click(function() {
            $('.variant-select .item').removeClass('active');
            $(this).addClass('active');
            document.getElementById('rozmiar').value = this.dataset.value;
            document.querySelector('.variations_form.cart').dispatchEvent(new Event('woocommerce_variation_select_change'));
            document.querySelector('.variations_form.cart').dispatchEvent(new Event('check_variations'));
            updateCustomCart();
        });

        $('.extra-product-data-input .checkbox').click(function() {
            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).parent().attr('data-value', 'checked');
            } else {
                $(this).parent().attr('data-value', '');
            }
            updateExtraDataField();
        });

        $('.extra-product-data-input.textarea .value').change(function() {
            updateExtraDataField();
            updateCustomCart();
        });

        // init quantity value
        $('#custom-quantity-display').html($('.quantity input').val());

        $('.quantity-select .control-item').click(function() {
            if ($(this).hasClass('inc')) {
                quantity++;
            }
            if ($(this).hasClass('dec')) {
                quantity--;
            }
            if (quantity <= 1) {
                quantity = 1;
            }
            updateCustomCart();
        });
        $('#custom-cart-button').click(function() {
            if (validateExtraData()) {
                $('#validation-info').html('');
                $('.single_add_to_cart_button').trigger('click');
            } else {
                $('#validation-info').html('<p class="error">Błąd, puste pola w dodatkowych parametrach</p>');
            }
        });

        $('#extra-image').change(function() {
            var file = document.getElementById('extra-image').files[0];
            getBase64(file);
        });

    });

}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        console.log(reader.result);
        var src = reader.result;
        var imageHTML = `<img src="${src}">`;
        $('#image-base64').html(imageHTML);
        $('#extra-photo-base64').val(src);
        updateExtraDataField();
    };
    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}

// Product card end






$(function() {

    var mySwiper = new Swiper('.hero .swiper-container', {
        // direction: 'vertical',
        // slidersPerView: 1,
        pagination: {
            el: '.hero .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    var productGallery = new Swiper('.gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.gallery .next',
            prevEl: '.gallery .prev',
        },
    });

});


$(function() {
    if ($('#gmap').length > 0) {
        gMap();
    }
});

function gMap() {
    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=&region=PL"></script>');
    var gMapLoader = setInterval(function() {
        if (typeof google == 'undefined') {
            // console.log('loading');
        } else {
            initMap();
            clearInterval(gMapLoader);
            // console.log('gmap loaded');
        }
    }, 10);
}

function initMap() {

    map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 14,
        center: { lat: 50.2799414, lng: 19.154919 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        styles: [],
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
    });

    var marker = new google.maps.Marker({
        position: { lat: 50.2799414, lng: 19.154919 },
        map: map,
    });

}


$(function() {
    if ($('.contact-form').length > 0) {
        initContactForm();
    }
});

function initContactForm() {
    $('head').append('<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>');

    var fields = [{
            name: 'your-firstname',
            pattern: /^[a-ząśćżźńół ]*$/i,
            required: true
        },
        {
            name: 'your-lastname',
            pattern: /^[a-ząśćżźńół ]*$/i,
            required: true
        },
        {
            name: 'your-email',
            pattern: 'email',
            required: true
        },
        {
            name: 'your-message',
            required: true
        },
        {
            name: 'your-phone',
            required: true
        },
        {
            name: 'your-date',
            required: true
        },
        {
            name: 'your-topic',
            required: true
        },
    ];

    $("#contact-form").formControl({
        fields: fields,
        validateOnTyping: true,
        highlightRequiredFields: false,
        onInvalidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").show();
        },
        onValidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").hide();
            $('#form-response').html('<p>Przesyłanie formularza</p>');
            var formData = objectifyForm($('#contact-form').serializeArray());
            var dataSending = {
                formData: formData,
                formType: 'contact'
            };
            $.ajax({
                type: 'POST',
                url: $('#contact-form').attr('action'),
                data: dataSending,
                success: function(response) {
                    console.log('response', response);
                    var result = JSON.parse(response);
                    console.log('result', result);
                    if (result.status == 200) {
                        console.info('Request has been ended successfully');
                        $('#contact-form').find("input[type=text], textarea").val("");
                        $('#form-response').html(result.data.message);
                        grecaptcha.reset();
                    } else {
                        console.info('Error occurred during processing request');
                        console.error(result.data.message);
                        $('#form-response').html(result.data.message);
                    }
                }
            });
            return false;
        }
    });

}


$(function() {
    if ($('#login-form').length > 0) {
        initLoginForm();
    }
});

function initLoginForm() {
    $('head').append('<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>');

    var fields = [{
            name: 'username',
            required: true
        },
        {
            name: 'password',
            required: true
        },
    ];

    $("#login-form").formControl({
        fields: fields,
        validateOnTyping: true,
        highlightRequiredFields: false,
        onInvalidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").show();
        },
        onValidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").hide();
        }
    });

}

$(function() {
    if ($('#register-form').length > 0) {
        initRegisterForm();
    }
});

function initRegisterForm() {
    $('head').append('<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>');

    var fields = [{
            name: 'billing_first_name',
            pattern: /^[a-ząśćżźńół ]*$/i,
            required: true
        },
        {
            name: 'billing_last_name',
            pattern: /^[a-ząśćżźńół ]*$/i,
            required: true
        },
        {
            name: 'email',
            pattern: 'email',
            required: true
        },
        // {
        //   name: 'password',
        //   required: true
        // },
    ];

    $("#register-form").formControl({
        fields: fields,
        validateOnTyping: true,
        highlightRequiredFields: false,
        onInvalidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").show();
        },
        onValidForm: function() {
            $("#contact-form > div.input-wrapper.submit > div:nth-child(3) > div").hide();
        }
    });

}

function objectifyForm(formArray) { //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

var onloadCallback = function() {

    widgetId1 = grecaptcha.render('example1', {
        'sitekey': '6LeTuMMUAAAAAOJuevTPd54gB3oWTfDYDZhKLBYB',
        'theme': 'light'
    });

};
jQuery(function($) {
    $(".taste-checkbox-custom").click(function() {
        $(".taste-ask .extra-product-data-input").not($(this).closest(".taste-ask .extra-product-data-input")).removeClass("actives");
        $(this).closest(".extra-product-data-input").toggleClass("actives");
    });

    $(".topper-checkbox").click(function() {
        $(".toppers-ask-block .extra-product-data-input").not($(this).closest(".toppers-ask-block .extra-product-data-input")).removeClass("actives");
        $(this).closest(".extra-product-data-input").toggleClass("actives");
        $(".toppers .extra-product-data-input").not($(this).closest(".toppers .extra-product-data-input")).removeClass("actives");
    });


    $(".taste-checkbox").click(function() {
        $(".smaki-grid .extra-product-data-input").not($(this).closest(".smaki-grid .extra-product-data-input")).removeClass("actives");
        $(this).closest(".extra-product-data-input").toggleClass("actives");
    });


    $(".size-checkbox").click(function() {
        $(".sizes .extra-product-data-input").not($(this).closest(".sizes .extra-product-data-input")).removeClass("actives");
        var extraProductDataInput = $(this).closest(".extra-product-data-input");
        if (!extraProductDataInput.hasClass("actives")) {
            // Убираем класс "actives" с других элементов
            $(".sizes .extra-product-data-input").not(extraProductDataInput).removeClass("actives");
            extraProductDataInput.addClass("actives");
        } else {
            // Предотвращаем снятие флажка с чекбокса
            return false;
        }
    });





});