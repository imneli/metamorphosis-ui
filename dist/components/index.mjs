// src/ui/components/Button.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/ui/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
    variants: {
        variant: {
            solid: "",
            outline: "border-2",
            ghost: "hover:bg-opacity-10",
            link: "underline-offset-4 hover:underline"
        },
        color: {
            default: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-300",
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
            secondary: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500",
            danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
            success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
            warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-400"
        },
        size: {
            xs: "h-7 px-2 text-xs",
            sm: "h-8 px-3 text-sm",
            md: "h-9 px-4 text-base",
            lg: "h-10 px-6 text-lg",
            xl: "h-12 px-8 text-xl"
        },
        fullWidth: {
            true: "w-full",
            false: ""
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
        fullWidth: false
    }
});
var Button = forwardRef(function(_param, ref) {
    var children = _param.children, className = _param.className, variant = _param.variant, color = _param.color, size = _param.size, fullWidth = _param.fullWidth, loading = _param.loading, disabled = _param.disabled, props = _object_without_properties(_param, [
        "children",
        "className",
        "variant",
        "color",
        "size",
        "fullWidth",
        "loading",
        "disabled"
    ]);
    return /* @__PURE__ */ jsx("button", _object_spread_props(_object_spread({
        className: cn(buttonVariants({
            variant: variant,
            color: color,
            size: size,
            fullWidth: fullWidth
        }), className),
        ref: ref,
        disabled: disabled || loading
    }, props), {
        children: loading ? /* @__PURE__ */ jsx("div", {
            className: "flex items-center gap-2",
            children: children
        }) : children
    }));
});
Button.displayName = "Button";
// src/ui/components/Input.tsx
import { forwardRef as forwardRef2 } from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var inputVariants = cva2("flex w-full rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-gray-200",
            error: "border-red-500",
            success: "border-green-500"
        },
        size: {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base"
        },
        fullWidth: {
            true: "w-full",
            false: "w-auto"
        }
    },
    compoundVariants: [
        {
            variant: "default",
            className: "hover:border-gray-300 focus-visible:ring-blue-500"
        },
        {
            variant: "error",
            className: "hover:border-red-600 focus-visible:ring-red-500 text-red-600 placeholder:text-red-400"
        },
        {
            variant: "success",
            className: "hover:border-green-600 focus-visible:ring-green-500 text-green-600 placeholder:text-green-400"
        }
    ],
    defaultVariants: {
        variant: "default",
        size: "md",
        fullWidth: true
    }
});
var Input = forwardRef2(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, fullWidth = _param.fullWidth, label = _param.label, helperText = _param.helperText, error = _param.error, success = _param.success, startIcon = _param.startIcon, endIcon = _param.endIcon, disabled = _param.disabled, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "fullWidth",
        "label",
        "helperText",
        "error",
        "success",
        "startIcon",
        "endIcon",
        "disabled"
    ]);
    var inputVariant = error ? "error" : success ? "success" : variant;
    return /* @__PURE__ */ jsxs("div", {
        className: "space-y-1",
        children: [
            label && /* @__PURE__ */ jsx2("label", {
                className: "text-sm font-medium text-gray-700",
                children: label
            }),
            /* @__PURE__ */ jsxs("div", {
                className: "relative",
                children: [
                    startIcon && /* @__PURE__ */ jsx2("div", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500",
                        children: startIcon
                    }),
                    /* @__PURE__ */ jsx2("input", _object_spread({
                        className: cn(inputVariants({
                            variant: inputVariant,
                            size: size,
                            fullWidth: fullWidth
                        }), startIcon && "pl-10", endIcon && "pr-10", className),
                        ref: ref,
                        disabled: disabled
                    }, props)),
                    endIcon && /* @__PURE__ */ jsx2("div", {
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500",
                        children: endIcon
                    })
                ]
            }),
            (helperText || error || success) && /* @__PURE__ */ jsx2("p", {
                className: cn("text-xs", error && "text-red-600", success && "text-green-600", !error && !success && "text-gray-500"),
                children: error || success || helperText
            })
        ]
    });
});
Input.displayName = "Input";
// src/ui/components/Badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var badgeVariants = cva3("inline-flex items-center justify-center rounded-full font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2", {
    variants: {
        variant: {
            solid: "text-white",
            outline: "border border-gray-300",
            ghost: "text-gray-600",
            glass: "bg-opacity-75 backdrop-blur-md text-white border-2 border-white/50"
        },
        color: {
            default: "bg-white text-gray-800",
            black: "bg-black text-white",
            danger: "bg-red-600 text-white",
            success: "bg-green-500 text-white",
            warning: "bg-yellow-500 text-white",
            violet: "bg-violet-400 text-white"
        },
        size: {
            sm: "h-6 px-3 text-xs",
            md: "h-6 px-4 text-sm",
            lg: "h-8 px-5 text-base"
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md"
    }
});
var Badge = function(param) {
    var children = param.children, variant = param.variant, color = param.color, size = param.size, className = param.className;
    return /* @__PURE__ */ jsx3("span", {
        className: cn(badgeVariants({
            variant: variant,
            color: color,
            size: size
        }), className),
        children: children
    });
};
// src/ui/components/Separator.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Separator = function(_param) {
    var _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, className = _param.className, props = _object_without_properties(_param, [
        "orientation",
        "className"
    ]);
    return /* @__PURE__ */ jsx4("div", _object_spread({
        className: "".concat(orientation === "vertical" ? "w-px h-8 bg-gray-200" : "w-full h-px bg-gray-200 my-2", " ").concat(className)
    }, props));
};
// src/ui/components/Headers/HeaderOne.tsx
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var headerVariants = cva4("w-full flex items-center justify-between px-4 transition-colors", {
    variants: {
        variant: {
            default: "bg-white border-b",
            transparent: "bg-transparent",
            colored: "bg-primary-500"
        },
        size: {
            sm: "h-14",
            default: "h-16",
            lg: "h-20"
        },
        position: {
            fixed: "fixed top-0 left-0 right-0 z-50",
            static: "static",
            sticky: "sticky top-0 z-50"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        position: "static"
    }
});
var HeaderOne = function(param) {
    var logo = param.logo, navigation = param.navigation, actions = param.actions, className = param.className, variant = param.variant, size = param.size, position = param.position, _param_maxWidth = param.maxWidth, maxWidth = _param_maxWidth === void 0 ? "2xl" : _param_maxWidth, _param_dark = param.dark, dark = _param_dark === void 0 ? false : _param_dark;
    var containerClasses = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "w-full"
    };
    return /* @__PURE__ */ jsx5("header", {
        className: cn(headerVariants({
            variant: variant,
            size: size,
            position: position
        }), dark && "bg-gray-900 text-white", className),
        children: /* @__PURE__ */ jsx5("div", {
            className: cn("w-full mx-auto px-4", containerClasses[maxWidth]),
            children: /* @__PURE__ */ jsxs2("div", {
                className: "flex items-center justify-between h-full",
                children: [
                    logo && /* @__PURE__ */ jsx5("div", {
                        className: "flex-shrink-0",
                        children: logo
                    }),
                    navigation && navigation.length > 0 && /* @__PURE__ */ jsx5("nav", {
                        className: "hidden md:flex items-center space-x-4",
                        children: navigation.map(function(item, index) {
                            return /* @__PURE__ */ jsx5("div", {
                                className: "text-sm font-medium",
                                children: item
                            }, index);
                        })
                    }),
                    actions && actions.length > 0 && /* @__PURE__ */ jsx5("div", {
                        className: "flex items-center space-x-4",
                        children: actions.map(function(action, index) {
                            return /* @__PURE__ */ jsx5("div", {
                                children: action
                            }, index);
                        })
                    })
                ]
            })
        })
    });
};
// src/ui/components/Cta.tsx
import { FaXTwitter, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var platforms = {
    twitter: {
        icon: /* @__PURE__ */ jsx6(FaXTwitter, {
            className: "h-5 w-5"
        }),
        class: "bg-black hover:bg-neutral-800"
    },
    whatsapp: {
        icon: /* @__PURE__ */ jsx6(FaWhatsapp, {
            className: "h-5 w-5"
        }),
        class: "bg-[#25D366] hover:bg-[#22bf5b]"
    },
    instagram: {
        icon: /* @__PURE__ */ jsx6(FaInstagram, {
            className: "h-5 w-5"
        }),
        class: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90"
    },
    discord: {
        icon: /* @__PURE__ */ jsx6(FaDiscord, {
            className: "h-5 w-5"
        }),
        class: "bg-[#5865F2] hover:bg-[#4752c4]"
    }
};
var ctaVariants = cva5([
    "inline-flex items-center justify-center rounded-full text-white",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "shadow-lg hover:shadow-xl hover:scale-110",
    "fixed right-6 z-50"
], {
    variants: {
        size: {
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
        },
        order: {
            1: "bottom-6",
            2: "bottom-[calc(1.5rem+4rem)]",
            3: "bottom-[calc(1.5rem+8rem)]",
            4: "bottom-[calc(1.5rem+12rem)]",
            5: "bottom-[calc(1.5rem+16rem)]"
        }
    },
    defaultVariants: {
        size: "md",
        order: 1
    }
});
var Cta = function(param) {
    var platform = param.platform, href = param.href, size = param.size, order = param.order, className = param.className;
    var config = platforms[platform];
    return /* @__PURE__ */ jsx6("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: cn(ctaVariants({
            size: size,
            order: order
        }), config.class, className),
        "aria-label": "Visit our ".concat(platform),
        children: config.icon
    });
};
{}export { Badge, Button, Cta, HeaderOne, Input, Separator, badgeVariants, buttonVariants, cn, inputVariants };
//# sourceMappingURL=index.mjs.map