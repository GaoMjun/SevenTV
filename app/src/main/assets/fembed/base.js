/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function e(t) {
        return null != t && t === t.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes),
            A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length;
                        while (s--)
                            h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","),
                        m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
            h = d.documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            y = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild],
                            a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }),
                s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ;
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u),
                r) {
                    l = we(v, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g);
                        while (y = e[h++])
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--,
                    o && x.push(f))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (y = t[h++])
                        y(x, b, a, s);
                    if (o) {
                        if (v > 0)
                            while (m--)
                                x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && ve(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(D).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== W && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : I)),
                        n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
        e.removeEventListener("load", _),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n)
                z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , X = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q
      , K = new Q
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                        ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = J.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            J.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement
      , we = /^key/
      , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t,
            n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ke),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            a = J.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e),
            u = w.extend({}, s),
            K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                l = i,
                f !== d && (l = w.clone(l, !0, !0),
                u && w.merge(s, ye(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                be.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t)in Ye)
                return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e),
        t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
        u
    }
    function et(e, t, n) {
        var r = $e(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ke(e, n, s)
            }
        }
    }),
    w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    w.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = tt.prototype.init,
    w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
        w.fx.tick())
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r],
            it.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r])
                        continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
            l = e.style.display || l,
            c = w.css(e, "display"),
            fe([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }),
                o && (y.hidden = !g),
                g && fe([e], !0),
                p.done(function() {
                    g || fe([e]),
                    J.remove(e, "fxshow");
                    for (r in d)
                        w.style(e, r, d[r])
                })),
                u = lt(g ? y[r] : 0, r, p),
                r in y || (y[r] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = w.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                pt.tweeners[n] = pt.tweeners[n] || [],
                pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        nt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    w.fx.stop = function() {
        rt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a],
            ht[a] = i,
            i = null != n(e, t, r) ? a : null,
            ht[a] = o),
            i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, mt(this)))
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/
      , Tt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[m] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m,
                    wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s,
                    t.type = a > 1 ? l : d.bindType || m,
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, Tt),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, Tt),
                w.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t);
                i || r.addEventListener(e, n, !0),
                J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
                J.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = Date.now()
      , kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Mt = /^(?:GET|HEAD)$/
      , Rt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}
          , o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            o = h.url.replace(Lt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ht, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = _t(Wt, h, n, E)) {
                if (E.readyState = 1,
                f && y.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = Xt(h, E, r)),
                b = Ut(h, b, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                l = !(d = b.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                E.statusCode(x),
                x = void 0,
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, C]),
                f && (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials"in Gt,
    h.ajax = Gt = !!Gt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Yt.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = A.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                We.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = N,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = G,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});

window.jwplayer = function(t) {
    function e(e) {
        for (var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++)
            i = o[a],
            r[i] && s.push(r[i][0]),
            r[i] = 0;
        for (n in u)
            Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
        for (c && c(e); s.length; )
            s.shift()()
    }
    var n = {}
      , r = {
        17: 0
    };
    function i(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(t) {
        var e = []
          , n = r[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var o = new Promise(function(e, i) {
                    n = r[t] = [e, i]
                }
                );
                e.push(n[2] = o);
                var u = document.getElementsByTagName("head")[0]
                  , a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 55,
                i.nc && a.setAttribute("nonce", i.nc),
                a.src = i.p + "" + ({
                    0: "related",
                    1: "provider.html5",
                    2: "jwplayer.controls",
                    3: "polyfills.intersection-observer",
                    4: "jwplayer.core",
                    5: "jwplayer.core.controls",
                    6: "jwplayer.core.controls.polyfills",
                    7: "jwplayer.core.controls.html5",
                    8: "jwplayer.core.controls.polyfills.html5",
                    9: "provider.flash",
                    10: "provider.hlsjs",
                    11: "provider.shaka",
                    12: "polyfills.webvtt",
                    13: "jwplayer.vr",
                    14: "provider.airplay",
                    15: "provider.cast",
                    16: "vttparser"
                }[t] || t) + ".js";
                a.src = 'jwplayer.core.controls.html5.js';
                var c = setTimeout(function() {
                    s({
                        type: "timeout",
                        target: a
                    })
                }, 55e3);
                function s(e) {
                    a.onerror = a.onload = null,
                    clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , o = e && e.target && e.target.src
                              , u = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
                            u.type = i,
                            u.request = o,
                            n[1](u)
                        }
                        r[t] = void 0
                    }
                }
                a.onerror = a.onload = s,
                u.appendChild(a)
            }
        return Promise.all(e)
    }
    ,
    i.m = t,
    i.c = n,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || []
      , u = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var a = 0; a < o.length; a++)
        e(o[a]);
    var c = u;
    return i(i.s = 60)
}([function(t, e, n) {
    "use strict";
    n.d(e, "i", function() {
        return k
    }),
    n.d(e, "A", function() {
        return x
    }),
    n.d(e, "F", function() {
        return S
    }),
    n.d(e, "l", function() {
        return _
    }),
    n.d(e, "k", function() {
        return N
    }),
    n.d(e, "a", function() {
        return I
    }),
    n.d(e, "b", function() {
        return L
    }),
    n.d(e, "G", function() {
        return D
    }),
    n.d(e, "n", function() {
        return V
    }),
    n.d(e, "H", function() {
        return Q
    }),
    n.d(e, "e", function() {
        return W
    }),
    n.d(e, "J", function() {
        return U
    }),
    n.d(e, "m", function() {
        return J
    }),
    n.d(e, "h", function() {
        return K
    }),
    n.d(e, "p", function() {
        return Y
    }),
    n.d(e, "c", function() {
        return $
    }),
    n.d(e, "C", function() {
        return et
    }),
    n.d(e, "I", function() {
        return it
    }),
    n.d(e, "q", function() {
        return at
    }),
    n.d(e, "g", function() {
        return ct
    }),
    n.d(e, "j", function() {
        return st
    }),
    n.d(e, "D", function() {
        return lt
    }),
    n.d(e, "w", function() {
        return dt
    }),
    n.d(e, "t", function() {
        return gt
    }),
    n.d(e, "v", function() {
        return mt
    }),
    n.d(e, "x", function() {
        return bt
    }),
    n.d(e, "s", function() {
        return yt
    }),
    n.d(e, "u", function() {
        return jt
    }),
    n.d(e, "r", function() {
        return wt
    }),
    n.d(e, "y", function() {
        return Ot
    }),
    n.d(e, "o", function() {
        return Ct
    }),
    n.d(e, "d", function() {
        return xt
    }),
    n.d(e, "E", function() {
        return Pt
    }),
    n.d(e, "B", function() {
        return St
    }),
    n.d(e, "z", function() {
        return Et
    });
    var r = n(16)
      , i = {}
      , o = Array.prototype
      , u = Object.prototype
      , a = Function.prototype
      , c = o.slice
      , s = o.concat
      , l = u.toString
      , f = u.hasOwnProperty
      , d = o.map
      , p = o.reduce
      , h = o.forEach
      , v = o.filter
      , g = o.every
      , m = o.some
      , b = o.indexOf
      , y = Array.isArray
      , j = Object.keys
      , w = a.bind
      , O = window.isFinite
      , k = function(t, e, n) {
        var r = void 0
          , o = void 0;
        if (null == t)
            return t;
        if (h && t.forEach === h)
            t.forEach(e, n);
        else if (t.length === +t.length) {
            for (r = 0,
            o = t.length; r < o; r++)
                if (e.call(n, t[r], r, t) === i)
                    return
        } else {
            var u = ot(t);
            for (r = 0,
            o = u.length; r < o; r++)
                if (e.call(n, t[u[r]], u[r], t) === i)
                    return
        }
        return t
    }
      , C = k
      , x = function(t, e, n) {
        var r = [];
        return null == t ? r : d && t.map === d ? t.map(e, n) : (k(t, function(t, i, o) {
            r.push(e.call(n, t, i, o))
        }),
        r)
    }
      , P = x
      , S = function(t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []),
        p && t.reduce === p)
            return r && (e = $(e, r)),
            i ? t.reduce(e, n) : t.reduce(e);
        if (k(t, function(t, o, u) {
            i ? n = e.call(r, n, t, o, u) : (n = t,
            i = !0)
        }),
        !i)
            throw new TypeError("Reduce of empty array with no initial value");
        return n
    }
      , T = S
      , E = S
      , _ = function(t, e, n) {
        var r = void 0;
        return L(t, function(t, i, o) {
            if (e.call(n, t, i, o))
                return r = t,
                !0
        }),
        r
    }
      , A = _
      , N = function(t, e, n) {
        var r = [];
        return null == t ? r : v && t.filter === v ? t.filter(e, n) : (k(t, function(t, i, o) {
            e.call(n, t, i, o) && r.push(t)
        }),
        r)
    }
      , M = N
      , I = function(t, e, n) {
        e || (e = Ct);
        var r = !0;
        return null == t ? r : g && t.every === g ? t.every(e, n) : (k(t, function(t, o, u) {
            if (!(r = r && e.call(n, t, o, u)))
                return i
        }),
        !!r)
    }
      , F = I
      , L = function(t, e, n) {
        e || (e = Ct);
        var r = !1;
        return null == t ? r : m && t.some === m ? t.some(e, n) : (k(t, function(t, o, u) {
            if (r || (r = e.call(n, t, o, u)))
                return i
        }),
        !!r)
    }
      , R = L
      , D = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : ot(t).length
    }
      , B = function(t, e) {
        var n = void 0;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)),
            t <= 1 && (e = null),
            n
        }
    }
      , z = function(t) {
        return null == t ? Ct : gt(t) ? t : Pt(t)
    }
      , q = function(t) {
        return function(e, n, r) {
            var i = {};
            return n = z(n),
            k(e, function(o, u) {
                var a = n.call(r, o, u, e);
                t(i, a, o)
            }),
            i
        }
    }
      , V = q(function(t, e, n) {
        kt(t, e) ? t[e].push(n) : t[e] = [n]
    })
      , X = q(function(t, e, n) {
        t[e] = n
    })
      , Q = function(t, e, n, r) {
        for (var i = (n = z(n)).call(r, e), o = 0, u = t.length; o < u; ) {
            var a = o + u >>> 1;
            n.call(r, t[a]) < i ? o = a + 1 : u = a
        }
        return o
    }
      , W = function(t, e) {
        return null != t && (t.length !== +t.length && (t = ut(t)),
        Y(t, e) >= 0)
    }
      , H = W
      , U = function(t, e) {
        return N(t, St(e))
    }
      , J = function(t, e) {
        return _(t, St(e))
    }
      , K = function(t) {
        var e = s.apply(o, c.call(arguments, 1));
        return N(t, function(t) {
            return !W(e, t)
        })
    }
      , Y = function(t, e, n) {
        if (null == t)
            return -1;
        var r = 0
          , i = t.length;
        if (n) {
            if ("number" != typeof n)
                return t[r = Q(t, e)] === e ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (b && t.indexOf === b)
            return t.indexOf(e, n);
        for (; r < i; r++)
            if (t[r] === e)
                return r;
        return -1
    }
      , G = function() {}
      , $ = function(t, e) {
        var n = void 0
          , r = void 0;
        if (w && t.bind === w)
            return w.apply(t, c.call(arguments, 1));
        if (!gt(t))
            throw new TypeError;
        return n = c.call(arguments, 2),
        r = function() {
            if (!(this instanceof r))
                return t.apply(e, n.concat(c.call(arguments)));
            G.prototype = t.prototype;
            var i = new G;
            G.prototype = null;
            var o = t.apply(i, n.concat(c.call(arguments)));
            return Object(o) === o ? o : i
        }
    }
      , Z = function(t) {
        var e = c.call(arguments, 1);
        return function() {
            for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++)
                kt(r[i], "partial") && (r[i] = arguments[n++]);
            for (; n < arguments.length; )
                r.push(arguments[n++]);
            return t.apply(this, r)
        }
    }
      , tt = Z(B, 2)
      , et = function(t, e) {
        var n = {};
        return e || (e = Ct),
        function() {
            var r = e.apply(this, arguments);
            return kt(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    }
      , nt = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }
      , rt = Z(nt, {
        partial: Z
    }, 1)
      , it = function(t, e, n) {
        var r = void 0
          , i = void 0
          , o = void 0
          , u = null
          , a = 0;
        n || (n = {});
        var c = function() {
            a = !1 === n.leading ? 0 : Tt(),
            u = null,
            o = t.apply(r, i),
            r = i = null
        };
        return function() {
            a || !1 !== n.leading || (a = Tt);
            var s = e - (Tt - a);
            return r = this,
            i = arguments,
            s <= 0 ? (clearTimeout(u),
            u = null,
            a = Tt,
            o = t.apply(r, i),
            r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)),
            o
        }
    }
      , ot = function(t) {
        if (!dt(t))
            return [];
        if (j)
            return j(t);
        var e = [];
        for (var n in t)
            kt(t, n) && e.push(n);
        return e
    }
      , ut = function(t) {
        for (var e = ot(t), n = ot.length, r = Array(n), i = 0; i < n; i++)
            r[i] = t[e[i]];
        return r
    }
      , at = function(t) {
        for (var e = {}, n = ot(t), r = 0, i = n.length; r < i; r++)
            e[t[n[r]]] = n[r];
        return e
    }
      , ct = function(t) {
        return k(c.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
      , st = Object.assign || function(t) {
        return k(c.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }),
        t
    }
      , lt = function(t) {
        var e = {}
          , n = s.apply(o, c.call(arguments, 1));
        return k(n, function(n) {
            n in t && (e[n] = t[n])
        }),
        e
    }
      , ft = y || function(t) {
        return "[object Array]" == l.call(t)
    }
      , dt = function(t) {
        return t === Object(t)
    }
      , pt = [];
    k(["Function", "String", "Number", "Date", "RegExp"], function(t) {
        pt[t] = function(e) {
            return l.call(e) == "[object " + t + "]"
        }
    }),
    pt.Function = function(t) {
        return "function" == typeof t
    }
    ;
    var ht = pt.Date
      , vt = pt.RegExp
      , gt = pt.Function
      , mt = pt.Number
      , bt = pt.String
      , yt = function(t) {
        return O(t) && !jt(parseFloat(t))
    }
      , jt = function(t) {
        return mt(t) && t != +t
    }
      , wt = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
    }
      , Ot = function(t) {
        return void 0 === t
    }
      , kt = function(t, e) {
        return f.call(t, e)
    }
      , Ct = function(t) {
        return t
    }
      , xt = function(t) {
        return function() {
            return t
        }
    }
      , Pt = function(t) {
        return function(e) {
            return e[t]
        }
    }
      , St = function(t) {
        return function(e) {
            if (e === t)
                return !0;
            for (var n in t)
                if (t[n] !== e[n])
                    return !1;
            return !0
        }
    }
      , Tt = r.a
      , Et = function(t) {
        return mt(t) && !jt(t)
    };
    e.f = {
        after: function(t, e) {
            return function() {
                if (--t < 1)
                    return e.apply(this, arguments)
            }
        },
        all: I,
        any: L,
        before: B,
        bind: $,
        clone: function(t) {
            return dt(t) ? ft(t) ? t.slice() : st({}, t) : t
        },
        collect: P,
        compact: function(t) {
            return N(t, Ct)
        },
        constant: xt,
        contains: W,
        defaults: ct,
        defer: rt,
        delay: nt,
        detect: A,
        difference: K,
        each: k,
        every: F,
        extend: st,
        filter: N,
        find: _,
        findWhere: J,
        foldl: T,
        forEach: C,
        groupBy: V,
        has: kt,
        identity: Ct,
        include: H,
        indexBy: X,
        indexOf: Y,
        inject: E,
        invert: at,
        isArray: ft,
        isBoolean: wt,
        isDate: ht,
        isFinite: yt,
        isFunction: gt,
        isNaN: jt,
        isNull: function(t) {
            return null === t
        },
        isNumber: mt,
        isObject: dt,
        isRegExp: vt,
        isString: bt,
        isUndefined: Ot,
        isValidNumber: Et,
        keys: ot,
        last: function(t, e, n) {
            if (null != t)
                return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
        },
        map: x,
        matches: St,
        max: function(t, e, n) {
            if (!e && ft(t) && t[0] === +t[0] && t.length < 65535)
                return Math.max.apply(Math, t);
            var r = -1 / 0
              , i = -1 / 0;
            return k(t, function(t, o, u) {
                var a = e ? e.call(n, t, o, u) : t;
                a > i && (r = t,
                i = a)
            }),
            r
        },
        memoize: et,
        now: Tt,
        omit: function(t) {
            var e = {}
              , n = s.apply(o, c.call(arguments, 1));
            for (var r in t)
                W(n, r) || (e[r] = t[r]);
            return e
        },
        once: tt,
        partial: Z,
        pick: lt,
        pluck: function(t, e) {
            return x(t, Pt(e))
        },
        property: Pt,
        propertyOf: function(t) {
            return null == t ? function() {}
            : function(e) {
                return t[e]
            }
        },
        reduce: S,
        reject: function(t, e, n) {
            return N(t, function(t, r, i) {
                return !e.call(n, t, r, i)
            }, n)
        },
        result: function(t, e) {
            if (null != t) {
                var n = t[e];
                return gt(n) ? n.call(t) : n
            }
        },
        select: M,
        size: D,
        some: R,
        sortedIndex: Q,
        throttle: it,
        where: U,
        without: function(t) {
            return K(t, c.call(arguments, 1))
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "y", function() {
        return o
    }),
    n.d(e, "x", function() {
        return u
    }),
    n.d(e, "w", function() {
        return a
    }),
    n.d(e, "t", function() {
        return c
    }),
    n.d(e, "u", function() {
        return s
    }),
    n.d(e, "a", function() {
        return l
    }),
    n.d(e, "c", function() {
        return f
    }),
    n.d(e, "v", function() {
        return d
    }),
    n.d(e, "d", function() {
        return p
    }),
    n.d(e, "h", function() {
        return h
    }),
    n.d(e, "e", function() {
        return v
    }),
    n.d(e, "k", function() {
        return g
    }),
    n.d(e, "i", function() {
        return m
    }),
    n.d(e, "j", function() {
        return b
    }),
    n.d(e, "b", function() {
        return x
    }),
    n.d(e, "f", function() {
        return P
    }),
    n.d(e, "g", function() {
        return S
    }),
    n.d(e, "o", function() {
        return T
    }),
    n.d(e, "l", function() {
        return E
    }),
    n.d(e, "m", function() {
        return _
    }),
    n.d(e, "n", function() {
        return A
    }),
    n.d(e, "p", function() {
        return N
    }),
    n.d(e, "q", function() {
        return M
    }),
    n.d(e, "r", function() {
        return I
    }),
    n.d(e, "s", function() {
        return F
    }),
    n.d(e, "A", function() {
        return L
    }),
    n.d(e, "z", function() {
        return R
    }),
    n.d(e, "B", function() {
        return D
    });
    var r = n(0)
      , i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }();
    var o = 1e5
      , u = 100001
      , a = 100002
      , c = 101e3
      , s = 102e3
      , l = 200001
      , f = 202e3
      , d = 104e3
      , p = 203e3
      , h = 203640
      , v = 204e3
      , g = 210001
      , m = 21e4
      , b = 214e3
      , y = 303200
      , j = 303210
      , w = 303212
      , O = 303213
      , k = 303220
      , C = 303230
      , x = 306e3
      , P = 308e3
      , S = 308640
      , T = "cantPlayVideo"
      , E = "badConnection"
      , _ = "cantLoadPlayer"
      , A = "cantPlayInBrowser"
      , N = "liveStreamDown"
      , M = "protectedContent"
      , I = "technicalError"
      , F = function() {
        function t(e, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.code = Object(r.z)(n) ? n : 0,
            this.sourceError = i,
            e && (this.key = e)
        }
        return i(t, null, [{
            key: "logMessage",
            value: function(t) {
                var e = t % 1e3
                  , n = Math.floor((t - e) / 1e3)
                  , r = t;
                return e >= 400 && e < 600 && (r = n + "400-" + n + "599"),
                "JW Player " + (t > 299999 && t < 4e5 ? "Warning" : "Error") + " " + t + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
            }
        }]),
        t
    }();
    function L(t, e, n) {
        return n instanceof F && n.code ? n : new F(t,e,n)
    }
    function R(t, e) {
        var n = L(I, e, t);
        return n.code = (t && t.code || 0) + e,
        n
    }
    function D(t) {
        var e = t.name
          , n = t.message;
        switch (e) {
        case "AbortError":
            return /pause/.test(n) ? O : /load/.test(n) ? w : j;
        case "NotAllowedError":
            return k;
        case "NotSupportedError":
            return C;
        default:
            return y
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return o
    }),
    n.d(e, "d", function() {
        return u
    }),
    n.d(e, "i", function() {
        return a
    }),
    n.d(e, "a", function() {
        return c
    }),
    n.d(e, "b", function() {
        return s
    }),
    n.d(e, "f", function() {
        return l
    }),
    n.d(e, "c", function() {
        return f
    }),
    n.d(e, "e", function() {
        return d
    }),
    n.d(e, "g", function() {
        return p
    });
    var r = n(0)
      , i = window.parseFloat;
    function o(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
    function u(t, e, n) {
        for (t = "" + t,
        n = n || "0"; t.length < e; )
            t = n + t;
        return t
    }
    function a(t, e) {
        for (var n = t.attributes, r = 0; r < n.length; r++)
            if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase())
                return n[r].value.toString();
        return ""
    }
    function c(t) {
        if (!t || "rtmp" === t.substr(0, 4))
            return "";
        var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
        return e ? e[1] : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0
    }
    function s(t) {
        var e = (t / 60 | 0) % 60
          , n = t % 60;
        return u(t / 3600 | 0, 2) + ":" + u(e, 2) + ":" + u(n.toFixed(3), 6)
    }
    function l(t, e) {
        if (!t)
            return 0;
        if (Object(r.z)(t))
            return t;
        var n = t.replace(",", ".")
          , o = n.slice(-1)
          , u = n.split(":")
          , a = u.length
          , c = 0;
        if ("s" === o)
            c = i(n);
        else if ("m" === o)
            c = 60 * i(n);
        else if ("h" === o)
            c = 3600 * i(n);
        else if (a > 1) {
            var s = a - 1;
            4 === a && (e && (c = i(u[s]) / e),
            s -= 1),
            c += i(u[s]),
            c += 60 * i(u[s - 1]),
            a >= 3 && (c += 3600 * i(u[s - 2]))
        } else
            c = i(n);
        return Object(r.z)(c) ? c : 0
    }
    function f(t, e, n) {
        if (Object(r.x)(t) && "%" === t.slice(-1)) {
            var o = i(t);
            return e && Object(r.z)(e) && Object(r.z)(o) ? e * o / 100 : null
        }
        return l(t, n)
    }
    function d(t, e) {
        return t.map(function(t) {
            return e + t
        })
    }
    function p(t, e) {
        return t.map(function(t) {
            return t + e
        })
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "Ja", function() {
        return r
    }),
    n.d(e, "Ma", function() {
        return i
    }),
    n.d(e, "Ka", function() {
        return o
    }),
    n.d(e, "Oa", function() {
        return u
    }),
    n.d(e, "Pa", function() {
        return a
    }),
    n.d(e, "La", function() {
        return c
    }),
    n.d(e, "Na", function() {
        return s
    }),
    n.d(e, "Qa", function() {
        return l
    }),
    n.d(e, "s", function() {
        return f
    }),
    n.d(e, "u", function() {
        return d
    }),
    n.d(e, "t", function() {
        return p
    }),
    n.d(e, "n", function() {
        return h
    }),
    n.d(e, "q", function() {
        return v
    }),
    n.d(e, "Ra", function() {
        return g
    }),
    n.d(e, "r", function() {
        return m
    }),
    n.d(e, "Y", function() {
        return b
    }),
    n.d(e, "V", function() {
        return y
    }),
    n.d(e, "v", function() {
        return j
    }),
    n.d(e, "X", function() {
        return w
    }),
    n.d(e, "w", function() {
        return O
    }),
    n.d(e, "Ta", function() {
        return k
    }),
    n.d(e, "a", function() {
        return C
    }),
    n.d(e, "b", function() {
        return x
    }),
    n.d(e, "c", function() {
        return P
    }),
    n.d(e, "d", function() {
        return S
    }),
    n.d(e, "e", function() {
        return T
    }),
    n.d(e, "h", function() {
        return E
    }),
    n.d(e, "F", function() {
        return _
    }),
    n.d(e, "Ga", function() {
        return A
    }),
    n.d(e, "P", function() {
        return N
    }),
    n.d(e, "C", function() {
        return M
    }),
    n.d(e, "B", function() {
        return I
    }),
    n.d(e, "E", function() {
        return F
    }),
    n.d(e, "p", function() {
        return L
    }),
    n.d(e, "Ba", function() {
        return R
    }),
    n.d(e, "m", function() {
        return D
    }),
    n.d(e, "G", function() {
        return B
    }),
    n.d(e, "H", function() {
        return z
    }),
    n.d(e, "M", function() {
        return q
    }),
    n.d(e, "N", function() {
        return V
    }),
    n.d(e, "Q", function() {
        return X
    }),
    n.d(e, "Ia", function() {
        return Q
    }),
    n.d(e, "Aa", function() {
        return W
    }),
    n.d(e, "D", function() {
        return H
    }),
    n.d(e, "R", function() {
        return U
    }),
    n.d(e, "O", function() {
        return J
    }),
    n.d(e, "S", function() {
        return K
    }),
    n.d(e, "U", function() {
        return Y
    }),
    n.d(e, "L", function() {
        return G
    }),
    n.d(e, "K", function() {
        return $
    }),
    n.d(e, "I", function() {
        return Z
    }),
    n.d(e, "J", function() {
        return tt
    }),
    n.d(e, "T", function() {
        return et
    }),
    n.d(e, "o", function() {
        return nt
    }),
    n.d(e, "y", function() {
        return rt
    }),
    n.d(e, "Ha", function() {
        return it
    }),
    n.d(e, "Ca", function() {
        return ot
    }),
    n.d(e, "Da", function() {
        return ut
    }),
    n.d(e, "f", function() {
        return at
    }),
    n.d(e, "g", function() {
        return ct
    }),
    n.d(e, "Z", function() {
        return st
    }),
    n.d(e, "A", function() {
        return lt
    }),
    n.d(e, "l", function() {
        return ft
    }),
    n.d(e, "k", function() {
        return dt
    }),
    n.d(e, "Ea", function() {
        return pt
    }),
    n.d(e, "Fa", function() {
        return ht
    }),
    n.d(e, "Sa", function() {
        return vt
    }),
    n.d(e, "z", function() {
        return gt
    }),
    n.d(e, "j", function() {
        return mt
    }),
    n.d(e, "W", function() {
        return bt
    }),
    n.d(e, "i", function() {
        return yt
    }),
    n.d(e, "x", function() {
        return jt
    });
    var r = "buffering"
      , i = "idle"
      , o = "complete"
      , u = "paused"
      , a = "playing"
      , c = "error"
      , s = "loading"
      , l = "stalled"
      , f = "drag"
      , d = "dragStart"
      , p = "dragEnd"
      , h = "click"
      , v = "doubleClick"
      , g = "tap"
      , m = "doubleTap"
      , b = "over"
      , y = "move"
      , j = "enter"
      , w = "out"
      , O = c
      , k = "warning"
      , C = "adClick"
      , x = "adPause"
      , P = "adPlay"
      , S = "adSkipped"
      , T = "adTime"
      , E = "autostartNotAllowed"
      , _ = o
      , A = "ready"
      , N = "seek"
      , M = "beforePlay"
      , I = "beforeComplete"
      , F = "bufferFull"
      , L = "displayClick"
      , R = "playlistComplete"
      , D = "cast"
      , B = "mediaError"
      , z = "firstFrame"
      , q = "playAttempt"
      , V = "playAttemptFailed"
      , X = "seeked"
      , Q = "setupError"
      , W = "state"
      , H = "bufferChange"
      , U = "time"
      , J = "ratechange"
      , K = "mediaType"
      , Y = "volume"
      , G = "mute"
      , $ = "meta"
      , Z = "levels"
      , tt = "levelsChanged"
      , et = "visualQuality"
      , nt = "controls"
      , rt = "fullscreen"
      , it = "resize"
      , ot = "playlistItem"
      , ut = "playlist"
      , at = "audioTracks"
      , ct = "audioTrackChanged"
      , st = "playbackRateChanged"
      , lt = "logoClick"
      , ft = "captionsList"
      , dt = "captionsChanged"
      , pt = "providerChanged"
      , ht = "providerFirstFrame"
      , vt = "userAction"
      , gt = "instreamClick"
      , mt = "breakpoint"
      , bt = "fullscreenchange"
      , yt = "bandwidthEstimate"
      , jt = "float"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return i
    }),
    n.d(e, "d", function() {
        return o
    }),
    n.d(e, "a", function() {
        return u
    }),
    n.d(e, "c", function() {
        return a
    });
    var r = n(2);
    function i(t) {
        var e = "";
        return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)),
        e
    }
    function o(t) {
        var e = "";
        return t && (t.textContent ? e = Object(r.h)(t.textContent) : t.text && (e = Object(r.h)(t.text))),
        e
    }
    function u(t, e) {
        return t.childNodes[e]
    }
    function a(t) {
        return t.childNodes ? t.childNodes.length : 0
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return o
    }),
    n.d(e, "d", function() {
        return u
    }),
    n.d(e, "b", function() {
        return a
    }),
    n.d(e, "e", function() {
        return c
    }),
    n.d(e, "f", function() {
        return s
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , i = [].slice;
    function o(t, e, n) {
        if (!f(this, "on", t, [e, n]) || !e)
            return this;
        var r = this._events || (this._events = {});
        return (r[t] || (r[t] = [])).push({
            callback: e,
            context: n
        }),
        this
    }
    function u(t, e, n) {
        if (!f(this, "once", t, [e, n]) || !e)
            return this;
        var r = 0
          , i = this
          , o = function n() {
            r++ || (i.off(t, n),
            e.apply(this, arguments))
        };
        return o._callback = e,
        this.on(t, o, n)
    }
    function a(t, e, n) {
        if (!this._events || !f(this, "off", t, [e, n]))
            return this;
        if (!t && !e && !n)
            return delete this._events,
            this;
        for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
            t = r[i];
            var u = this._events[t];
            if (u) {
                var a = this._events[t] = [];
                if (e || n)
                    for (var c = 0, s = u.length; c < s; c++) {
                        var l = u[c];
                        (e && e !== l.callback && e !== l.callback._callback || n && n !== l.context) && a.push(l)
                    }
                a.length || delete this._events[t]
            }
        }
        return this
    }
    function c(t) {
        if (!this._events)
            return this;
        var e = i.call(arguments, 1);
        if (!f(this, "trigger", t, e))
            return this;
        var n = this._events[t]
          , r = this._events.all;
        return n && d(n, e, this),
        r && d(r, arguments, this),
        this
    }
    function s(t) {
        if (!this._events)
            return this;
        var e = i.call(arguments, 1);
        if (!f(this, "trigger", t, e))
            return this;
        var n = this._events[t]
          , r = this._events.all;
        return n && d(n, e, this, t),
        r && d(r, arguments, this, t),
        this
    }
    var l = /\s+/;
    function f(t, e, n, i) {
        if (!n)
            return !0;
        if ("object" === (void 0 === n ? "undefined" : r(n))) {
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && t[e].apply(t, [o, n[o]].concat(i));
            return !1
        }
        if (l.test(n)) {
            for (var u = n.split(l), a = 0, c = u.length; a < c; a++)
                t[e].apply(t, [u[a]].concat(i));
            return !1
        }
        return !0
    }
    function d(t, e, n, r) {
        for (var i = -1, o = t.length; ++i < o; ) {
            var u = t[i];
            if (r)
                try {
                    u.callback.apply(u.context || n, e)
                } catch (t) {
                    console.log('Error in "' + r + '" event handler:', t)
                }
            else
                u.callback.apply(u.context || n, e)
        }
    }
    e.a = {
        on: o,
        once: u,
        off: a,
        trigger: c
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return u
    }),
    n.d(e, "f", function() {
        return a
    }),
    n.d(e, "l", function() {
        return s
    }),
    n.d(e, "k", function() {
        return l
    }),
    n.d(e, "p", function() {
        return f
    }),
    n.d(e, "g", function() {
        return d
    }),
    n.d(e, "e", function() {
        return p
    }),
    n.d(e, "n", function() {
        return h
    }),
    n.d(e, "d", function() {
        return v
    }),
    n.d(e, "i", function() {
        return g
    }),
    n.d(e, "q", function() {
        return m
    }),
    n.d(e, "j", function() {
        return b
    }),
    n.d(e, "c", function() {
        return y
    }),
    n.d(e, "b", function() {
        return j
    }),
    n.d(e, "o", function() {
        return w
    }),
    n.d(e, "m", function() {
        return O
    }),
    n.d(e, "a", function() {
        return k
    });
    var r = navigator.userAgent;
    function i(t) {
        return null !== r.match(t)
    }
    function o(t) {
        return function() {
            return i(t)
        }
    }
    function u() {
        var t = k();
        return !!(t && t >= 18)
    }
    var a = o(/gecko\//i)
      , c = o(/trident\/.+rv:\s*11/i)
      , s = o(/iP(hone|od)/i)
      , l = o(/iPad/i)
      , f = o(/Macintosh/i)
      , d = o(/FBAV/i);
    function p() {
        return i(/\sEdge\/\d+/i)
    }
    function h() {
        return i(/msie/i)
    }
    function v() {
        return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !p() && !i(/UCBrowser/i)
    }
    function g() {
        return p() || c() || h()
    }
    function m() {
        return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i)
    }
    function b() {
        return i(/iP(hone|ad|od)/i)
    }
    function y() {
        return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !a()) && j()
    }
    function j() {
        return i(/Android/i) && !i(/Windows Phone/i)
    }
    function w() {
        return b() || j() || i(/Windows Phone/i)
    }
    function O() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }
    function k() {
        if (j())
            return 0;
        var t = navigator.plugins
          , e = void 0;
        if (t && (e = t["Shockwave Flash"]) && e.description)
            return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                    return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (t) {
                return 0
            }
            return e
        }
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(6);
    function i(t, e) {
        if (t && t.length > e)
            return t[e]
    }
    var o = n(0);
    n.d(e, "Browser", function() {
        return a
    }),
    n.d(e, "OS", function() {
        return c
    }),
    n.d(e, "Features", function() {
        return s
    });
    var u = navigator.userAgent;
    var a = {}
      , c = {}
      , s = {};
    Object.defineProperties(a, {
        androidNative: {
            get: Object(o.C)(r.c),
            enumerable: !0
        },
        chrome: {
            get: Object(o.C)(r.d),
            enumerable: !0
        },
        edge: {
            get: Object(o.C)(r.e),
            enumerable: !0
        },
        facebook: {
            get: Object(o.C)(r.g),
            enumerable: !0
        },
        firefox: {
            get: Object(o.C)(r.f),
            enumerable: !0
        },
        ie: {
            get: Object(o.C)(r.i),
            enumerable: !0
        },
        msie: {
            get: Object(o.C)(r.n),
            enumerable: !0
        },
        safari: {
            get: Object(o.C)(r.q),
            enumerable: !0
        },
        version: {
            get: Object(o.C)(function(t, e) {
                var n = void 0
                  , r = void 0
                  , i = void 0
                  , o = void 0;
                return t.chrome ? n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6) : t.safari ? n = e.substring(e.indexOf("Version") + 8) : t.firefox ? n = e.substring(e.indexOf("Firefox") + 8) : t.edge ? n = e.substring(e.indexOf("Edge") + 5) : t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5))),
                n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)),
                -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)),
                -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)),
                r = parseInt(n, 10),
                i = parseInt(n.split(".")[1], 10)),
                {
                    version: n,
                    major: r,
                    minor: i
                }
            }
            .bind(void 0, a, u)),
            enumerable: !0
        }
    }),
    Object.defineProperties(c, {
        android: {
            get: Object(o.C)(r.b),
            enumerable: !0
        },
        iOS: {
            get: Object(o.C)(r.j),
            enumerable: !0
        },
        mobile: {
            get: Object(o.C)(r.o),
            enumerable: !0
        },
        mac: {
            get: Object(o.C)(r.p),
            enumerable: !0
        },
        iPad: {
            get: Object(o.C)(r.k),
            enumerable: !0
        },
        iPhone: {
            get: Object(o.C)(r.l),
            enumerable: !0
        },
        windows: {
            get: Object(o.C)(function() {
                return u.indexOf("Windows") > -1
            }),
            enumerable: !0
        },
        version: {
            get: Object(o.C)(function(t, e) {
                var n = void 0
                  , r = void 0
                  , o = void 0;
                if (t.windows)
                    switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(e), 1)) {
                    case "6.1":
                        n = "7.0";
                        break;
                    case "6.2":
                        n = "8.0";
                        break;
                    case "6.3":
                        n = "8.1"
                    }
                else
                    t.android ? n = i(/Android ([._\d]+)/.exec(e), 1) : t.iOS ? n = i(/OS ([._\d]+)/.exec(e), 1) : t.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(e), 1));
                if (n) {
                    r = parseInt(n, 10);
                    var u = n.split(/[._]/);
                    u && (o = parseInt(u[1], 10))
                }
                return {
                    version: n,
                    major: r,
                    minor: o
                }
            }
            .bind(void 0, c, u)),
            enumerable: !0
        }
    }),
    Object.defineProperties(s, {
        flash: {
            get: Object(o.C)(r.h),
            enumerable: !0
        },
        flashVersion: {
            get: Object(o.C)(r.a),
            enumerable: !0
        },
        iframe: {
            get: Object(o.C)(r.m),
            enumerable: !0
        },
        passiveEvents: {
            get: Object(o.C)(function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            return t = !0
                        }
                    });
                    window.addEventListener("testPassive", null, e),
                    window.removeEventListener("testPassive", null, e)
                } catch (t) {}
                return t
            }),
            enumerable: !0
        },
        backgroundLoading: {
            get: Object(o.C)(function() {
                return !(c.iOS || a.safari)
            }),
            enumerable: !0
        }
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return l
    }),
    n.d(e, "d", function() {
        return f
    }),
    n.d(e, "b", function() {
        return d
    }),
    n.d(e, "c", function() {
        return p
    });
    var r = n(28)
      , i = n(29)
      , o = n(15)
      , u = n(14)
      , a = n(38)
      , c = n(1)
      , s = null
      , l = {};
    function f(t) {
        return s || (s = function(t) {
            var e = t.get("controls")
              , s = h()
              , f = function(t, e) {
                var n = t.get("playlist");
                if (Array.isArray(n) && n.length)
                    for (var u = Object(i.c)(Object(r.a)(n[0]), t), a = 0; a < u.length; a++)
                        for (var c = u[a], s = t.getProviders(), l = 0; l < o.a.length; l++) {
                            var f = o.a[l];
                            if (s.providerSupports(f, c))
                                return f.name === e
                        }
                return !1
            }(t, "html5");
            if (e && s && f)
                return function() {
                    var t = n.e(8).then(function(t) {
                        n(36);
                        var e = n(20).default;
                        return a.a.controls = n(21).default,
                        Object(u.a)(n(128).default),
                        e
                    }
                    .bind(null, n)).catch(d(c.t + 105));
                    return l.html5 = t,
                    t
                }();
            if (e && f)
                return function() {
                    var t = n.e(7).then(function(t) {
                        var e = n(20).default;
                        return a.a.controls = n(21).default,
                        Object(u.a)(n(128).default),
                        e
                    }
                    .bind(null, n)).catch(d(c.t + 104));
                    return l.html5 = t,
                    t
                }();
            if (e && s)
                return n.e(6).then(function(t) {
                    n(36);
                    var e = n(20).default;
                    return a.a.controls = n(21).default,
                    e
                }
                .bind(null, n)).catch(d(c.t + 103));
            if (e)
                return n.e(5).then(function(t) {
                    var e = n(20).default;
                    return a.a.controls = n(21).default,
                    e
                }
                .bind(null, n)).catch(d(c.t + 102));
            return (h() ? n.e(3).then(function(t) {
                return n(36)
            }
            .bind(null, n)).catch(d(c.t + 120)) : Promise.resolve()).then(function() {
                return n.e(4).then(function(t) {
                    return n(20).default
                }
                .bind(null, n)).catch(d(c.t + 101))
            })
        }(t)),
        s
    }
    function d(t, e) {
        return function() {
            throw new c.s(c.m,t,e)
        }
    }
    function p(t, e) {
        return function() {
            throw new c.s(null,t,e)
        }
    }
    function h() {
        var t = window.IntersectionObserverEntry;
        return !(t && "IntersectionObserver"in window && "intersectionRatio"in t.prototype)
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "exists", function() {
        return i
    }),
    n.d(e, "isHTTPS", function() {
        return o
    }),
    n.d(e, "isRtmp", function() {
        return u
    }),
    n.d(e, "isYouTube", function() {
        return a
    }),
    n.d(e, "typeOf", function() {
        return c
    }),
    n.d(e, "isDeepKeyCompliant", function() {
        return s
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    function i(t) {
        switch (void 0 === t ? "undefined" : r(t)) {
        case "string":
            return t.length > 0;
        case "object":
            return null !== t;
        case "undefined":
            return !1;
        default:
            return !0
        }
    }
    function o() {
        return "https:" === window.location.protocol
    }
    function u(t, e) {
        return 0 === t.indexOf("rtmp:") || "rtmp" === e
    }
    function a(t, e) {
        return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
    }
    function c(t) {
        if (null === t)
            return "null";
        var e = void 0 === t ? "undefined" : r(t);
        return "object" === e && Array.isArray(t) ? "array" : e
    }
    function s(t, e, n) {
        var i = Object.keys(t);
        return Object.keys(e).length >= i.length && i.every(function(i) {
            var o = t[i]
              , u = e[i];
            return o && "object" === (void 0 === o ? "undefined" : r(o)) ? !(!u || "object" !== (void 0 === u ? "undefined" : r(u))) && s(o, u, n) : n(i, t)
        })
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return o
    }),
    n.d(e, "e", function() {
        return u
    }),
    n.d(e, "o", function() {
        return a
    }),
    n.d(e, "d", function() {
        return l
    }),
    n.d(e, "a", function() {
        return f
    }),
    n.d(e, "l", function() {
        return d
    }),
    n.d(e, "m", function() {
        return p
    }),
    n.d(e, "p", function() {
        return h
    }),
    n.d(e, "n", function() {
        return v
    }),
    n.d(e, "g", function() {
        return g
    }),
    n.d(e, "b", function() {
        return m
    }),
    n.d(e, "f", function() {
        return b
    }),
    n.d(e, "c", function() {
        return y
    }),
    n.d(e, "j", function() {
        return j
    }),
    n.d(e, "i", function() {
        return w
    }),
    n.d(e, "k", function() {
        return O
    });
    var r = n(2)
      , i = n(0);
    function o(t, e) {
        return t.classList.contains(e)
    }
    function u(t) {
        var e = document.createElement("div");
        return e.innerHTML = t,
        e.firstChild
    }
    function a(t) {
        return t + (t.toString().indexOf("%") > 0 ? "" : "px")
    }
    function c(t) {
        return Object(i.x)(t.className) ? t.className.split(" ") : []
    }
    function s(t, e) {
        e = Object(r.h)(e),
        t.className !== e && (t.className = e)
    }
    function l(t) {
        return t.classList ? t.classList : c(t)
    }
    function f(t, e) {
        var n = c(t);
        (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
            Object(i.e)(n, t) || n.push(t)
        }),
        s(t, n.join(" "))
    }
    function d(t, e) {
        var n = c(t)
          , r = Array.isArray(e) ? e : e.split(" ");
        s(t, Object(i.h)(n, r).join(" "))
    }
    function p(t, e, n) {
        var r = t.className || "";
        e.test(r) ? r = r.replace(e, n) : n && (r += " " + n),
        s(t, r)
    }
    function h(t, e, n) {
        var r = o(t, e);
        (n = Object(i.r)(n) ? n : !r) !== r && (n ? f(t, e) : d(t, e))
    }
    function v(t, e, n) {
        t.setAttribute(e, n)
    }
    function g(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild)
    }
    function m(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet",
        e.href = t,
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function b(t) {
        t && g(t)
    }
    function y(t) {
        var e = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!t || !document.body.contains(t))
            return e;
        var n = t.getBoundingClientRect()
          , r = window.pageYOffset
          , i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (e.left = n.left + i,
        e.right = n.right + i,
        e.top = n.top + r,
        e.bottom = n.bottom + r,
        e.width = n.right - n.left,
        e.height = n.bottom - n.top,
        e) : e
    }
    function j(t, e) {
        t.insertBefore(e, t.firstChild)
    }
    function w(t) {
        return t.nextElementSibling
    }
    function O(t) {
        return t.previousElementSibling
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "getAbsolutePath", function() {
        return o
    }),
    n.d(e, "isAbsolutePath", function() {
        return u
    }),
    n.d(e, "parseXML", function() {
        return c
    }),
    n.d(e, "serialize", function() {
        return s
    }),
    n.d(e, "parseDimension", function() {
        return l
    }),
    n.d(e, "timeFormat", function() {
        return f
    });
    var r = n(9)
      , i = n(0);
    function o(t, e) {
        if (Object(r.exists)(e) || (e = document.location.href),
        Object(r.exists)(t)) {
            if (u(t))
                return t;
            var n = e.substring(0, e.indexOf("://") + 3)
              , i = e.substring(n.length, e.indexOf("/", n.length + 1))
              , o = void 0;
            if (0 === t.indexOf("/"))
                o = t.split("/");
            else {
                var a = e.split("?")[0];
                o = (a = a.substring(n.length + i.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
            }
            for (var c = [], s = 0; s < o.length; s++)
                o[s] && Object(r.exists)(o[s]) && "." !== o[s] && (".." === o[s] ? c.pop() : c.push(o[s]));
            return n + i + "/" + c.join("/")
        }
    }
    function u(t) {
        return /^(?:(?:https?|file):)?\/\//.test(t)
    }
    function a(t) {
        return Object(i.b)(t, function(t) {
            return "parsererror" === t.nodeName
        })
    }
    function c(t) {
        var e = null;
        try {
            (a((e = (new window.DOMParser).parseFromString(t, "text/xml")).childNodes) || e.childNodes && a(e.childNodes[0].childNodes)) && (e = null)
        } catch (t) {}
        return e
    }
    function s(t) {
        if (void 0 === t)
            return null;
        if ("string" == typeof t && t.length < 6) {
            var e = t.toLowerCase();
            if ("true" === e)
                return !0;
            if ("false" === e)
                return !1;
            if (!Object(i.u)(Number(t)) && !Object(i.u)(parseFloat(t)))
                return Number(t)
        }
        return t
    }
    function l(t) {
        return "string" == typeof t ? "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10) : t
    }
    function f(t, e) {
        if (t <= 0 && !e || Object(i.u)(parseInt(t)))
            return "00:00";
        var n = t < 0 ? "-" : "";
        t = Math.abs(t);
        var r = Math.floor(t / 3600)
          , o = Math.floor((t - 3600 * r) / 60)
          , u = Math.floor(t % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return i
    }),
    n.d(e, "c", function() {
        return o
    }),
    n.d(e, "a", function() {
        return u
    });
    var r = n(0)
      , i = function(t) {
        return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
    };
    function o(t) {
        var e = 305e3;
        if (!t)
            return e;
        switch (i(t)) {
        case "jwpsrv":
            e = 305001;
            break;
        case "googima":
            e = 305002;
            break;
        case "vast":
            e = 305003;
            break;
        case "freewheel":
            e = 305004;
            break;
        case "dai":
            e = 305005;
            break;
        case "gapro":
            e = 305006
        }
        return e
    }
    function u(t, e, n) {
        var i = t.name
          , o = document.createElement("div");
        o.id = n.id + "_" + i,
        o.className = "jw-plugin jw-reset";
        var u = Object(r.j)({}, e)
          , a = t.getNewInstance(n, u, o);
        return n.addPlugin(i, a),
        a
    }
}
, function(t, e, n) {
    "use strict";
    e.a = []
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    });
    var r = n(34)
      , i = n(15)
      , o = n(55)
      , u = n(0);
    function a(t) {
        var e = t.getName().name;
        if (!r.a[e]) {
            if (!Object(u.l)(i.a, Object(u.B)({
                name: e
            }))) {
                if (!Object(u.t)(t.supports))
                    throw new Error("Tried to register a provider with an invalid object");
                i.a.unshift({
                    name: e,
                    supports: t.supports
                })
            }
            Object(u.g)(t.prototype, o.a),
            r.a[e] = t
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(32)
      , i = n(7)
      , o = n(17)
      , u = n(0)
      , a = n(9)
      , c = n(37)
      , s = Object(u.l)(r.a, Object(u.B)({
        name: "html5"
    }))
      , l = s.supports;
    function f(t) {
        var e = window.MediaSource;
        return Object(u.a)(t, function(t) {
            return !!e && !!e.isTypeSupported && e.isTypeSupported(t)
        })
    }
    s.supports = function(t, e) {
        var n = l.apply(this, arguments);
        if (n && t.drm && "hls" === t.type) {
            var r = Object(o.a)(e)("drm");
            if (r && t.drm.fairplay) {
                var i = window.WebKitMediaKeys;
                return i && i.isTypeSupported && i.isTypeSupported("com.apple.fps.1_0", "video/mp4")
            }
            return r
        }
        return n
    }
    ,
    r.a.push({
        name: "shaka",
        supports: function(t) {
            return !(t.drm && !Object(c.a)(t.drm)) && (!(!window.HTMLVideoElement || !window.MediaSource) && (f(t.mediaTypes) && ("dash" === t.type || "mpd" === t.type || (t.file || "").indexOf("mpd-time-csf") > -1)))
        }
    }),
    r.a.splice(0, 0, {
        name: "hlsjs",
        supports: function(t) {
            if (t.drm)
                return !1;
            var e = t.file.indexOf(".m3u8") > -1
              , n = "hls" === t.type || "m3u8" === t.type;
            if (!e && !n)
                return !1;
            var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major
              , o = i.OS.android && !1 === t.hlsjsdefault
              , u = i.Browser.safari && !!t.safarihlsjs;
            return f(t.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (r || u) && !o
        }
    }),
    r.a.push({
        name: "flash",
        supports: function(t) {
            if (!i.Features.flash || t.drm)
                return !1;
            var e = t.type;
            return "hls" === e || "m3u8" === e || !Object(a.isRtmp)(t.file, e) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(e) > -1
        }
    }),
    e.a = r.a
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = Date.now || function() {
        return (new Date).getTime()
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return p
    });
    var r = "free"
      , i = "starter"
      , o = "business"
      , u = "premium"
      , a = "enterprise"
      , c = "platinum"
      , s = "ads"
      , l = "unlimited"
      , f = "trial"
      , d = "invalid";
    function p(t) {
        var e = {
            setup: [r, i, o, u, a, s, l, f, c],
            drm: [a, s, l, f],
            ads: [s, l, f, c, a],
            jwpsrv: [],
            discovery: [s, a, f, l]
        };
        return function(n) {
            return e[n] && e[n].indexOf(t) > -1
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "getScriptPath", function() {
        return i
    }),
    n.d(e, "repo", function() {
        return o
    }),
    n.d(e, "versionCheck", function() {
        return u
    }),
    n.d(e, "loadFrom", function() {
        return a
    });
    var r = n(31)
      , i = function(t) {
        for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
            var r = e[n].src;
            if (r) {
                var i = r.lastIndexOf("/" + t);
                if (i >= 0)
                    return r.substr(0, i + 1)
            }
        }
        return ""
    }
      , o = function() {
        var t = "/asset/default/player/";
        return "" + ("file:" === window.location.protocol ? "https:" : "") + t
    }
      , u = function(t) {
        var e = ("0" + t).split(/\W/)
          , n = r.a.split(/\W/)
          , i = parseFloat(e[0])
          , o = parseFloat(n[0]);
        return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
    }
      , a = function() {
        return o()
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
        return p
    }),
    n.d(e, "b", function() {
        return h
    }),
    n.d(e, "e", function() {
        return g
    }),
    n.d(e, "g", function() {
        return b
    }),
    n.d(e, "c", function() {
        return y
    }),
    n.d(e, "f", function() {
        return j
    }),
    n.d(e, "h", function() {
        return w
    }),
    n.d(e, "a", function() {
        return O
    });
    var r = n(0)
      , i = n(6)
      , o = n(27)
      , u = n(9)
      , a = n(39)
      , c = {}
      , s = {
        zh: "Chinese",
        nl: "Dutch",
        en: "English",
        fr: "French",
        de: "German",
        it: "Italian",
        ja: "Japanese",
        pt: "Portuguese",
        ru: "Russian",
        es: "Spanish",
        el: "Greek"
    }
      , l = Object(r.q)(s);
    function f(t) {
        var e = d(t)
          , n = e.indexOf("_");
        return -1 === n ? e : e.substring(0, n)
    }
    function d(t) {
        return t.toLowerCase().replace("-", "_")
    }
    function p(t) {
        if (t)
            return 3 === t.length ? t : s[f(t)] || t
    }
    function h(t) {
        return l[t] || ""
    }
    function v(t) {
        var e = t.querySelector("html");
        return e ? e.getAttribute("lang") : null
    }
    function g() {
        var t = v(document);
        if (!t && Object(i.m)())
            try {
                t = v(window.top.document)
            } catch (t) {}
        return t || navigator.language || "en"
    }
    var m = ["ar", "da", "de", "es", "fr", "it", "ja", "nl", "no", "pt", "ro", "sv", "tr", "zh"];
    function b(t) {
        return m.indexOf(f(t)) >= 0
    }
    function y(t, e, n) {
        return e = function(t) {
            return Object.keys(t).reduce(function(e, n) {
                return e[d(n)] = t[n],
                e
            }, {})
        }(e),
        Object(r.j)({}, t, e[f(n)], e[d(n)])
    }
    function j(t) {
        return Object(u.isDeepKeyCompliant)(a.a, t, function(t, e) {
            return "string" == typeof e[t]
        })
    }
    function w(t, e) {
        var n = c[e];
        if (!n) {
            var r = t + "translations/" + f(e) + ".json";
            c[e] = n = new Promise(function(t, n) {
                Object(o.a)({
                    url: r,
                    oncomplete: t,
                    onerror: function(t, r, i, o) {
                        c[e] = null,
                        n(o)
                    },
                    responseType: "json"
                })
            }
            )
        }
        return n
    }
    function O(t, e) {
        var n = Object(r.j)({}, t, e);
        return k(n, "errors", t, e),
        k(n, "related", t, e),
        k(n, "sharing", t, e),
        k(n, "advertising", t, e),
        n
    }
    function k(t, e, n, i) {
        t[e] = Object(r.j)({}, n[e], i[e])
    }
}
, , , function(t, e, n) {
    "use strict";
    e.a = {
        debug: !1
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    }),
    n.d(e, "b", function() {
        return c
    }),
    n.d(e, "d", function() {
        return s
    }),
    n.d(e, "e", function() {
        return d
    }),
    n.d(e, "c", function() {
        return h
    });
    var r = n(2)
      , i = n(41)
      , o = n.n(i)
      , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , a = o.a.clear;
    function c(t, e, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" === (void 0 === e ? "undefined" : u(e))) {
            var a = document.createElement("div");
            s(a, e);
            var c = a.style.cssText;
            r && c && (c = c.replace(/;/g, " !important;")),
            i = "{" + c + "}"
        } else
            "string" == typeof e && (i = e);
        "" !== i && "{}" !== i ? o.a.style([[t, t + i]], n) : o.a.clear(n, t)
    }
    function s(t, e) {
        if (void 0 !== t && null !== t) {
            void 0 === t.length && (t = [t]);
            var n = void 0
              , r = {};
            for (n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
            for (var i = 0; i < t.length; i++) {
                var o = t[i]
                  , u = void 0;
                if (void 0 !== o && null !== o)
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (u = l(n),
                        o.style[u] !== r[n] && (o.style[u] = r[n]))
            }
        }
    }
    function l(t) {
        t = t.split("-");
        for (var e = 1; e < t.length; e++)
            t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
        return t.join("")
    }
    function f(t, e) {
        return "" === e || void 0 === e || null === e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + Object(r.d)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px"
    }
    function d(t, e) {
        s(t, {
            transform: e,
            webkitTransform: e,
            msTransform: e,
            mozTransform: e,
            oTransform: e
        })
    }
    var p = void 0;
    function h(t, e) {
        var n = "rgb"
          , r = void 0 !== e && 100 !== e;
        if (r && (n += "a"),
        !p) {
            var i = document.createElement("canvas");
            i.height = 1,
            i.width = 1,
            p = i.getContext("2d")
        }
        t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000",
        p.clearRect(0, 0, 1, 1),
        p.fillStyle = t,
        p.fillRect(0, 0, 1, 1);
        var o = p.getImageData(0, 0, 1, 1).data;
        return n += "(" + o[0] + ", " + o[1] + ", " + o[2],
        r && (n += ", " + e / 100),
        n + ")"
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(5)
      , o = n(3)
      , u = {}
      , a = 45e3
      , c = 2
      , s = 3;
    function l(t) {
        var e = document.createElement("link");
        return e.type = "text/css",
        e.rel = "stylesheet",
        e.href = t,
        e
    }
    function f(t) {
        var e = document.createElement("script");
        return e.type = "text/javascript",
        e.charset = "utf-8",
        e.async = !0,
        e.timeout = a,
        e.src = t,
        e
    }
    var d = function(t, e) {
        var n = this
          , r = 0;
        function i(t) {
            r = c,
            n.trigger(o.w, t).off()
        }
        function d(t) {
            r = s,
            n.trigger(o.Ka, t).off()
        }
        this.getStatus = function() {
            return r
        }
        ,
        this.load = function() {
            var n = u[t];
            return 0 !== r ? n : (n && n.then(d).catch(i),
            r = 1,
            n = new Promise(function(n, r) {
                var o = (e ? l : f)(t)
                  , u = function() {
                    o.onerror = o.onload = null,
                    clearTimeout(s)
                }
                  , c = function(t) {
                    u(),
                    i(t),
                    r(t)
                }
                  , s = setTimeout(function() {
                    c(new Error("Network timeout " + t))
                }, a);
                o.onerror = function() {
                    c(new Error("Failed to load " + t))
                }
                ,
                o.onload = function(t) {
                    u(),
                    d(t),
                    n(t)
                }
                ;
                var p = document.getElementsByTagName("head")[0] || document.documentElement;
                p.insertBefore(o, p.firstChild)
            }
            ),
            u[t] = n,
            n)
        }
    };
    Object(r.j)(d.prototype, i.a),
    e.a = d
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , i = n(12)
      , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , u = function() {
        this.load = function(t, e, n, u) {
            return n && "object" === (void 0 === n ? "undefined" : o(n)) ? Promise.all(Object.keys(n).filter(function(t) {
                return t
            }).map(function(o) {
                var a = n[o];
                return e.setupPlugin(o).then(function(e) {
                    if (!u.attributes._destroyed)
                        return Object(i.a)(e, a, t)
                }).catch(function(t) {
                    return e.removePlugin(o),
                    t.code ? t : new r.s(null,Object(i.c)(o),t)
                })
            })) : Promise.resolve()
        }
    }
      , a = n(48)
      , c = n(47)
      , s = {}
      , l = function() {}
      , f = l.prototype;
    f.setupPlugin = function(t) {
        var e = this.getPlugin(t);
        return e ? (e.url !== t && Object(c.a)('JW Plugin "' + Object(i.b)(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'),
        e.promise) : this.addPlugin(t).load()
    }
    ,
    f.addPlugin = function(t) {
        var e = Object(i.b)(t)
          , n = s[e];
        return n || (n = new a.a(t),
        s[e] = n),
        n
    }
    ,
    f.getPlugin = function(t) {
        return s[Object(i.b)(t)]
    }
    ,
    f.removePlugin = function(t) {
        delete s[Object(i.b)(t)]
    }
    ,
    f.getPlugins = function() {
        return s
    }
    ;
    var d = l;
    n.d(e, "b", function() {
        return h
    }),
    n.d(e, "a", function() {
        return v
    });
    var p = new d
      , h = function(t, e, n) {
        var r = p.addPlugin(t);
        r.js || r.registerPlugin(t, e, n)
    };
    function v(t, e) {
        var n = t.get("plugins");
        return window.jwplayerPluginJsonp = h,
        (t.pluginLoader = t.pluginLoader || new u).load(e, p, n, t).then(function(e) {
            if (!t.attributes._destroyed)
                return delete window.jwplayerPluginJsonp,
                e
        })
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    });
    var r = n(46)
      , i = n(17)
      , o = n(44)
      , u = n(1)
      , a = 100013;
    e.b = function(t) {
        var e = "enterprise"
          , n = void 0
          , c = void 0;
        this.edition = function() {
            return e
        }
        ,
        this.token = function() {
            return n
        }
        ,
        this.expiration = function() {
            return c
        }
        ,
        this.duration = function() {
            return 0
        }
        ,
        this.error = function() {
            return null
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return g
    });
    var r = n(0)
      , i = n(11)
      , o = n(1)
      , u = 1
      , a = 2
      , c = 3
      , s = 4
      , l = 5
      , f = 6
      , d = 601
      , p = 602
      , h = 611
      , v = function() {};
    function g(t, e, n, d) {
        t === Object(t) && (t = (d = t).url);
        var j = void 0
          , w = Object(r.j)({
            xhr: null,
            url: t,
            withCredentials: !1,
            retryWithoutCredentials: !1,
            timeout: 6e4,
            timeoutId: -1,
            oncomplete: e || v,
            onerror: n || v,
            mimeType: d && !d.responseType ? "text/xml" : "",
            requireValidXML: !1,
            responseType: d && d.plainText ? "text" : "",
            useDomParser: !1,
            requestFilter: null
        }, d)
          , O = function(t, e) {
            return function(t, n) {
                var i = t.currentTarget || e.xhr;
                if (clearTimeout(e.timeoutId),
                e.retryWithoutCredentials && e.xhr.withCredentials) {
                    m(i);
                    var u = Object(r.j)({}, e, {
                        xhr: null,
                        withCredentials: !1,
                        retryWithoutCredentials: !1
                    });
                    g(u)
                } else
                    !n && i.status >= 400 && i.status < 600 && (n = i.status),
                    b(e, n ? o.o : o.r, n || f, t)
            }
        }(0, w);
        if ("XMLHttpRequest"in window) {
            if (j = w.xhr = w.xhr || new window.XMLHttpRequest,
            "function" == typeof w.requestFilter) {
                var k = void 0;
                try {
                    k = w.requestFilter({
                        url: t,
                        xhr: j
                    })
                } catch (t) {
                    return O(t, l),
                    j
                }
                k && "open"in k && "send"in k && (j = w.xhr = k)
            }
            j.onreadystatechange = function(t) {
                return function(e) {
                    var n = e.currentTarget || t.xhr;
                    if (4 === n.readyState) {
                        if (clearTimeout(t.timeoutId),
                        n.status >= 400)
                            return void b(t, o.o, n.status < 600 ? n.status : f);
                        if (200 === n.status)
                            return function(t) {
                                return function(e) {
                                    var n = e.currentTarget || t.xhr;
                                    if (clearTimeout(t.timeoutId),
                                    t.responseType) {
                                        if ("json" === t.responseType)
                                            return function(t, e) {
                                                if (!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1))
                                                    try {
                                                        t = Object(r.j)({}, t, {
                                                            response: JSON.parse(t.responseText)
                                                        })
                                                    } catch (t) {
                                                        return void b(e, o.o, h, t)
                                                    }
                                                return e.oncomplete(t)
                                            }(n, t)
                                    } else {
                                        var u = n.responseXML
                                          , a = void 0;
                                        if (u)
                                            try {
                                                a = u.firstChild
                                            } catch (t) {}
                                        if (u && a)
                                            return y(n, u, t);
                                        if (t.useDomParser && n.responseText && !u && (u = Object(i.parseXML)(n.responseText)) && u.firstChild)
                                            return y(n, u, t);
                                        if (t.requireValidXML)
                                            return void b(t, o.o, p)
                                    }
                                    t.oncomplete(n)
                                }
                            }(t)(e)
                    }
                }
            }(w),
            j.onerror = O,
            "overrideMimeType"in j ? w.mimeType && j.overrideMimeType(w.mimeType) : w.useDomParser = !0;
            try {
                t = t.replace(/#.*$/, ""),
                t = "zh.json";
                j.open("GET", t, !0)
            } catch (t) {
                return O(t, c),
                j
            }
            if (w.responseType)
                try {
                    j.responseType = w.responseType
                } catch (t) {}
            w.timeout && (w.timeoutId = setTimeout(function() {
                m(j),
                b(w, o.r, u)
            }, w.timeout),
            j.onabort = function() {
                clearTimeout(w.timeoutId)
            }
            );
            try {
                w.withCredentials && "withCredentials"in j && (j.withCredentials = !0),
                j.send()
            } catch (t) {
                O(t, s)
            }
            return j
        }
        b(w, o.r, a)
    }
    function m(t) {
        t.onload = null,
        t.onprogress = null,
        t.onreadystatechange = null,
        t.onerror = null,
        "abort"in t && t.abort()
    }
    function b(t, e, n, r) {
        t.onerror(e, t.url, t.xhr, new o.s(e,n,r))
    }
    function y(t, e, n) {
        var i = e.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length)
            return t.responseXML || (t = Object(r.j)({}, t, {
                responseXML: e
            })),
            n.oncomplete(t);
        b(n, o.o, d)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(33)
      , o = function(t) {
        if (t && t.file)
            return Object(r.j)({}, {
                kind: "captions",
                default: !1
            }, t)
    }
      , u = Array.isArray;
    e.a = function(t) {
        u((t = t || {}).tracks) || delete t.tracks;
        var e = Object(r.j)({}, {
            sources: [],
            tracks: [],
            minDvrWindow: 120,
            dvrSeekLimit: 25
        }, t);
        e.dvrSeekLimit < 5 && (e.dvrSeekLimit = 5),
        e.sources !== Object(e.sources) || u(e.sources) || (e.sources = [Object(i.a)(e.sources)]),
        u(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
        for (var n = 0; n < e.sources.length; n++) {
            var a = e.sources[n];
            if (a) {
                var c = a.default;
                a.default = !!c && "true" === c.toString(),
                e.sources[n].label || (e.sources[n].label = n.toString()),
                e.sources[n] = Object(i.a)(e.sources[n])
            }
        }
        return e.sources = e.sources.filter(function(t) {
            return !!t
        }),
        u(e.tracks) || (e.tracks = []),
        u(e.captions) && (e.tracks = e.tracks.concat(e.captions),
        delete e.captions),
        e.tracks = e.tracks.map(o).filter(function(t) {
            return !!t
        }),
        e
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = {
        none: !0,
        metadata: !0,
        auto: !0
    };
    function o(t, e) {
        return i[t] ? t : i[e] ? e : "metadata"
    }
    var u = n(28)
      , a = n(33)
      , c = n(42)
      , s = n(1);
    n.d(e, "b", function() {
        return l
    }),
    n.d(e, "e", function() {
        return f
    }),
    n.d(e, "d", function() {
        return d
    }),
    n.d(e, "c", function() {
        return p
    });
    function l(t, e, n) {
        return delete Object(r.j)({}, n).playlist,
        t.map(function(t) {
            return d(e, t, n)
        }).filter(function(t) {
            return !!t
        })
    }
    function f(t) {
        if (!Array.isArray(t) || 0 === t.length)
            throw new s.s(s.o,630)
    }
    function d(t, e, n) {
        var i = t.getProviders()
          , u = t.get("preload")
          , a = Object(r.j)({}, e);
        if (a.preload = o(e.preload, u),
        a.allSources = h(e, t),
        a.sources = v(a.allSources, i),
        a.sources.length)
            return a.file = a.sources[0].file,
            a.feedData = n,
            a
    }
    var p = function(t, e) {
        return v(h(t, e), e.getProviders())
    };
    function h(t, e) {
        var n = e.attributes
          , r = t.sources
          , i = t.allSources
          , u = t.preload
          , c = t.drm
          , s = g(t.withCredentials, n.withCredentials);
        return (i || r).map(function(t) {
            if (t !== Object(t))
                return null;
            m(t, n, "androidhls"),
            m(t, n, "hlsjsdefault"),
            m(t, n, "safarihlsjs"),
            t.preload = o(t.preload, u);
            var e = t.drm || c || n.drm;
            e && (t.drm = e);
            var r = g(t.withCredentials, s);
            return void 0 !== r && (t.withCredentials = r),
            Object(a.a)(t)
        }).filter(function(t) {
            return !!t
        })
    }
    function v(t, e) {
        e && e.choose || (e = new c.a);
        var n = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                  , i = e.choose(r)
                  , o = i.providerToCheck;
                if (o)
                    return {
                        type: r.type,
                        provider: o
                    }
            }
            return null
        }(t, e);
        if (!n)
            return [];
        var r = n.provider
          , i = n.type;
        return t.filter(function(t) {
            return t.type === i && e.providerSupports(r, t)
        })
    }
    function g(t, e) {
        return void 0 === t ? e : t
    }
    function m(t, e, n) {
        n in e && (t[n] = e[n])
    }
    e.a = function(t) {
        return (Array.isArray(t) ? t : [t]).map(u.a)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(16)
      , o = window.performance || {
        timing: {}
    }
      , u = o.timing.navigationStart || Object(i.a)();
    function a() {
        return u + o.now()
    }
    "now"in o || (o.now = function() {
        return Object(i.a)() - u
    }
    );
    e.a = function() {
        var t = {}
          , e = {}
          , n = {}
          , i = {};
        return {
            start: function(e) {
                t[e] = a(),
                n[e] = n[e] + 1 || 1
            },
            end: function(n) {
                if (t[n]) {
                    var r = a() - t[n];
                    delete t[n],
                    e[n] = e[n] + r || r
                }
            },
            dump: function() {
                var o = Object(r.j)({}, e);
                for (var u in t)
                    if (Object.prototype.hasOwnProperty.call(t, u)) {
                        var c = a() - t[u];
                        o[u] = o[u] + c || c
                    }
                return {
                    counts: Object(r.j)({}, n),
                    sums: o,
                    events: Object(r.j)({}, i)
                }
            },
            tick: function(t) {
                i[t] = a()
            },
            clear: function(t) {
                delete i[t]
            },
            between: function(t, e) {
                return i[e] && i[t] ? i[e] - i[t] : null
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = "8.6.2+commercial_v8-6-2.295.commercial.54a805c.hlsjs..jwplayer.cb419c0.dai.f0547f4.freewheel.31a10c7.googima.182acac.vast.993be40.analytics.3dadfbd.gapro.f664e4e.related.6aa5ac5"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return c
    });
    var r = n(59)
      , i = n(9)
      , o = n(40)
      , u = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl"
    }
      , a = [{
        name: "html5",
        supports: c
    }];
    function c(t) {
        if (!1 === Object(r.a)(t))
            return !1;
        if (!o.a.canPlayType)
            return !1;
        var e = t.file
          , n = t.type;
        if (Object(i.isRtmp)(e, n))
            return !1;
        var a = t.mimeType || u[n];
        if (!a)
            return !1;
        var c = t.mediaTypes;
        return c && c.length && (a = [a].concat(c.slice()).join("; ")),
        !!o.a.canPlayType(a)
    }
    e.a = a
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(9)
      , o = n(2);
    e.a = function(t) {
        if (t && t.file) {
            var e = Object(r.j)({}, {
                default: !1
            }, t);
            e.file = Object(o.h)("" + e.file);
            var n = /^[^/]+\/(?:x-)?([^/]+)$/;
            if (n.test(e.type) && (e.mimeType = e.type,
            e.type = e.type.replace(n, "$1")),
            Object(i.isYouTube)(e.file) ? e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = Object(o.a)(e.file)),
            e.type) {
                switch (e.type) {
                case "m3u8":
                case "vnd.apple.mpegurl":
                    e.type = "hls";
                    break;
                case "dash+xml":
                    e.type = "dash";
                    break;
                case "m4a":
                    e.type = "aac";
                    break;
                case "smil":
                    e.type = "rtmp"
                }
                return Object.keys(e).forEach(function(t) {
                    "" === e[t] && delete e[t]
                }),
                e
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.a = {}
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return x
    });
    var r = n(7)
      , i = n(3)
      , o = n(51)
      , u = n(16)
      , a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , c = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , s = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var i = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === i) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, n, r)
        }
        if ("value"in i)
            return i.value;
        var u = i.get;
        return void 0 !== u ? u.call(r) : void 0
    };
    var l = "ontouchstart"in window
      , f = "PointerEvent"in window && !r.OS.android
      , d = !(f || l && r.OS.mobile)
      , p = "window"
      , h = r.Features.passiveEvents
      , v = !!h && {
        passive: !0
    }
      , g = 6
      , m = 300
      , b = 500
      , y = void 0
      , j = function(t) {
        function e(t, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
              , i = !(n = n || {}).preventScrolling;
            return r.directSelect = !!n.directSelect,
            r.dragged = !1,
            r.enableDoubleTap = !1,
            r.el = t,
            r.handlers = {},
            r.lastClick = 0,
            r.lastStart = 0,
            r.passive = i,
            r.pointerId = null,
            r.startX = 0,
            r.startY = 0,
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, o["a"]),
        c(e, [{
            key: "on",
            value: function(t, n, r) {
                return O(t) && (this.handlers[t] || C[t](this)),
                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "on", this).call(this, t, n, r)
            }
        }, {
            key: "off",
            value: function(t, n, r) {
                var i = this;
                if (O(t))
                    S(this, t);
                else if (!t) {
                    var o = this.handlers;
                    Object.keys(o).forEach(function(t) {
                        S(i, t)
                    })
                }
                return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "off", this).call(this, t, n, r)
            }
        }, {
            key: "destroy",
            value: function() {
                this.off(),
                f && T(this),
                this.el = null
            }
        }]),
        e
    }();
    e.a = j;
    var w = /\s+/;
    function O(t) {
        return t && !(w.test(t) || "object" === (void 0 === t ? "undefined" : a(t)))
    }
    function k(t) {
        if (!t.handlers.init) {
            var e = t.el
              , n = t.passive
              , r = !!h && {
                passive: n
            }
              , o = function(i) {
                if (!function(t) {
                    if ("which"in t)
                        return 3 === t.which;
                    if ("button"in t)
                        return 2 === t.button;
                    return !1
                }(i)) {
                    var o = i.target
                      , s = i.type;
                    if (!t.directSelect || o === e) {
                        var l = A(i)
                          , f = l.pageX
                          , d = l.pageY;
                        if (t.dragged = !1,
                        t.lastStart = Object(u.a)(),
                        t.startX = f,
                        t.startY = d,
                        S(t, p),
                        "pointerdown" === s && i.isPrimary) {
                            if (!n) {
                                var h = i.pointerId;
                                t.pointerId = h,
                                e.setPointerCapture(h)
                            }
                            P(t, p, "pointermove", a, r),
                            P(t, p, "pointercancel", c),
                            P(t, p, "pointerup", c)
                        } else
                            "mousedown" === s ? (P(t, p, "mousemove", a, r),
                            P(t, p, "mouseup", c)) : "touchstart" === s && (P(t, p, "touchmove", a, r),
                            P(t, p, "touchcancel", c),
                            P(t, p, "touchend", c),
                            n || N(i))
                    }
                }
            }
              , a = function(e) {
                if (t.dragged)
                    _(t, i.s, e);
                else {
                    var r = A(e)
                      , o = r.pageX
                      , u = r.pageY
                      , a = o - t.startX
                      , c = u - t.startY;
                    a * a + c * c > g * g && (_(t, i.u, e),
                    t.dragged = !0,
                    _(t, i.s, e))
                }
                n || "touchmove" !== e.type || N(e)
            }
              , c = function(n) {
                if (clearTimeout(y),
                T(t),
                S(t, p),
                t.dragged)
                    t.dragged = !1,
                    _(t, i.t, n);
                else if (-1 === n.type.indexOf("cancel") && e.contains(n.target)) {
                    if (Object(u.a)() - t.lastStart > b)
                        return;
                    var r = "pointerup" === n.type || "pointercancel" === n.type
                      , o = "mouseup" === n.type || r && "mouse" === n.pointerType;
                    !function(t, e, n) {
                        if (t.enableDoubleTap)
                            if (Object(u.a)() - t.lastClick < m) {
                                var r = n ? i.q : i.r;
                                _(t, r, e),
                                t.lastClick = 0
                            } else
                                t.lastClick = Object(u.a)()
                    }(t, n, o),
                    o ? _(t, i.n, n) : (_(t, i.Ra, n),
                    "touchend" !== n.type || h || N(n))
                }
            };
            f ? P(t, "init", "pointerdown", o, r) : (d && P(t, "init", "mousedown", o, r),
            P(t, "init", "touchstart", o, r))
        }
    }
    var C = {
        drag: function(t) {
            k(t)
        },
        dragStart: function(t) {
            k(t)
        },
        dragEnd: function(t) {
            k(t)
        },
        click: function(t) {
            k(t)
        },
        tap: function(t) {
            k(t)
        },
        doubleTap: function(t) {
            t.enableDoubleTap = !0,
            k(t)
        },
        doubleClick: function(t) {
            t.enableDoubleTap = !0,
            k(t)
        },
        longPress: function(t) {
            if (r.OS.iOS) {
                var e = function() {
                    clearTimeout(y)
                };
                P(t, "longPress", "touchstart", function(n) {
                    e(),
                    y = setTimeout(function() {
                        _(t, "longPress", n)
                    }, b)
                }),
                P(t, "longPress", "touchmove", e),
                P(t, "longPress", "touchcancel", e),
                P(t, "longPress", "touchend", e)
            } else
                t.el.oncontextmenu = function(e) {
                    return _(t, "longPress", e),
                    !1
                }
        },
        focus: function(t) {
            P(t, "focus", "focus", function(e) {
                E(t, "focus", e)
            })
        },
        blur: function(t) {
            P(t, "blur", "blur", function(e) {
                E(t, "blur", e)
            })
        },
        over: function(t) {
            (f || d) && P(t, i.Y, f ? "pointerover" : "mouseover", function(e) {
                "touch" !== e.pointerType && _(t, i.Y, e)
            })
        },
        out: function(t) {
            if (f) {
                var e = t.el;
                P(t, i.X, "pointerout", function(n) {
                    if ("touch" !== n.pointerType && "x"in n) {
                        var r = document.elementFromPoint(n.x, n.y);
                        e.contains(r) || _(t, i.X, n)
                    }
                })
            } else
                d && P(t, i.X, "mouseout", function(e) {
                    _(t, i.X, e)
                })
        },
        move: function(t) {
            (f || d) && P(t, i.V, f ? "pointermove" : "mousemove", function(e) {
                "touch" !== e.pointerType && _(t, i.V, e)
            })
        },
        enter: function(t) {
            P(t, i.v, "keydown", function(e) {
                "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(),
                E(t, i.v, e))
            })
        },
        gesture: function(t) {
            var e = function(e) {
                return _(t, "gesture", e)
            };
            P(t, "gesture", "click", e),
            P(t, "gesture", "keydown", e)
        }
    };
    function x(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || window
    }
    function P(t, e, n, r, i) {
        var o = t.handlers[e];
        if (o || (o = t.handlers[e] = {}),
        o[n])
            throw new Error(e + " " + n + " already registered");
        o[n] = r;
        var u = t.el;
        (e === p ? x(u) : u).addEventListener(n, r, i || v)
    }
    function S(t, e) {
        var n = t.el
          , r = t.handlers
          , i = e === p ? x(n) : n
          , o = r[e];
        o && (Object.keys(o).forEach(function(t) {
            i.removeEventListener(t, o[t])
        }),
        r[e] = null)
    }
    function T(t) {
        var e = t.el;
        null !== t.pointerId && (e.releasePointerCapture(t.pointerId),
        t.pointerId = null)
    }
    function E(t, e, n) {
        var r = t.el
          , i = n.target;
        t.trigger(e, {
            type: e,
            sourceEvent: n,
            currentTarget: r,
            target: i
        })
    }
    function _(t, e, n) {
        var r = function(t, e, n) {
            var r = e.target
              , i = e.touches
              , o = e.changedTouches
              , u = e.pointerType
              , a = void 0;
            i || o ? (a = i && i.length ? i[0] : o[0],
            u = u || "touch") : (a = e,
            u = u || "mouse");
            var c = a
              , s = c.pageX
              , l = c.pageY;
            return {
                type: t,
                pointerType: u,
                pageX: s,
                pageY: l,
                sourceEvent: e,
                currentTarget: n,
                target: r
            }
        }(e, n, t.el);
        t.trigger(e, r)
    }
    function A(t) {
        return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
    }
    function N(t) {
        t.preventDefault && t.preventDefault()
    }
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return c
    }),
    n.d(e, "d", function() {
        return s
    }),
    n.d(e, "c", function() {
        return l
    }),
    n.d(e, "a", function() {
        return f
    });
    var r = n(17)
      , i = [{
        configName: "clearkey",
        keyName: "org.w3.clearkey"
    }, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
    }, {
        configName: "playready",
        keyName: "com.microsoft.playready"
    }]
      , o = []
      , u = {}
      , a = void 0;
    function c(t) {
        return t.some(function(t) {
            return !!t.drm || t.sources.some(function(t) {
                return !!t.drm
            })
        })
    }
    function s(t) {
        return a || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(r.a)(t)("drm") ? (i.forEach(function(t) {
            var e = function(t, e) {
                return navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(t, e) : new Promise(function(e, n) {
                    var r = void 0;
                    try {
                        r = new window.MSMediaKeys(t)
                    } catch (t) {
                        return void n(t)
                    }
                    e(r)
                }
                )
            }(t.keyName, [{
                initDataTypes: ["cenc"],
                videoCapabilities: [{
                    contentType: 'video/mp4;codecs="avc1.4d401e"'
                }],
                audioCapabilities: [{
                    contentType: 'audio/mp4;codecs="mp4a.40.2"'
                }]
            }]).then(function() {
                u[t.configName] = !0
            }).catch(function() {
                u[t.configName] = !1
            });
            o.push(e)
        }),
        a = Promise.all(o)) : Promise.resolve())
    }
    function l(t) {
        return u[t]
    }
    function f(t) {
        if (a)
            return Object.keys(t).some(function(t) {
                return l(t)
            })
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }),
    n.d(e, "b", function() {
        return u
    });
    var r = n(8)
      , i = null
      , o = {};
    function u() {
        return i || (i = n.e(2).then(function(t) {
            var e = n(21).default;
            return o.controls = e,
            e
        }
        .bind(null, n)).catch(function() {
            i = null,
            Object(r.c)(301130)()
        })),
        i
    }
}
, function(t, e, n) {
    "use strict";
    e.a = {
        advertising: {
            admessage: "This ad will end in xx",
            cuetext: "Advertisement",
            loadingAd: "Loading ad",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",
            skipmessage: "Skip ad in xx",
            skiptext: "Skip",
            displayHeading: "Advertisement"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
            badConnection: "This video cannot be played because of a problem with your internet connection.",
            cantLoadPlayer: "Sorry, the video player failed to load.",
            cantPlayInBrowser: "The video cannot be played in this browser.",
            cantPlayVideo: "This video file cannot be played.",
            errorCode: "Error Code",
            liveStreamDown: "The live stream is either down or has ended.",
            protectedContent: "There was a problem providing access to protected content.",
            technicalError: "This video cannot be played because of a technical error."
        },
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        playlist: "Playlist",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
            autoplaymessage: "Next up in xx",
            heading: "More Videos"
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
            copied: "Copied",
            email: "Email",
            embed: "Embed",
            heading: "Share",
            link: "Link"
        },
        slider: "Seek Slider",
        stop: "Stop",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume Slider"
    }
}
, function(t, e, n) {
    "use strict";
    var r = document.createElement("video");
    e.a = r
}
, function(t, e) {
    var n = {}
      , r = {}
      , i = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)),
            e
        }
    }(function() {
        return document.head || document.getElementsByTagName("head")[0]
    });
    function o(t) {
        var e = document.createElement("style");
        return e.type = "text/css",
        e.setAttribute("data-jwplayer-id", t),
        function(t) {
            i().appendChild(t)
        }(e),
        e
    }
    function u(t, e) {
        var n, i, u, a = r[t];
        a || (a = r[t] = {
            element: o(t),
            counter: 0
        });
        var s = a.counter++;
        return n = a.element,
        u = function() {
            c(n, s, "")
        }
        ,
        (i = function(t) {
            c(n, s, t)
        }
        )(e.css),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media)
                    return;
                i((e = t).css)
            } else
                u()
        }
    }
    t.exports = {
        style: function(t, e) {
            !function(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                      , o = (n[t] || {})[i.id];
                    if (o) {
                        for (var a = 0; a < o.parts.length; a++)
                            o.parts[a](i.parts[a]);
                        for (; a < i.parts.length; a++)
                            o.parts.push(u(t, i.parts[a]))
                    } else {
                        for (var c = [], a = 0; a < i.parts.length; a++)
                            c.push(u(t, i.parts[a]));
                        n[t] = n[t] || {},
                        n[t][i.id] = {
                            id: i.id,
                            parts: c
                        }
                    }
                }
            }(e, function(t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var i = t[r]
                      , o = i[0]
                      , u = i[1]
                      , a = i[2]
                      , c = {
                        css: u,
                        media: a
                    };
                    n[o] ? n[o].parts.push(c) : e.push(n[o] = {
                        id: o,
                        parts: [c]
                    })
                }
                return e
            }(t))
        },
        clear: function(t, e) {
            var r = n[t];
            if (!r)
                return;
            if (e) {
                var i = r[e];
                if (i)
                    for (var o = 0; o < i.parts.length; o += 1)
                        i.parts[o]();
                return
            }
            for (var u = Object.keys(r), a = 0; a < u.length; a += 1)
                for (var c = r[u[a]], s = 0; s < c.parts.length; s += 1)
                    c.parts[s]();
            delete n[t]
        }
    };
    var a = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n,
            t.filter(Boolean).join("\n")
        }
    }();
    function c(t, e, n) {
        if (t.styleSheet)
            t.styleSheet.cssText = a(e, n);
        else {
            var r = document.createTextNode(n)
              , i = t.childNodes[e];
            i ? t.replaceChild(r, i) : t.appendChild(r)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(15)
      , o = n(14)
      , u = n(34)
      , a = n(8);
    function c(t) {
        this.config = t || {}
    }
    var s = {
        html5: function() {
            return n.e(1).then(function(t) {
                var e = n(128).default;
                return Object(o.a)(e),
                e
            }
            .bind(null, n)).catch(Object(a.b)(152))
        }
    };
    Object(r.j)(c.prototype, {
        load: function(t) {
            var e = s[t]
              , n = function() {
                return Promise.reject(new Error("Failed to load media"))
            };
            return e ? e().then(function() {
                var e = u.a[t];
                return e || n()
            }) : n()
        },
        providerSupports: function(t, e) {
            return t.supports(e)
        },
        choose: function(t) {
            if (t === Object(t))
                for (var e = i.a.length, n = 0; n < e; n++) {
                    var r = i.a[n];
                    if (this.providerSupports(r, t))
                        return {
                            priority: e - n - 1,
                            name: r.name,
                            type: t.type,
                            providerToCheck: r,
                            provider: u.a[r.name]
                        }
                }
            return {}
        }
    });
    var l = c
      , f = void 0;
    Object(r.j)(s, {
        shaka: function() {
            return n.e(11).then(function(t) {
                var e = n(147).default;
                return Object(o.a)(e),
                e
            }
            .bind(null, n)).catch(Object(a.b)(154))
        },
        hlsjs: function() {
            return n.e(10).then(function(t) {
                var e = n(148).default;
                return e.setEdition && e.setEdition(f),
                Object(o.a)(e),
                e
            }
            .bind(null, n)).catch(Object(a.b)(153))
        },
        flash: function() {
            return n.e(9).then(function(t) {
                var e = n(145).default;
                return Object(o.a)(e),
                e
            }
            .bind(null, n)).catch(Object(a.b)(151))
        }
    }),
    l.prototype.providerSupports = function(t, e) {
        return f = this.config.edition,
        t.supports(e, f)
    }
    ;
    e.a = l
}
, function(t, e, n) {
    "use strict";
    var r = function(t, e, n, r) {
        var i = r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "";
        return '<div id="' + t + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + t + '"] .jw-error-text{color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset">' + (e || "") + '<span class="jw-break jw-reset"></span>' + i + "</div></div></div></div>"
    }
      , i = n(10)
      , o = n(23);
    function u(t, e) {
        var n = e.message
          , u = e.code
          , a = r(t.get("id"), n, t.get("localization").errors.errorCode, u)
          , c = t.get("width")
          , s = t.get("height")
          , l = Object(i.e)(a);
        return Object(o.d)(l, {
            width: c.toString().indexOf("%") > 0 ? c : c + "px",
            height: s.toString().indexOf("%") > 0 ? s : s + "px"
        }),
        l
    }
    n.d(e, "a", function() {
        return u
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = window.atob
}
, function(t, e, n) {
    "use strict";
    var r = n(4)
      , i = n(2);
    function o(t) {
        for (var e = [], n = 0; n < Object(r.c)(t); n++) {
            var i = t.childNodes[n];
            "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && e.push(Object(r.d)(i))
        }
        return e
    }
    var u = function t(e, n) {
        var u = [];
        function a(t) {
            var e = {
                zh: "Chinese",
                nl: "Dutch",
                en: "English",
                fr: "French",
                de: "German",
                it: "Italian",
                ja: "Japanese",
                pt: "Portuguese",
                ru: "Russian",
                es: "Spanish"
            };
            return e[t] ? e[t] : t
        }
        for (var c = 0; c < Object(r.c)(e); c++) {
            var s = e.childNodes[c];
            if ("media" === s.prefix) {
                if (!Object(r.b)(s))
                    continue;
                switch (Object(r.b)(s).toLowerCase()) {
                case "content":
                    if (Object(i.i)(s, "duration") && (n.duration = Object(i.f)(Object(i.i)(s, "duration"))),
                    Object(i.i)(s, "url")) {
                        n.sources || (n.sources = []);
                        var l = {
                            file: Object(i.i)(s, "url"),
                            type: Object(i.i)(s, "type"),
                            width: Object(i.i)(s, "width"),
                            label: Object(i.i)(s, "label")
                        }
                          , f = o(s);
                        f.length && (l.mediaTypes = f),
                        n.sources.push(l)
                    }
                    Object(r.c)(s) > 0 && (n = t(s, n));
                    break;
                case "title":
                    n.title = Object(r.d)(s);
                    break;
                case "description":
                    n.description = Object(r.d)(s);
                    break;
                case "guid":
                    n.mediaid = Object(r.d)(s);
                    break;
                case "thumbnail":
                    n.image || (n.image = Object(i.i)(s, "url"));
                    break;
                case "group":
                    t(s, n);
                    break;
                case "subtitle":
                    var d = {};
                    d.file = Object(i.i)(s, "url"),
                    d.kind = "captions",
                    Object(i.i)(s, "lang").length > 0 && (d.label = a(Object(i.i)(s, "lang"))),
                    u.push(d)
                }
            }
        }
        n.hasOwnProperty("tracks") || (n.tracks = []);
        for (var p = 0; p < u.length; p++)
            n.tracks.push(u[p]);
        return n
    }
      , a = n(11)
      , c = function(t, e) {
        for (var n = "default", o = [], u = [], c = 0; c < t.childNodes.length; c++) {
            var s = t.childNodes[c];
            if ("jwplayer" === s.prefix) {
                var l = Object(r.b)(s);
                "source" === l ? (delete e.sources,
                o.push({
                    file: Object(i.i)(s, "file"),
                    default: Object(i.i)(s, n),
                    label: Object(i.i)(s, "label"),
                    type: Object(i.i)(s, "type")
                })) : "track" === l ? (delete e.tracks,
                u.push({
                    file: Object(i.i)(s, "file"),
                    default: Object(i.i)(s, n),
                    kind: Object(i.i)(s, "kind"),
                    label: Object(i.i)(s, "label")
                })) : (e[l] = Object(a.serialize)(Object(r.d)(s)),
                "file" === l && e.sources && delete e.sources)
            }
            e.file || (e.file = e.link)
        }
        if (o.length) {
            e.sources = [];
            for (var f = 0; f < o.length; f++)
                o[f].file.length > 0 && (o[f][n] = "true" === o[f][n],
                o[f].label.length || delete o[f].label,
                e.sources.push(o[f]))
        }
        if (u.length) {
            e.tracks = [];
            for (var d = 0; d < u.length; d++)
                u[d].file.length > 0 && (u[d][n] = "true" === u[d][n],
                u[d].kind = u[d].kind.length ? u[d].kind : "captions",
                u[d].label.length || delete u[d].label,
                e.tracks.push(u[d]))
        }
        return e
    }
      , s = n(28);
    function l(t) {
        var e = [];
        e.feedData = {};
        for (var n = 0; n < Object(r.c)(t); n++) {
            var i = Object(r.a)(t, n);
            if ("channel" === Object(r.b)(i).toLowerCase())
                for (var o = 0; o < Object(r.c)(i); o++) {
                    var u = Object(r.a)(i, o)
                      , a = Object(r.b)(u).toLowerCase();
                    "item" === a ? e.push(f(u)) : a && (e.feedData[a] = Object(r.d)(u))
                }
        }
        return e
    }
    function f(t) {
        for (var e = {}, n = 0; n < t.childNodes.length; n++) {
            var o = t.childNodes[n]
              , a = Object(r.b)(o);
            if (a)
                switch (a.toLowerCase()) {
                case "enclosure":
                    e.file = Object(i.i)(o, "url");
                    break;
                case "title":
                    e.title = Object(r.d)(o);
                    break;
                case "guid":
                    e.mediaid = Object(r.d)(o);
                    break;
                case "pubdate":
                    e.date = Object(r.d)(o);
                    break;
                case "description":
                    e.description = Object(r.d)(o);
                    break;
                case "link":
                    e.link = Object(r.d)(o);
                    break;
                case "category":
                    e.tags ? e.tags += Object(r.d)(o) : e.tags = Object(r.d)(o)
                }
        }
        return new s.a(c(t, u(t, e)))
    }
    n.d(e, "a", function() {
        return l
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(44);
    function i(t) {
        for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++)
            e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
        return e
    }
    function o(t, e) {
        if (t = String(t),
        e = String(e),
        0 === t.length)
            return "";
        for (var n = i(Object(r.a)(t)), o = i(function(t) {
            return unescape(encodeURIComponent(t))
        }(e).slice(0, 16)), u = n.length, a = n[u - 1], c = n[0], s = void 0, l = void 0, f = 2654435769 * Math.floor(6 + 52 / u); f; ) {
            l = f >>> 2 & 3;
            for (var d = u - 1; d >= 0; d--)
                s = ((a = n[d > 0 ? d - 1 : u - 1]) >>> 5 ^ c << 2) + (c >>> 3 ^ a << 4) ^ (f ^ c) + (o[3 & d ^ l] ^ a),
                c = n[d] -= s;
            f -= 2654435769
        }
        return function(t) {
            try {
                return decodeURIComponent(escape(t))
            } catch (e) {
                return t
            }
        }(function(t) {
            for (var e = new Array(t.length), n = 0; n < t.length; n++)
                e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
            return e.join("")
        }(n).replace(/\0+$/, ""))
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = "function" == typeof console.log ? console.log.bind(console) : function() {}
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(24)
      , o = n(11)
      , u = n(2)
      , a = n(1)
      , c = n(12)
      , s = 0
      , l = 1
      , f = function(t) {
        if ("string" == typeof t) {
            var e = (t = t.split("?")[0]).indexOf("://");
            if (e > 0)
                return s;
            var n = t.indexOf("/")
              , r = Object(u.a)(t);
            return !(e < 0 && n < 0) || r && isNaN(r) ? l : 2
        }
    };
    var d = function(t) {
        this.url = t,
        this.promise_ = null
    };
    Object.defineProperties(d.prototype, {
        promise: {
            get: function() {
                return this.promise_ || this.load()
            },
            set: function() {}
        }
    }),
    Object(r.j)(d.prototype, {
        load: function() {
            var t = this
              , e = this.promise_;
            if (!e) {
                if (2 === f(this.url))
                    e = Promise.resolve(this);
                else {
                    var n = new i.a(function(t) {
                        switch (f(t)) {
                        case s:
                            return t;
                        case l:
                            return Object(o.getAbsolutePath)(t, window.location.href)
                        }
                    }(this.url));
                    this.loader = n,
                    e = n.load().then(function() {
                        return t
                    })
                }
                this.promise_ = e
            }
            return e
        },
        registerPlugin: function(t, e, n) {
            this.name = t,
            this.target = e,
            this.js = n
        },
        getNewInstance: function(t, e, n) {
            var r = this.js;
            if ("function" != typeof r)
                throw new a.s(null,Object(c.c)(this.url) + 100);
            var i = new r(t,e,n);
            return i.addToPlayer = function() {
                var e = t.getContainer().querySelector(".jw-overlays");
                e && (n.left = e.style.left,
                n.top = e.style.top,
                e.appendChild(n),
                i.displayArea = e)
            }
            ,
            i.resizeHandler = function() {
                var t = i.displayArea;
                t && i.resize(t.clientWidth, t.clientHeight)
            }
            ,
            i
        }
    }),
    e.a = d
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return r
    }),
    n.d(e, "a", function() {
        return i
    });
    var r = {
        audioMode: !1,
        flashBlocked: !1,
        item: 0,
        itemMeta: {},
        playbackRate: 1,
        playRejected: !1,
        state: n(3).Ma,
        itemReady: !1,
        controlsEnabled: !1
    }
      , i = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(5);
    var o = function t() {
        !function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, t)
    };
    e.a = o,
    o.prototype = Object(r.j)({}, i.a)
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = {
        on: r.a.on,
        once: r.a.once,
        off: r.a.off,
        trigger: r.a.trigger,
        get: function(t) {
            return this.attributes = this.attributes || {},
            this.attributes[t]
        },
        set: function(t, e) {
            if (this.attributes = this.attributes || {},
            this.attributes[t] !== e) {
                var n = this.attributes[t];
                this.attributes[t] = e,
                this.trigger("change:" + t, this, e, n)
            }
        },
        clone: function() {
            var t = {}
              , e = this.attributes;
            if (e)
                for (var n in e)
                    t[n] = e[n];
            return t
        },
        change: function(t, e, n) {
            this.on("change:" + t, e, n);
            var r = this.get(t);
            return e.call(n, this, r, r),
            this
        }
    };
    e.a = i
}
, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return r
    }),
    n.d(e, "b", function() {
        return i
    }),
    n.d(e, "a", function() {
        return o
    });
    var r = 4
      , i = 2
      , o = 1
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        var r = []
          , i = {};
        function o() {
            for (; r.length > 0; ) {
                var e = r.shift()
                  , n = e.command
                  , o = e.args;
                (i[n] || t[n]).apply(t, o)
            }
        }
        e.forEach(function(e) {
            var u = t[e];
            i[e] = u,
            t[e] = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                n() ? r.push({
                    command: e,
                    args: t
                }) : (o(),
                u && u.apply(this, t))
            }
        }),
        Object.defineProperty(this, "queue", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        this.flush = o,
        this.empty = function() {
            r.length = 0
        }
        ,
        this.off = function() {
            e.forEach(function(e) {
                var n = i[e];
                n && (t[e] = n,
                delete i[e])
            })
        }
        ,
        this.destroy = function() {
            this.off(),
            this.empty()
        }
    }
    n.d(e, "a", function() {
        return r
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , i = function() {}
      , o = function() {
        return !1
    }
      , u = {
        name: "default"
    }
      , a = {
        supports: o,
        play: i,
        pause: i,
        preload: i,
        load: i,
        stop: i,
        volume: i,
        mute: i,
        seek: i,
        resize: i,
        remove: i,
        destroy: i,
        eventsOn_: i,
        eventsOff_: i,
        setVisibility: i,
        setFullscreen: i,
        getFullscreen: o,
        supportsFullscreen: o,
        getContainer: i,
        setContainer: i,
        getName: function() {
            return u
        },
        getQualityLevels: i,
        getCurrentQuality: i,
        setCurrentQuality: i,
        getAudioTracks: i,
        getCurrentAudioTrack: i,
        setCurrentAudioTrack: i,
        getSeekRange: function() {
            return {
                start: 0,
                end: this.getDuration()
            }
        },
        setPlaybackRate: i,
        getPlaybackRate: function() {
            return 1
        },
        getBandwidthEstimate: function() {
            return null
        },
        setControls: i,
        attachMedia: i,
        detachMedia: i,
        init: i,
        setState: function(t) {
            this.state = t,
            this.trigger(r.Aa, {
                newstate: t
            })
        },
        sendMediaType: function(t) {
            var e = t[0]
              , n = e.type
              , i = e.mimeType
              , o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
            this.trigger(r.S, {
                mediaType: o ? "audio" : "video"
            })
        }
    };
    e.a = a
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(54)
      , o = n(18)
      , u = n(11)
      , a = n(7)
      , c = n(39)
      , s = n(19)
      , l = {
        autostart: !1,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: !1,
        controls: !0,
        defaultPlaybackRate: 1,
        displaydescription: !0,
        displaytitle: !0,
        displayPlaybackLabel: !1,
        height: 360,
        intl: {},
        language: "en",
        liveTimeout: null,
        localization: c.a,
        mute: !1,
        nextUpDisplay: !0,
        playbackRateControls: !1,
        playbackRates: [.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: !1,
        repeat: !1,
        stretching: "uniform",
        volume: 90,
        width: 640
    };
    function f(t) {
        return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)),
        t
    }
    function d(t, e, n) {
        var r = t[n] || e[n];
        r && (t[n] = r)
    }
    var p = function(t, e) {
        var i = Object(r.j)({}, (window.jwplayer || {}).defaults, e, t);
        !function(t) {
            var e = t.advertising
              , n = t.related
              , i = t.sharing
              , o = t.abouttext
              , u = Object(r.j)({}, t.localization);
            e && (u.advertising = u.advertising || {},
            d(u.advertising, e, "admessage"),
            d(u.advertising, e, "cuetext"),
            d(u.advertising, e, "loadingAd"),
            d(u.advertising, e, "podmessage"),
            d(u.advertising, e, "skipmessage"),
            d(u.advertising, e, "skiptext")),
            "string" == typeof u.related ? u.related = {
                heading: u.related
            } : u.related = u.related || {},
            n && d(u.related, n, "autoplaymessage"),
            i && (u.sharing = u.sharing || {},
            d(u.sharing, i, "heading"),
            d(u.sharing, i, "copied")),
            o && d(u, t, "abouttext");
            var a = u.close || u.nextUpClose;
            a && (u.close = a),
            t.localization = u
        }(i),
        function(t) {
            Object.keys(t).forEach(function(e) {
                "id" !== e && (t[e] = Object(u.serialize)(t[e]))
            })
        }(i);
        var p = i.forceLocalizationDefaults ? l.language : Object(s.e)()
          , h = i.localization
          , v = i.intl;
        i.localization = Object(s.a)(c.a, Object(s.c)(h, v || {}, p));
        var g = Object(r.j)({}, l, i);
        "." === g.base && (g.base = Object(o.getScriptPath)("base.js")),
        g.base = (g.base || Object(o.loadFrom)()).replace(/\/?$/, "/"),
        n.p = g.base,
        g.width = f(g.width),
        g.height = f(g.height),
        g.aspectratio = function(t, e) {
            if (-1 === e.toString().indexOf("%"))
                return 0;
            if ("string" != typeof t || !t)
                return 0;
            if (/^\d*\.?\d+%$/.test(t))
                return t;
            var n = t.indexOf(":");
            if (-1 === n)
                return 0;
            var r = parseFloat(t.substr(0, n))
              , i = parseFloat(t.substr(n + 1));
            return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
        }(g.aspectratio, g.width),
        g.volume = Object(r.z)(g.volume) ? Math.min(Math.max(0, g.volume), 100) : l.volume,
        g.mute = !!g.mute,
        g.language = p;
        var m = g.playbackRateControls;
        if (m) {
            var b = g.playbackRates;
            Array.isArray(m) && (b = m),
            (b = b.filter(function(t) {
                return Object(r.v)(t) && t >= .25 && t <= 4
            }).map(function(t) {
                return Math.round(100 * t) / 100
            })).indexOf(1) < 0 && b.push(1),
            b.sort(),
            g.playbackRateControls = !0,
            g.playbackRates = b
        }
        (!g.playbackRateControls || g.playbackRates.indexOf(g.defaultPlaybackRate) < 0) && (g.defaultPlaybackRate = 1),
        g.playbackRate = g.defaultPlaybackRate,
        g.aspectratio || delete g.aspectratio;
        var y = g.playlist;
        if (y)
            Array.isArray(y.playlist) && (g.feedData = y,
            g.playlist = y.playlist);
        else {
            var j = Object(r.D)(g, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
            g.playlist = [j]
        }
        g.qualityLabels = g.qualityLabels || g.hlslabels,
        delete g.duration;
        var w = g.liveTimeout;
        null !== w && (Object(r.z)(w) ? 0 !== w && (w = Math.max(30, w)) : w = null,
        g.liveTimeout = w);
        var O = parseFloat(g.bandwidthEstimate)
          , k = parseFloat(g.bitrateSelection);
        return g.bandwidthEstimate = Object(r.z)(O) ? O : function(t) {
            var e = parseFloat(t);
            return Object(r.z)(e) ? Math.max(e, 1) : l.bandwidthEstimate
        }(g.defaultBandwidthEstimate),
        g.bitrateSelection = Object(r.z)(k) ? k : l.bitrateSelection,
        g.backgroundLoading = Object(r.r)(g.backgroundLoading) ? g.backgroundLoading : a.Features.backgroundLoading,
        g
    }
      , h = n(26)
      , v = n(17)
      , g = "__CONTEXTUAL__";
    function m(t) {
        var e = "file:" === window.location.protocol ? "https:" : ""
          , n = {
            jwpsrv: "/asset/default/player/jwpsrv.js",
            dai: "/asset/default/player/plugins/dai-0.4.4.js",
            vast: "/asset/default/player/plugins/vast-8.4.13.js",
            googima: "/asset/default/player/plugins/googima-8.5.5.js",
            freewheel: "/asset/default/player/plugins/freewheel-2.1.13.js",
            related: "",
            gapro: "/asset/default/player/plugins/gapro-2.1.3.js"
        }[t];
        return n ? e + n : ""
    }
    function b(t, e, n) {
        e && (t[e.client || m(n)] = e,
        delete e.client)
    }
    var y = function(t, e) {
        var i = p(t, e)
          , u = i.key || window.jwplayer && window.jwplayer.key
          , a = new h.b(u)
          , c = a.edition();
        if (i.key = u,
        i.edition = c,
        i.error = a.error(),
        "unlimited" === c) {
            var s = Object(o.getScriptPath)("base.js");
            if (!s)
                throw new Error("Error setting up player: Could not locate base.js script tag");
            n.p = s
        }
        return i.flashplayer = function(t) {
            var e = t.flashplayer;
            return e || (e = (Object(o.getScriptPath)("base.js") || t.base) + "jwplayer.flash.swf"),
            "http:" === window.location.protocol && (e = e.replace(/^https/, "http")),
            e
        }(i),
        i.plugins = function(t) {
            var e = Object(r.j)({}, t.plugins)
              , n = t.edition
              , i = Object(v.a)(n);
            if (i("ads")) {
                var o = Object(r.j)({}, t.advertising)
                  , u = o.client;
                if (u) {
                    var a = m(u) || u;
                    e[a] = o,
                    delete o.client
                }
            }
            if (i("jwpsrv")) {
                var c = t.analytics;
                c !== Object(c) && (c = {}),
                b(e, c, "jwpsrv")
            }
            return b(e, t.ga, "gapro"),
            e
        }(i),
        i.ab && (i.ab = function(t) {
            var e = t.ab;
            return e.clone && (e = e.clone()),
            Object.keys(e.tests).forEach(function(n) {
                e.tests[n].forEach(function(e) {
                    e.addConfig && e.addConfig(t, e.selection)
                })
            }),
            e
        }(i)),
        function(t) {
            return !!Object(r.x)(t) && t.indexOf(g) > -1
        }(i.playlist) && (i.playlist = function(t, e) {
            var n = function(t) {
                var e = t.querySelector('meta[property="og:title"]');
                if (e)
                    return e.getAttribute("content")
            }(t)
              , r = (t.querySelector("title") || {}).textContent
              , i = encodeURIComponent(n || r || "");
            return e.replace(g, i)
        }(document, i.playlist),
        i.contextual = !0),
        i
    }
      , j = n(8)
      , w = n(25)
      , O = n(3)
      , k = n(58)
      , C = n(29)
      , x = n(24)
      , P = n(1);
    function S(t) {
        var e = t.get("playlist");
        return new Promise(function(n, r) {
            if ("string" != typeof e) {
                var i = t.get("feedData") || {};
                return T(t, e, i),
                n()
            }
            var o = new k.a;
            o.on(O.Da, function(e) {
                var r = e.playlist;
                delete e.playlist,
                T(t, r, e),
                n()
            }),
            o.on(O.w, function(e) {
                T(t, [], {}),
                r(Object(P.z)(e, P.u))
            }),
            o.load(e)
        }
        )
    }
    function T(t, e, n) {
        var r = t.attributes;
        r.playlist = Object(C.a)(e),
        r.feedData = n
    }
    function E(t) {
        return t.attributes._destroyed
    }
    var _ = n(37)
      , A = n(48)
      , N = n(12)
      , M = 301129;
    function I(t) {
        return L(t) ? Promise.resolve() : S(t).then(function() {
            if (t.get("drm") || Object(_.b)(t.get("playlist")))
                return Object(_.d)(t.get("edition"))
        }).then(function() {
            return function(t) {
                return S(t).then(function() {
                    if (!E(t)) {
                        var e = Object(C.b)(t.get("playlist"), t);
                        t.attributes.playlist = e;
                        try {
                            Object(C.e)(e)
                        } catch (t) {
                            throw t.code += P.u,
                            t
                        }
                        var n = t.getProviders()
                          , r = n.choose(e[0].sources[0])
                          , i = r.provider
                          , o = r.name;
                        return "function" == typeof i ? i : j.a.html5 && "html5" === o ? j.a.html5 : n.load(o).catch(function(t) {
                            throw Object(P.z)(t, P.v)
                        })
                    }
                })
            }(t)
        })
    }
    function F(t, e) {
        var r = [function(t) {
            var e = t.attributes
              , n = e.error;
            if (n && n.code === h.a) {
                var r = e.pid
                  , i = e.ph
                  , o = new h.b(e.key);
                if (i > 0 && i < 4 && r && o.duration() > -7776e6) {
                    var u = new x.a("//content.jwplatform.com/libraries/" + r + ".js");
                    return u.load().then(function() {
                        var t = window.jwplayer.defaults.key
                          , n = new h.b(t);
                        n.error() || n.token() !== o.token() || (e.key = t,
                        e.edition = n.edition(),
                        e.error = n.error())
                    }).catch(function() {})
                }
            }
            return Promise.resolve()
        }(t)];
        return L(t) || r.push(function(t, e) {
            var r = t.get("related")
              , i = Object(v.a)(t.get("edition"))
              , o = r === Object(r) && i("discovery");
            if (!1 !== t.get("controls") || o) {
                var u = !1 !== t.get("visualplaylist") || o;
                return o || (r = {
                    disableRelated: !0
                }),
                r.showButton = u,
                n.e(0).then(function(i) {
                    if (!t.attributes._destroyed) {
                        var o = new A.a;
                        o.name = "related",
                        o.js = n(149).default,
                        Object(N.a)(o, r, e)
                    }
                }
                .bind(null, n)).catch(Object(j.b)(M)).catch(function(t) {
                    return t
                })
            }
            return Promise.resolve()
        }(t, e), Promise.resolve()),
        Promise.all(r)
    }
    function L(t) {
        var e = t.get("advertising");
        return !(!e || !e.outstream)
    }
    var R = function(t) {
        var e = t.get("skin") ? t.get("skin").url : void 0;
        if ("string" == typeof e && !function(t) {
            for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
                if (e[n].href === t)
                    return !0;
            return !1
        }(e))
            return new x.a(e,!0).load().catch(function(t) {
                return t
            });
        return Promise.resolve()
    }
      , D = function(t) {
        var e = t.attributes
          , n = e.language
          , r = e.base
          , i = e.setupConfig
          , o = e.intl
          , u = Object(s.c)(i.localization, o, n);
        return !Object(s.g)(n) || Object(s.f)(u) ? Promise.resolve() : new Promise(function(i) {
            return Object(s.h)(r, n).then(function(n) {
                var r = n.response;
                if (!E(t)) {
                    if (!r)
                        throw new P.s(null,P.g);
                    e.localization = Object(s.a)(r, u),
                    i()
                }
            }).catch(function(t) {
                i(t.code === P.g ? t : Object(P.z)(t, P.f))
            })
        }
        )
    };
    var B = function(t) {
        var e = void 0;
        this.start = function(n) {
            var r = Object(w.a)(t, n)
              , i = Promise.all([Object(j.d)(t), r, I(t), F(t, n), R(t), D(t)])
              , o = new Promise(function(t, n) {
                e = setTimeout(function() {
                    n(new P.s(P.m,P.x))
                }, 6e4);
                var r = function() {
                    clearTimeout(e),
                    setTimeout(t, 6e4)
                };
                i.then(r).catch(r)
            }
            );
            return Promise.race([i, o]).catch(function(t) {
                var e = function() {
                    throw t
                };
                return r.then(e).catch(e)
            }).then(function(t) {
                return function(t) {
                    if (!t || !t.length)
                        return {
                            core: null,
                            warnings: []
                        };
                    var e = t.reduce(function(t, e) {
                        return t.concat(e)
                    }, []).filter(function(t) {
                        return t && t.code
                    });
                    return {
                        core: t[0],
                        warnings: e
                    }
                }(t)
            })
        }
        ,
        this.destroy = function() {
            clearTimeout(e),
            t.set("_destroyed", !0),
            t = null
        }
    }
      , z = n(42)
      , q = n(30)
      , V = n(22)
      , X = {
        removeItem: function() {}
    };
    try {
        X = window.localStorage || X
    } catch (t) {}
    function Q(t, e) {
        this.namespace = t,
        this.items = e
    }
    Object(r.j)(Q.prototype, {
        getAllItems: function() {
            var t = this;
            return this.items.reduce(function(e, n) {
                var r = X[t.namespace + "." + n];
                return r && (e[n] = Object(u.serialize)(r)),
                e
            }, {})
        },
        track: function(t) {
            var e = this;
            this.items.forEach(function(n) {
                t.on("change:" + n, function(t, r) {
                    try {
                        X[e.namespace + "." + n] = r
                    } catch (t) {
                        V.a.debug && console.error(t)
                    }
                })
            })
        },
        clear: function() {
            var t = this;
            this.items.forEach(function(e) {
                X.removeItem(t.namespace + "." + e)
            })
        }
    });
    var W = Q
      , H = n(52)
      , U = n(49)
      , J = n(5)
      , K = n(43)
      , Y = n(53);
    function G(t) {
        t.src || t.load()
    }
    function $() {
        var t = document.createElement("video");
        return t.className = "jw-video jw-reset",
        t.setAttribute("tabindex", "-1"),
        t.setAttribute("disableRemotePlayback", ""),
        t.setAttribute("webkit-playsinline", ""),
        t.setAttribute("playsinline", ""),
        t
    }
    var Z = n(57)
      , tt = n(35);
    n.d(e, "b", function() {
        return ot
    });
    var et = function() {};
    Object(r.j)(et.prototype, H.a);
    var nt = function(t) {
        this._events = {},
        this.modelShim = new et,
        this.modelShim._qoeItem = new q.a,
        this.mediaShim = {},
        this.setup = new B(this.modelShim),
        this.currentContainer = this.originalContainer = t,
        this.apiQueue = new i.a(this,["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"],function() {
            return !0
        }
        )
    };
    function rt(t, e) {
        e && e.code && (e.sourceError && console.error(e.sourceError),
        console.error(P.s.logMessage(e.code)))
    }
    function it(t) {
        t && t.code && console.warn(P.s.logMessage(t.code))
    }
    function ot(t, e) {
        if (!document.body.contains(t.currentContainer)) {
            var n = document.getElementById(t.get("id"));
            n && (t.currentContainer = n)
        }
        t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer),
        t.currentContainer = e
    }
    Object(r.j)(nt.prototype, {
        on: J.a.on,
        once: J.a.once,
        off: J.a.off,
        trigger: J.a.trigger,
        init: function(t, e) {
            var n = this
              , i = this.modelShim
              , o = new W("jwplayer",["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel"])
              , u = o && o.getAllItems();
            i.attributes = i.attributes || {},
            Object(r.j)(this.mediaShim, U.a);
            var a = t
              , c = y(Object(r.j)({}, t), u);
            c.id = e.id,
            c.setupConfig = a,
            Object(r.j)(i.attributes, c, U.b),
            i.getProviders = function() {
                return new z.a(c)
            }
            ,
            i.setProvider = function() {}
            ;
            var s = function() {
                for (var t = Y.c, e = [], n = [], r = 0; r < t; r++) {
                    var i = $();
                    e.push(i),
                    n.push(i),
                    G(i)
                }
                var o = n.shift()
                  , u = n.shift()
                  , a = !1;
                return {
                    primed: function() {
                        return a
                    },
                    prime: function() {
                        e.forEach(G),
                        a = !0
                    },
                    played: function() {
                        a = !0
                    },
                    getPrimedElement: function() {
                        return n.length ? n.shift() : null
                    },
                    getAdElement: function() {
                        return o
                    },
                    getTestElement: function() {
                        return u
                    },
                    clean: function(t) {
                        if (t.src) {
                            t.removeAttribute("src");
                            try {
                                t.load()
                            } catch (t) {}
                        }
                    },
                    recycle: function(t) {
                        t && !n.some(function(e) {
                            return e === t
                        }) && (this.clean(t),
                        n.push(t))
                    },
                    syncVolume: function(t) {
                        var n = Math.min(Math.max(0, t / 100), 1);
                        e.forEach(function(t) {
                            t.volume = n
                        })
                    },
                    syncMute: function(t) {
                        e.forEach(function(e) {
                            e.muted = t
                        })
                    }
                }
            }();
            i.get("backgroundLoading") || (s = Object(Z.a)(s.getPrimedElement(), s));
            var l = new tt.a(Object(tt.b)(this.originalContainer)).once("gesture", function() {
                s.prime(),
                n.preload(),
                l.destroy()
            });
            return i.on("change:errorEvent", rt),
            this.setup.start(e).then(function(t) {
                var u = t.core;
                if (!u)
                    throw Object(P.z)(null, P.w);
                if (n.setup) {
                    n.on(O.Ta, it),
                    t.warnings.forEach(function(t) {
                        n.trigger(O.Ta, t)
                    });
                    var a = n.modelShim.clone();
                    if (a.error)
                        throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(),
                    Object(r.j)(n, u.prototype),
                    n.setup(a, e, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", rt),
                    l.on("change:errorEvent", rt),
                    o.track(l),
                    n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch(function(t) {
                        throw Object(P.z)(t, P.u)
                    })
                }
            }).then(function() {
                n.setup && n.playerReady()
            }).catch(function(t) {
                n.setup && function(t, e, n) {
                    Promise.resolve().then(function() {
                        var r = Object(P.A)(P.r, P.y, n)
                          , i = t._model || t.modelShim;
                        r.message = r.message || i.get("localization").errors[r.key],
                        delete r.key;
                        var o = i.get("contextual");
                        if (!o) {
                            var u = Object(K.a)(t, r);
                            K.a.cloneIcon && u.querySelector(".jw-icon").appendChild(K.a.cloneIcon("error")),
                            ot(t, u)
                        }
                        i.set("errorEvent", r),
                        i.set("state", O.La),
                        t.trigger(O.Ia, r),
                        o && e.remove()
                    })
                }(n, e, t)
            })
        },
        playerDestroy: function() {
            this.apiQueue && this.apiQueue.destroy(),
            this.setup && this.setup.destroy(),
            this.off(),
            this._events = this._model = this.modelShim = this.originalContainer = this.apiQueue = this.setup = null
        },
        getContainer: function() {
            return this.currentContainer
        },
        get: function(t) {
            if (this.modelShim)
                return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t)
        },
        getItemQoe: function() {
            return this.modelShim._qoeItem
        },
        getConfig: function() {
            return Object(r.j)({}, this.modelShim.attributes, this.mediaShim)
        },
        getCurrentCaptions: function() {
            return this.get("captionsIndex")
        },
        getWidth: function() {
            return this.get("containerWidth")
        },
        getHeight: function() {
            return this.get("containerHeight")
        },
        getMute: function() {
            return this.get("mute")
        },
        getProvider: function() {
            return this.get("provider")
        },
        getState: function() {
            return this.get("state")
        },
        getAudioTracks: function() {
            return null
        },
        getCaptionsList: function() {
            return null
        },
        getQualityLevels: function() {
            return null
        },
        getVisualQuality: function() {
            return null
        },
        getCurrentQuality: function() {
            return -1
        },
        getCurrentAudioTrack: function() {
            return -1
        },
        getSafeRegion: function() {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isBeforeComplete: function() {
            return !1
        },
        isBeforePlay: function() {
            return !1
        },
        createInstream: function() {
            return null
        },
        skipAd: function() {},
        attachMedia: function() {},
        detachMedia: function() {
            return null
        }
    });
    e.a = nt
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(0);
    function i(t, e) {
        return Object(r.j)({}, e, {
            prime: function() {
                t.src || t.load()
            },
            getPrimedElement: function() {
                return t
            },
            clean: function() {
                e.clean(t)
            },
            recycle: function() {
                e.clean(t)
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , i = n(3)
      , o = n(4)
      , u = n(45)
      , a = n(27)
      , c = n(5)
      , s = n(1);
    e.a = function() {
        var t = Object(r.j)(this, c.a);
        function e(e) {
            try {
                var a = e.responseXML ? e.responseXML.childNodes : null
                  , c = ""
                  , l = void 0;
                if (a) {
                    for (var f = 0; f < a.length && 8 === (c = a[f]).nodeType; f++)
                        ;
                    if ("xml" === Object(o.b)(c) && (c = c.nextSibling),
                    "rss" === Object(o.b)(c)) {
                        var d = Object(u.a)(c);
                        l = Object(r.j)({
                            playlist: d
                        }, d.feedData)
                    }
                }
                if (!l)
                    try {
                        var p = JSON.parse(e.responseText);
                        if (Array.isArray(p))
                            l = {
                                playlist: p
                            };
                        else {
                            if (!Array.isArray(p.playlist))
                                throw Error("Playlist is not an array");
                            l = p
                        }
                    } catch (t) {
                        throw new s.s(s.o,621,t)
                    }
                t.trigger(i.Da, l)
            } catch (t) {
                n(t)
            }
        }
        function n(e) {
            e.code || (e = new s.s(s.o,0)),
            t.trigger(i.w, e)
        }
        this.load = function(t) {
            Object(a.a)(t, e, function(t, e, r, i) {
                n(i)
            })
        }
        ,
        this.destroy = function() {
            this.off()
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(7);
    function i(t) {
        return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0)
      , i = setTimeout;
    function o() {}
    function u(t) {
        if (!(this instanceof u))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        f(t, this)
    }
    function a(t, e) {
        for (; 3 === t._state; )
            t = t._value;
        0 !== t._state ? (t._handled = !0,
        u._immediateFn(function() {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(t._value)
                } catch (t) {
                    return void s(e.promise, t)
                }
                c(e.promise, r)
            } else
                (1 === t._state ? c : s)(e.promise, t._value)
        })) : t._deferreds.push(e)
    }
    function c(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof u)
                    return t._state = 3,
                    t._value = e,
                    void l(t);
                if ("function" == typeof n)
                    return void f(function(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }(n, e), t)
            }
            t._state = 1,
            t._value = e,
            l(t)
        } catch (e) {
            s(t, e)
        }
    }
    function s(t, e) {
        t._state = 2,
        t._value = e,
        l(t)
    }
    function l(t) {
        2 === t._state && 0 === t._deferreds.length && u._immediateFn(function() {
            t._handled || u._unhandledRejectionFn(t._value)
        });
        for (var e = 0, n = t._deferreds.length; e < n; e++)
            a(t, t._deferreds[e]);
        t._deferreds = null
    }
    function f(t, e) {
        var n = !1;
        try {
            t(function(t) {
                n || (n = !0,
                c(e, t))
            }, function(t) {
                n || (n = !0,
                s(e, t))
            })
        } catch (t) {
            if (n)
                return;
            n = !0,
            s(e, t)
        }
    }
    u.prototype.catch = function(t) {
        return this.then(null, t)
    }
    ,
    u.prototype.then = function(t, e) {
        var n = new this.constructor(o);
        return a(this, new function(t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null,
            this.onRejected = "function" == typeof e ? e : null,
            this.promise = n
        }
        (t,e,n)),
        n
    }
    ,
    u.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(n) {
            return e.resolve(t()).then(function() {
                return n
            })
        }, function(n) {
            return e.resolve(t()).then(function() {
                return e.reject(n)
            })
        })
    }
    ,
    u.all = function(t) {
        return new u(function(e, n) {
            if (!t || void 0 === t.length)
                throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length)
                return e([]);
            var i = r.length;
            function o(t, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var a = u.then;
                        if ("function" == typeof a)
                            return void a.call(u, function(e) {
                                o(t, e)
                            }, n)
                    }
                    r[t] = u,
                    0 == --i && e(r)
                } catch (t) {
                    n(t)
                }
            }
            for (var u = 0; u < r.length; u++)
                o(u, r[u])
        }
        )
    }
    ,
    u.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === u ? t : new u(function(e) {
            e(t)
        }
        )
    }
    ,
    u.reject = function(t) {
        return new u(function(e, n) {
            n(t)
        }
        )
    }
    ,
    u.race = function(t) {
        return new u(function(e, n) {
            for (var r = 0, i = t.length; r < i; r++)
                t[r].then(e, n)
        }
        )
    }
    ,
    u._immediateFn = "function" == typeof setImmediate && function(t) {
        setImmediate(t)
    }
    || function(t) {
        i(t, 0)
    }
    ,
    u._unhandledRejectionFn = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    }
    ;
    var d = u;
    window.Promise || (window.Promise = d);
    var p = n(18)
      , h = n(13)
      , v = n(15)
      , g = n(14)
      , m = {
        availableProviders: v.a,
        registerProvider: g.a
    }
      , b = n(25);
    m.registerPlugin = function(t, e, n) {
        "jwpsrv" !== t && Object(b.b)(t, e, n)
    }
    ;
    var y = m
      , j = n(31)
      , w = n(22)
      , O = n(7)
      , k = n(56)
      , C = n(3)
      , x = n(30)
      , P = n(5)
      , S = n(9)
      , T = n(11)
      , E = n(2);
    function _(t, e) {
        this.name = t,
        this.message = e.message || e.toString(),
        this.error = e
    }
    var A = n(6)
      , N = n(10)
      , M = n(23)
      , I = n(27)
      , F = n(50)
      , L = n(47);
    var R = Object(r.j)({}, T, S, p, {
        addClass: N.a,
        hasClass: N.h,
        removeClass: N.l,
        replaceClass: N.m,
        toggleClass: N.p,
        classList: N.d,
        styleDimension: N.o,
        createElement: N.e,
        emptyElement: N.g,
        addStyleSheet: N.b,
        bounds: N.c,
        css: M.b,
        clearCss: M.a,
        style: M.d,
        transform: M.e,
        getRgba: M.c,
        ajax: I.a,
        crossdomain: function(t) {
            var e = document.createElement("a")
              , n = document.createElement("a");
            e.href = location.href;
            try {
                return n.href = t,
                n.href = n.href,
                e.protocol + "//" + e.host != n.protocol + "//" + n.host
            } catch (t) {}
            return !0
        },
        tryCatch: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (w.a.debug)
                return t.apply(e || this, n);
            try {
                return t.apply(e || this, n)
            } catch (e) {
                return new _(t.name,e)
            }
        },
        Error: _,
        Timer: x.a,
        log: L.a,
        between: F.a,
        foreach: function(t, e) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
        },
        flashVersion: A.a,
        isIframe: A.m,
        indexOf: r.p,
        trim: E.h,
        pad: E.d,
        extension: E.a,
        hms: E.b,
        seconds: E.f,
        prefix: E.e,
        suffix: E.g,
        noop: function() {}
    })
      , D = 0;
    function B(t, e) {
        var n = new k.a(e);
        return n.on(C.Ga, function(e) {
            t._qoe.tick("ready"),
            e.setupTime = t._qoe.between("setup", "ready")
        }),
        n.on("all", function(e, n) {
            t.trigger(e, n)
        }),
        n
    }
    function z(t, e) {
        var n = t.plugins;
        Object.keys(n).forEach(function(t) {
            delete n[t]
        }),
        e.get("setupConfig") && t.trigger("remove"),
        t.off(),
        e.playerDestroy(),
        e.getContainer().removeAttribute("data-jwplayer-id")
    }
    function q(t) {
        var e = ++D
          , n = t.id || "player-" + e
          , i = new x.a
          , o = {}
          , u = B(this, t);
        i.tick("init"),
        t.setAttribute("data-jwplayer-id", n),
        Object.defineProperties(this, {
            id: {
                get: function() {
                    return n
                }
            },
            uniqueId: {
                get: function() {
                    return e
                }
            },
            plugins: {
                get: function() {
                    return o
                }
            },
            _qoe: {
                get: function() {
                    return i
                }
            },
            version: {
                get: function() {
                    return j.a
                }
            },
            Events: {
                get: function() {
                    return P.a
                }
            },
            utils: {
                get: function() {
                    return R
                }
            },
            _: {
                get: function() {
                    return r.f
                }
            }
        }),
        Object(r.j)(this, {
            _events: {},
            setup: function(e) {
                return i.clear("ready"),
                i.tick("setup"),
                z(this, u),
                (u = B(this, t)).init(e, this),
                this.on(e.events, null, this)
            },
            remove: function() {
                return function(t) {
                    for (var e = h.a.length; e--; )
                        if (h.a[e].uniqueId === t.uniqueId) {
                            h.a.splice(e, 1);
                            break
                        }
                }(this),
                z(this, u),
                this
            },
            qoe: function() {
                var t = u.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: t.dump()
                }
            },
            getAudioTracks: function() {
                return u.getAudioTracks()
            },
            getBuffer: function() {
                return u.get("buffer")
            },
            getCaptions: function() {
                return u.get("captions")
            },
            getCaptionsList: function() {
                return u.getCaptionsList()
            },
            getConfig: function() {
                return u.getConfig()
            },
            getContainer: function() {
                return u.getContainer()
            },
            getControls: function() {
                return u.get("controls")
            },
            getCurrentAudioTrack: function() {
                return u.getCurrentAudioTrack()
            },
            getCurrentCaptions: function() {
                return u.getCurrentCaptions()
            },
            getCurrentQuality: function() {
                return u.getCurrentQuality()
            },
            getCurrentTime: function() {
                return u.get("currentTime")
            },
            getDuration: function() {
                return u.get("duration")
            },
            getEnvironment: function() {
                return O
            },
            getFullscreen: function() {
                return u.get("fullscreen")
            },
            getHeight: function() {
                return u.getHeight()
            },
            getItemMeta: function() {
                return u.get("itemMeta") || {}
            },
            getMute: function() {
                return u.getMute()
            },
            getPlaybackRate: function() {
                return u.get("playbackRate")
            },
            getPlaylist: function() {
                return u.get("playlist")
            },
            getPlaylistIndex: function() {
                return u.get("item")
            },
            getPlaylistItem: function(t) {
                if (!R.exists(t))
                    return u.get("playlistItem");
                var e = this.getPlaylist();
                return e ? e[t] : null
            },
            getPosition: function() {
                return u.get("position")
            },
            getProvider: function() {
                return u.getProvider()
            },
            getQualityLevels: function() {
                return u.getQualityLevels()
            },
            getSafeRegion: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return u.getSafeRegion(t)
            },
            getState: function() {
                return u.getState()
            },
            getStretching: function() {
                return u.get("stretching")
            },
            getViewable: function() {
                return u.get("viewable")
            },
            getVisualQuality: function() {
                return u.getVisualQuality()
            },
            getVolume: function() {
                return u.get("volume")
            },
            getWidth: function() {
                return u.getWidth()
            },
            setCaptions: function(t) {
                return u.setCaptions(t),
                this
            },
            setConfig: function(t) {
                return u.setConfig(t),
                this
            },
            setControls: function(t) {
                return u.setControls(t),
                this
            },
            setCurrentAudioTrack: function(t) {
                u.setCurrentAudioTrack(t)
            },
            setCurrentCaptions: function(t) {
                u.setCurrentCaptions(t)
            },
            setCurrentQuality: function(t) {
                u.setCurrentQuality(t)
            },
            setFullscreen: function(t) {
                return u.setFullscreen(t),
                this
            },
            setMute: function(t) {
                return u.setMute(t),
                this
            },
            setPlaybackRate: function(t) {
                return u.setPlaybackRate(t),
                this
            },
            setPlaylistItem: function(t, e) {
                return u.setPlaylistItem(t, e),
                this
            },
            setCues: function(t) {
                return u.setCues(t),
                this
            },
            setVolume: function(t) {
                return u.setVolume(t),
                this
            },
            load: function(t, e) {
                return u.load(t, e),
                this
            },
            play: function(t) {
                return u.play(t),
                this
            },
            pause: function(t) {
                return u.pause(t),
                this
            },
            playToggle: function(t) {
                switch (this.getState()) {
                case C.Pa:
                case C.Ja:
                    return this.pause(t);
                default:
                    return this.play(t)
                }
            },
            seek: function(t, e) {
                return u.seek(t, e),
                this
            },
            playlistItem: function(t, e) {
                return u.playlistItem(t, e),
                this
            },
            playlistNext: function(t) {
                return u.playlistNext(t),
                this
            },
            playlistPrev: function(t) {
                return u.playlistPrev(t),
                this
            },
            next: function(t) {
                return u.next(t),
                this
            },
            castToggle: function() {
                return u.castToggle(),
                this
            },
            createInstream: function() {
                return u.createInstream()
            },
            skipAd: function() {
                return u.skipAd(),
                this
            },
            stop: function() {
                return u.stop(),
                this
            },
            resize: function(t, e) {
                return u.resize(t, e),
                this
            },
            addButton: function(t, e, n, r, i) {
                return u.addButton(t, e, n, r, i),
                this
            },
            removeButton: function(t) {
                return u.removeButton(t),
                this
            },
            attachMedia: function() {
                return u.attachMedia(),
                this
            },
            detachMedia: function() {
                return u.detachMedia(),
                this
            },
            isBeforeComplete: function() {
                return u.isBeforeComplete()
            },
            isBeforePlay: function() {
                return u.isBeforePlay()
            }
        })
    }
    Object(r.j)(q.prototype, {
        on: function(t, e, n) {
            return P.c.call(this, t, e, n)
        },
        once: function(t, e, n) {
            return P.d.call(this, t, e, n)
        },
        off: function(t, e, n) {
            return P.b.call(this, t, e, n)
        },
        trigger: function(t, e) {
            return (e = r.f.isObject(e) ? Object(r.j)({}, e) : {}).type = t,
            w.a.debug ? P.e.call(this, t, e) : P.f.call(this, t, e)
        },
        getPlugin: function(t) {
            return this.plugins[t]
        },
        addPlugin: function(t, e) {
            this.plugins[t] = e,
            this.on("ready", e.addToPlayer),
            e.resize && this.on("resize", e.resizeHandler)
        },
        registerPlugin: function(t, e, n) {
            Object(b.b)(t, e, n)
        },
        getAdBlock: function() {
            return !1
        },
        playAd: function(t) {},
        pauseAd: function(t) {}
    }),
    n.p = Object(p.loadFrom)();
    var V = function(t) {
        var e = void 0
          , n = void 0;
        if (t ? "string" == typeof t ? (e = X(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = h.a[t] : t.nodeType && (e = X((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = h.a[0],
        e)
            return e;
        if (n) {
            var r = new q(n);
            return h.a.push(r),
            r
        }
        return {
            registerPlugin: b.b
        }
    };
    function X(t) {
        for (var e = 0; e < h.a.length; e++)
            if (h.a[e].id === t)
                return h.a[e];
        return null
    }
    Object.defineProperties(V, {
        api: {
            get: function() {
                return y
            },
            set: function() {}
        },
        version: {
            get: function() {
                return j.a
            },
            set: function() {}
        },
        debug: {
            get: function() {
                return w.a.debug
            },
            set: function(t) {
                w.a.debug = !!t
            }
        }
    });
    var Q = V
      , W = n(35)
      , H = n(26)
      , U = n(24)
      , J = n(46)
      , K = n(45)
      , Y = n(40)
      , G = r.f.extend
      , $ = {};
    $.api = y,
    $._ = r.f,
    $.version = "8.6.2+commercial_v8-6-2.295.commercial.54a805c.hlsjs..jwplayer.cb419c0.dai.f0547f4.freewheel.31a10c7.googima.182acac.vast.993be40.analytics.3dadfbd.gapro.f664e4e.related.6aa5ac5",
    $.utils = Object(r.j)(R, {
        key: H.b,
        extend: G,
        scriptloader: U.a,
        rssparser: {
            parse: K.a
        },
        tea: J.a,
        UI: W.a
    }),
    $.utils.css.style = $.utils.style,
    $.vid = Y.a;
    var Z = $
      , tt = window;
    Object(r.j)(Q, Z),
    "function" == typeof tt.define && tt.define.amd && tt.define([], function() {
        return Q
    });
    var et = Q;
    tt.jwplayer && (et = tt.jwplayer);
    e.default = et
}
]).default;

/* global $, jwplayer, USER_ID, localStorage, Image */
var clientSide = {
    id: 0,
    lp: 0,
    dr: 0,
    pl: {},
    pc: {},
    player: 0,
    rt: null,
    init: function() {
        this.id = window.location.pathname.split('/v/').pop().split('/')[0];
        $.get('source.json', function(res) {
            if (!res.success) {
                clientSide.showError(res.data);
                $('#loading').remove();
                return false;
            }

            clientSide.pc = res.player;
            //			if(clientSide.pc.revenue) {
            //				$.ajax({
            //				    url:clientSide.pc.revenue,
            //				    dataType:"script",
            //				    cache:true,
            //				    error:function(jqXHR, textStatus, errorThrown){
            //				        $.getScript(clientSide.pc.revenue_fallback);
            //				    }
            //				});
            //				if(clientSide.pc.revenue_track) (new Image()).src = clientSide.pc.revenue_track;
            //			} else if(clientSide.pc.incomePop) {
            //				if("pre" in clientSide.pc.incomePop) {
            //					$.ajax({url:clientSide.pc.incomePop["pre"],dataType:"script",cache:true});
            //					delete clientSide.pc.incomePop["pre"];
            //					delete clientSide.pc.incomePop["0%"];
            //					delete clientSide.pc.incomePop["0"];
            //					if($.isEmptyObject(clientSide.pc.incomePop)) clientSide.pc.incomePop = false;
            //				} else if("0%" in clientSide.pc.incomePop) {
            //					$.ajax({url:clientSide.pc.incomePop["0%"],dataType:"script",cache:true});
            //					delete clientSide.pc.incomePop["0%"];
            //					delete clientSide.pc.incomePop["0"];
            //					if($.isEmptyObject(clientSide.pc.incomePop)) clientSide.pc.incomePop = false;
            //				} else if("0" in clientSide.pc.incomePop) {
            //					$.ajax({url:clientSide.pc.incomePop["0"],dataType:"script",cache:true});
            //					delete clientSide.pc.incomePop["0"];
            //					if($.isEmptyObject(clientSide.pc.incomePop)) clientSide.pc.incomePop = false;
            //				}
            //			}

            clientSide.pc.logo_file = 'https://www.avple.video/asset' + clientSide.pc.logo_file;
            clientSide.pc.source_file = null;

            //			if(clientSide.restrict()) {
            //				if(clientSide.pc.restrict_action == 'DisplayErrorPage') {
            //					clientSide.showError(clientSide.pc.restrict_target);
            //					$('#loading').remove();
            //					return false;
            //				}
            //				if(clientSide.pc.restrict_action == 'DisplayCustomLogo') {
            //					clientSide.pc.logo_file = clientSide.pc.restrict_target;
            //					clientSide.pc.logo_link = clientSide.getLogoLink(clientSide.pc.restrict_target);
            //				} else if(clientSide.pc.restrict_action == 'PlayCustomVideo') {
            //					clientSide.pc.source_file = clientSide.pc.restrict_target;
            //				}
            //			}

            clientSide.pl.image = 'https://www.avple.video/asset' + clientSide.pc.poster_file;
            clientSide.pl.width = "100%";
            clientSide.pl.aspectratio = clientSide.pc.aspectratio;
            clientSide.pl.preload = "auto";
            clientSide.pl.abouttext = 'Powered by <span class="jw-reset">' + clientSide.pc.powered_text + '</span>';
            clientSide.pl.aboutlink = clientSide.pc.powered_url;
            clientSide.pl.title = clientSide.pc.title;
            clientSide.pl.mute = clientSide.pc.opt_mute;
            clientSide.pl.repeat = clientSide.pc.opt_loop;
            clientSide.pl.cast = clientSide.pc.opt_cast;
            clientSide.pl.displaytitle = clientSide.pc.opt_title;
            clientSide.pl.logo = {
                "file": clientSide.pc.logo_file,
                "hide": true,
                "link": clientSide.pc.logo_link,
                "margin": clientSide.pc.logo_margin,
                "position": clientSide.pc.logo_position
            };
            clientSide.pl.skin = {
                "controlbar": {
                    "text": clientSide.pc.css_text,
                    "icons": clientSide.pc.css_icon,
                    "iconsActive": clientSide.pc.css_ichover,
                    "background": clientSide.pc.css_background
                },
                "timeslider": {
                    "progress": clientSide.pc.css_tsprogress,
                    "rail": clientSide.pc.css_tsrail
                },
                "menus": {
                    "text": clientSide.pc.css_text,
                    "textActive": clientSide.pc.css_mntext,
                    "background": clientSide.pc.css_menu
                }
            };
            clientSide.pl.captions = {
                "color": clientSide.pc.css_cttext,
                "fontSize": clientSide.pc.css_ctsize,
                "backgroundColor": clientSide.pc.css_caption,
                "backgroundOpacity": clientSide.pc.css_ctopacity,
                "edgeStyle": clientSide.pc.css_ctedge
            };
            //			clientSide.pl.advertising = clientSide.pc.income;
            clientSide.pl.sharing = clientSide.pc.opt_sharing ? {
                "sites": ["facebook", "twitter", "email", "googleplus", "linkedin", "pinterest", "reddit", "tumblr"]
            } : false;
            clientSide.pl.playbackRateControls = clientSide.pc.opt_playrate;
            clientSide.pl.tracks = [];

            if (clientSide.pc.source_file) {
                clientSide.pl.playlist = [{
                    file: clientSide.pc.source_file
                }];
            } else {
                if (clientSide.pc.opt_vr && res.is_vr) {
                    clientSide.pl.playlist = [{
                        stereomode: 'monoscopic',
                        sources: res.data
                    }];
                } else {
                    clientSide.pl.sources = res.data;
                }
                if (clientSide.pc.opt_caption && res.captions.length) {
                    $.each(res.captions, function(i, t) {
                        var track = {};
                        track.file = '/asset/userdata/' + USER_ID + '/caption/' + t.hash + '/' + t.id + '.' + t.extension;
                        track.label = t.language;
                        track.kind = "captions";
                        track.default = (i == 0);
                        clientSide.pl.tracks.push(track);
                    });
                }
            }

            $('style:last-child').append('.myConfirm {background-color: ' + clientSide.pc.css_menu + '; color: ' + clientSide.pc.css_text + ';} .button {background-color: ' + clientSide.pc.css_button + '; color: ' + clientSide.pc.css_bttext + ';}');
            //			if(clientSide.pc.trackingId) {
            //				$.ajax({url:'https://www.googletagmanager.com/gtag/js?id='+clientSide.pc.trackingId,dataType:"script",cache:true});
            //				window.dataLayer = window.dataLayer || [];
            //				clientSide.gtag('js', new Date());
            //				clientSide.gtag('config', clientSide.pc.trackingId);
            //			}

            clientSide.setParameter();
            clientSide.setFakePlayer();
        });
    },
    gtag: function() {
        window.dataLayer.push(arguments);
    },
    getItem: function(i) {
        try {
            return localStorage.getItem(i);
        } catch (e) {
            return false;
        }
    },
    setItem: function(i, v) {
        try {
            localStorage.setItem(i, v);
            return true;
        } catch (e) {
            return false;
        }
    },
    removeItem: function(i) {
        try {
            localStorage.removeItem(i);
            return true;
        } catch (e) {
            return false;
        }
    },
    ping: function() {
        var data = {
            id: this.id,
            user: USER_ID,
            ref: document.referrer,
            vip: clientSide.pc.ads_free
        };
        $.post(this.pc.logger + '/watch', {
            data: JSON.stringify(data)
        }, function(res) {
            if (res.success) {
                clientSide.rt = res.data;
                setTimeout(function() {
                    clientSide.realTime()
                }, clientSide.rt.l);
            }
        });
    },
    realTime: function() {
        $.get(this.pc.logger + '/log?u=' + USER_ID + '&h=' + this.id + '&c=' + clientSide.rt.c + '&i=' + clientSide.rt.i + '&v=' + clientSide.rt.v + '&s=' + clientSide.rt.s + '&p=' + clientSide.rt.p + '&d=' + clientSide.rt.d + '&b=' + clientSide.rt.b);
        setTimeout(function() {
            clientSide.realTime()
        }, clientSide.rt.l);
    },
    getResume: function() {
        if (!this.pc.resume_enable)
            return false;
        return this.getItem('resume' + this.id);
    },
    setResume: function() {
        if (!this.pc.resume_enable)
            return false;
        return this.setItem('resume' + this.id, Math.floor(this.lp));
    },
    removeResume: function() {
        return this.removeItem('resume' + this.id);
    },
    prettySecond: function(sec) {
        var sec_num = parseInt(sec, 10);
        // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    },
    popResume: function() {
        if ($('#resume').length)
            return false;
        var data = this.getResume();
        if (!data)
            return false;
        var resumeAt = data.split(':')[0];
        var html = '<div id="resume"><div class="pop-wrap"><div class="pop-main"><div class="pop-html"><div class="pop-block"><div class="myConfirm">';
        html += '<p>' + clientSide.pc.resume_text.replace('xx:xx:xx', this.prettySecond(resumeAt)) + '</p>';
        html += '<p><button id="resume_no" class="button">' + clientSide.pc.resume_no + '</button><button id="resume_yes" class="button">' + clientSide.pc.resume_yes + '</button></p>';
        html += '</div></div></div></div></div></div>';
        $('#vstr').after(html);
        $('#resume').on("contextmenu", function(e) {
            e.preventDefault()
        });
        this._resume(resumeAt);
        return true;
    },
    _resume: function(e) {
        $(document).on('click', '#resume_yes', function() {
            clientSide.player.seek(e);
            $('#resume').remove();
        });
        $(document).on('click', '#resume_no', function() {
            clientSide.player.play(true);
            $('#resume').remove();
        });
    },
    getLogoLink: function(e) {
        var a = e.split('#');
        if (a.length == 1)
            return '//' + this.getHost(e);
        return e.replace(a[0] + '#', '');
    },
    getHost: function(b) {
        try {
            var a = document.createElement("a");
            a.href = b;
            return a.hostname;
        } catch (e) {
            return '';
        }
    },
    restrict: function() {
        if (!this.pc.restrict_domain.length || this.pc.restrict_action == 'DoNothing')
            return false;
        try {
            if (window.self === window.top)
                return false;
        } catch (e) {}
        var host = this.getHost(document.referrer).replace('www.', '');
        if (!host)
            return false;
        if (this.pc.restrict_domain.indexOf(host) > -1)
            return false;
        return true;
    },
    adbDetect: function() {
        if (!this.pc.adb_enable)
            return false;
        if (!this.player.getAdBlock())
            return false;
        if (isNaN(this.pc.adb_offset)) {
            this.pc.adb_offset = parseInt(this.pc.adb_offset, 10);
            this.pc.adb_offset = Math.round(this.pc.adb_offset * clientSide.dr / 100);
        } else if (this.pc.adb_offset < clientSide.lp) {
            this.player.remove();
            clientSide.showError(this.pc.adb_text);
            return false;
        }
    },
    showError: function(txt) {
        $('#vstr').html('<p style="color:#fff;margin-top:40vh;font-size:22px;text-align:center;">' + txt + '</p>');
    },
    revenue: function() {
        if (!this.pc.incomePop)
            return false;
        var nIP = {};
        $.each(clientSide.pc.incomePop, function(k, v) {
            if (k == 'pre') {
                k = 5;
                nIP[k] = v;
            } else if (k == 'post') {
                k = clientSide.dr - 5;
                nIP[k] = v;
            } else if (k.indexOf('%') > -1) {
                k = parseInt(k, 10);
                k = Math.round(k * clientSide.dr / 100);
                nIP[k] = v;
            } else {
                if (k < clientSide.lp) {
                    $.ajax({
                        url: v,
                        dataType: "script",
                        cache: true
                    });
                } else {
                    nIP[k] = v;
                }
            }
        });
        this.pc.incomePop = nIP;
    },
    downloadButton: function() {
        if (true || this.pc.opt_download) {
            var that = this;
            this.player.addButton('<svg class="jw-svg-icon jw-svg-icon-download" viewBox="609.4 645.8 93.2 100" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="m696.2 745.8h-80.2c-3.7 0-6.6-2.9-6.6-6.6v-26.7c0-3.7 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6v20h66.7v-20c0-3.7 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6v26.7c0.3 3.7-2.6 6.6-6.3 6.6zm-36-38.3c-2.3 2.1-6 2.1-8.4 0l-20.8-19.1c-2.3-2.1-2.3-5.4 0-7.6s6-2.1 8.4 0l9.9 9.1v-37.5c0-3.7 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6v37.4l9.9-9.1c2.3-2.1 6-2.1 8.4 0 2.3 2.1 2.3 5.4 0 7.6l-20.6 19.2z"/></svg>', "Download Video", function() {

                jwplayer().pause();
                $.get("download_start?url="+clientSide.pl.sources[that.player.getCurrentQuality()].file);

//                try {
//                    var tab = window.open('/f/' + clientSide.id, '_blank');
//                    if (tab) {
//                        tab.focus();
//                    } else {
//                        window.location.href = '/f/' + clientSide.id;
//                    }
//                } catch (e) {
//                    window.location.href = '/f/' + clientSide.id;
//                }
            }, "download");
        }
    },
    qualitySwitch: function(b) {
        var a = this.player.getQualityLevels();
        if (a.length < 2)
            return false;
        this.player.removeButton('qSwitch');
        b = b || this.player.getCurrentQuality();
        var svg = this.svgLabel(a[b].label);
        this.player.addButton(svg, "Select Quality", function() {
            $('.jw-controls').addClass('jw-settings-open');
            $('.jw-settings-menu').attr('aria-expanded', false);
            $('.jw-settings-submenu:last-child').addClass('jw-settings-submenu-active').attr('aria-expanded', true);
            $('.jw-settings-quality').attr('aria-checked', true);
        }, "qSwitch");
    },
    svgLabel: function(a) {
        if (a == '360p') {
            return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 24"><path d="M7 15v-1.5A1.5 1.5 0 0 0 5.5 12 1.5 1.5 0 0 0 7 10.5V9a2 2 0 0 0-2-2H1v2h4v2H3v2h2v2H1v2h4a2 2 0 0 0 2-2M10 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7h-4m0 6h2v2h-2v-2zM17 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m0 2h2v6h-2V9zM28 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4m2 2h2v2h-2V9m-6-6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
        }
        if (a == '480p') {
            return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 24"><path d="M1 7v6h4v4h2V7H5v4H3V7H1zM10 13h2v2h-2m0-6h2v2h-2m0 6h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5A1.5 1.5 0 0 0 9.5 12 1.5 1.5 0 0 0 8 13.5V15a2 2 0 0 0 2 2M17 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m0 2h2v6h-2V9zM28 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4m2 2h2v2h-2V9m-6-6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
        }
        if (a == '720p') {
            return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 24"><path d="M3 17l4-8V7H1v2h4l-4 8M8 7v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8zM17 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m0 2h2v6h-2V9zM28 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4m2 2h2v2h-2V9m-6-6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
        }
        if (a == '1080p') {
            return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 24"><path d="M2 7v2h2v8h2V7H2zM10 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m0 2h2v6h-2V9zM17 13h2v2h-2m0-6h2v2h-2m0 6h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0-1.5 1.5V15a2 2 0 0 0 2 2M24 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m0 2h2v6h-2V9zM36 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4m2 2h2v2h-2V9m-6-6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
        }
        if (a == '1440p') {
            return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24"><path d="M1 7v2h4v2H3a2 2 0 0 0-2 2v4h6v-2H3v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H1zM15 7v10h2v-3.33L19 17h2l-3-5 3-5h-2l-2 3.33V7h-2m-4-4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
        }
        return '<svg class="jw-svg-icon jw-svg-icon-qswitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24"><path d="M1 7v6h4v4h2V7H5v4H3V7H1zM15 7v10h2v-3.33L19 17h2l-3-5 3-5h-2l-2 3.33V7h-2m-4-4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
    },
    setParameter: function() {
        if (!this.pc.opt_parameter)
            return false;
        var parameter = window.location.hash.substr(1)
          , arr = [];
        if (!parameter)
            return false;
        parameter = parameter.split('&');
        $.each(parameter, function(k, v) {
            v = v.split('=');
            if (v.length != 2)
                return 'continue';
            arr[v[0]] = v[1];
        });
        if ('caption'in arr) {
            var track = {};
            track.file = decodeURIComponent(arr.caption);
            track.label = arr.caption_title || 'custom subtitle';
            track.kind = "captions";
            track.default = true;
            clientSide.pl.tracks.push(track);
        }
        if ('mute'in arr) {
            clientSide.pl.mute = !!parseInt(arr.mute, 10);
        }
        if ('repeat'in arr) {
            clientSide.pl.repeat = !!parseInt(arr.repeat, 10);
        }
        if ('poster'in arr) {
            clientSide.pl.image = decodeURIComponent(arr.poster);
        }
    },
    setFakePlayer: function() {
        $('#vstr').html('<div style="padding-left:56.25%;"></div><div style="top:0;left:0;bottom:0;right:0;width:100%;height:100%;position:absolute;background:#000 no-repeat 50% 50%;background-size:contain;background-image:url(' + clientSide.pl.image + ');"></div>');
        $('#loading').html('<div class="loading-container fakeplaybutton" style="cursor:pointer;color:#fff;"><svg xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg></div>');
        $('#loading').attr('style', 'background: rgba(0,0,0,0.4);');
        $(document).on('click', '.fakeplaybutton', function() {
            clientSide.setup();
            $('#loading').remove();
        });
    },
    setup: function() {
        this.player = jwplayer("vstr");
        this.player.setup(this.pl);
        this.player.once('play', function() {
//            clientSide.ping();
        });
        this.player.on('time', function(e) {
            if (clientSide.lp == -1)
                return false;
            if (e.position - 1 < clientSide.lp)
                return false;
            if (!clientSide.dr)
                clientSide.dr = clientSide.player.getDuration();
            if (e.position + 5 > clientSide.dr) {
                clientSide.lp = -1;
                clientSide.removeResume();
                return false;
            }
            clientSide.lp = e.position;
            clientSide.setResume();
//            clientSide.revenue();
//            clientSide.adbDetect();
        });
        this.player.once("ready", function() {
            if (!clientSide.popResume()) {
                clientSide.player.play();
            }
            clientSide.downloadButton();
            clientSide.qualitySwitch();
        });
        this.player.on('levelsChanged', function(e) {
            clientSide.qualitySwitch(e.currentQuality);
        });
    }
};
clientSide.init();
