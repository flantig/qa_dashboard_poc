export const ThemeProviderParameter = {
    "rounding": 12,
    "spacing": 24,
    "global": {
        elevation: {
            dark: {
                none: 'none',
                // You can override the values for box-shadow here.
                xsmall: '0px 2px 2px #FFFFFF11',
                small: '0px 4px 4px #FFFFFF11',
                medium: '0px 6px 8px #FFFFFF11',
                large: '0px 8px 16px #FFFFFF11',
                xlarge: '0px 12px 24px #FFFFFF11',
            },
        },
        "colors": {
            "brand": {
                "dark": "#6E85B2",
                "light": "#006666"
            },
            "background": {
                "dark": "#0f1d2a",
                "light": "#FFFFFF"
            },
            "background-back": {
                "dark": "#0f1d2a",
                "light": "#afdbdc"
            },
            "background-front": {
                "dark": "#1c2e3f",
                "light": "#f0f8f7"
            },
            "background-contrast": {
                "dark": "#FFFFFF11",
                "light": "#FFFFFF"
            },
            "text": {
                "dark": "#EEEEEE",
                "light": "#333333"
            },
            "text-strong": {
                "dark": "#FFFFFF",
                "light": "#000000"
            },
            "text-weak": {
                "dark": "#CCCCCC",
                "light": "#444444"
            },
            "text-xweak": {
                "dark": "#999999",
                "light": "#666666"
            },
            "border": {
                "dark": "#444444",
                "light": "active-text"
            },
            "control": "brand",
            "active-background": {
                "light": "brand",
                "dark": "brand"
            },
            "active-text": {
                "light": "text-strong",
                "dark": "text-strong"
            },
            "selected-background": {
                "light": "brand",
                "dark": "#FFFF"
            },
            "selected-text": "text-strong",
            "status-critical": "#FF4040",
            "status-warning": "#FFAA15",
            "status-ok": "#00C781",
            "status-unknown": "#CCCCCC",
            "status-disabled": "#CCCCCC",
            "graph-0": "brand",
            "graph-1": {
                "light": "status-warning",
                "dark": "#FFE3D8"
            },
            "focus": {
                "light": "brand",
                "dark": "brand"
            }
        },
        "font": {
            "family": "Helvetica",
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px"
        },
        "active": {
            "background": "active-background",
            "color": "active-text"
        },
        "hover": {
            "background": "active-background",
            "color": "active-text"
        },
        "selected": {
            "background": "selected-background",
            "color": "selected-text"
        },
        "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "4px",
            "large": "12px",
            "xlarge": "24px"
        },
        "breakpoints": {
            "xsmall": {
                "value": 300,
            },
            "small": {
                "value": 400,
                "borderSize": {
                    "xsmall": "1px",
                    "small": "2px",
                    "medium": "4px",
                    "large": "6px",
                    "xlarge": "12px"
                },
                "edgeSize": {
                    "none": "0px",
                    "hair": "1px",
                    "xxsmall": "2px",
                    "xsmall": "3px",
                    "small": "6px",
                    "medium": "12px",
                    "large": "24px",
                    "xlarge": "48px"
                },
                "size": {
                    "xxsmall": "24px",
                    "xsmall": "48px",
                    "small": "96px",
                    "medium": "192px",
                    "large": "384px",
                    "xlarge": "768px",
                    "full": "100%"
                }
            },
            "medium": {
                "value": 900
            },
            "middle": {
                "value": 3000,
            },
            "large": {}
        },
        "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "3px",
            "xsmall": "6px",
            "small": "12px",
            "medium": "24px",
            "large": "48px",
            "xlarge": "96px",
            "responsiveBreakpoint": "small"
        },
        "input": {
            "padding": "12px",
            "weight": 600
        },
        "spacing": "24px",
        "size": {
            "xxsmall": "48px",
            "xsmall": "96px",
            "small": "192px",
            "medium": "384px",
            "large": "768px",
            "xlarge": "1152px",
            "xxlarge": "1536px",
            "full": "100%"
        }
    },
    "chart": {},
    "diagram": {
        "line": {}
    },
    "meter": {},
    "layer": {
        "background": {
            "dark": "#111111",
            "light": "#FFFFFF"
        }
    },
    "scale": 1,
    button: {
        border: {
            width: '1px',
            radius: '0',
        },
        padding: {
            vertical: '5px',
            horizontal: '5px',
        },
    },
    "calendar": {
        "small": {
            "fontSize": "14px",
            "lineHeight": 1.375,
            "daySize": "27.43px"
        },
        "medium": {
            "fontSize": "18px",
            "lineHeight": 1.45,
            "daySize": "54.86px"
        },
        "large": {
            "fontSize": "30px",
            "lineHeight": 1.11,
            "daySize": "109.71px"
        }
    },
    "checkBox": {
        "size": "24px",
        "toggle": {
            "radius": "24px",
            "size": "48px"
        }
    },
    "clock": {
        "analog": {
            "hour": {
                "width": "8px",
                "size": "24px"
            },
            "minute": {
                "width": "4px",
                "size": "12px"
            },
            "second": {
                "width": "3px",
                "size": "9px"
            },
            "size": {
                "small": "72px",
                "medium": "96px",
                "large": "144px",
                "xlarge": "216px",
                "huge": "288px"
            }
        },
        "digital": {
            "text": {
                "xsmall": {
                    "size": "10px",
                    "height": 1.5
                },
                "small": {
                    "size": "14px",
                    "height": 1.43
                },
                "medium": {
                    "size": "18px",
                    "height": 1.375
                },
                "large": {
                    "size": "22px",
                    "height": 1.167
                },
                "xlarge": {
                    "size": "26px",
                    "height": 1.1875
                },
                "xxlarge": {
                    "size": "34px",
                    "height": 1.125
                }
            }
        }
    },
    "heading": {
        "level": {
            "1": {
                "small": {
                    "size": "34px",
                    "height": "40px",
                    "maxWidth": "816px"
                },
                "medium": {
                    "size": "50px",
                    "height": "56px",
                    "maxWidth": "1200px"
                },
                "large": {
                    "size": "82px",
                    "height": "88px",
                    "maxWidth": "1968px"
                },
                "xlarge": {
                    "size": "114px",
                    "height": "120px",
                    "maxWidth": "2736px"
                }
            },
            "2": {
                "small": {
                    "size": "30px",
                    "height": "36px",
                    "maxWidth": "720px"
                },
                "medium": {
                    "size": "42px",
                    "height": "48px",
                    "maxWidth": "1008px"
                },
                "large": {
                    "size": "54px",
                    "height": "60px",
                    "maxWidth": "1296px"
                },
                "xlarge": {
                    "size": "66px",
                    "height": "72px",
                    "maxWidth": "1584px"
                }
            },
            "3": {
                "small": {
                    "size": "26px",
                    "height": "32px",
                    "maxWidth": "624px"
                },
                "medium": {
                    "size": "34px",
                    "height": "40px",
                    "maxWidth": "816px"
                },
                "large": {
                    "size": "42px",
                    "height": "48px",
                    "maxWidth": "1008px"
                },
                "xlarge": {
                    "size": "50px",
                    "height": "56px",
                    "maxWidth": "1200px"
                }
            },
            "4": {
                "small": {
                    "size": "22px",
                    "height": "28px",
                    "maxWidth": "528px"
                },
                "medium": {
                    "size": "26px",
                    "height": "32px",
                    "maxWidth": "624px"
                },
                "large": {
                    "size": "30px",
                    "height": "36px",
                    "maxWidth": "720px"
                },
                "xlarge": {
                    "size": "34px",
                    "height": "40px",
                    "maxWidth": "816px"
                }
            },
            "5": {
                "small": {
                    "size": "16px",
                    "height": "22px",
                    "maxWidth": "384px"
                },
                "medium": {
                    "size": "16px",
                    "height": "22px",
                    "maxWidth": "384px"
                },
                "large": {
                    "size": "16px",
                    "height": "22px",
                    "maxWidth": "384px"
                },
                "xlarge": {
                    "size": "16px",
                    "height": "22px",
                    "maxWidth": "384px"
                }
            },
            "6": {
                "small": {
                    "size": "14px",
                    "height": "20px",
                    "maxWidth": "336px"
                },
                "medium": {
                    "size": "14px",
                    "height": "20px",
                    "maxWidth": "336px"
                },
                "large": {
                    "size": "14px",
                    "height": "20px",
                    "maxWidth": "336px"
                },
                "xlarge": {
                    "size": "14px",
                    "height": "20px",
                    "maxWidth": "336px"
                }
            }
        }
    },
    "paragraph": {
        "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
        },
        "medium": {
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px"
        },
        "large": {
            "size": "22px",
            "height": "28px",
            "maxWidth": "528px"
        },
        "xlarge": {
            "size": "26px",
            "height": "32px",
            "maxWidth": "624px"
        },
        "xxlarge": {
            "size": "34px",
            "height": "40px",
            "maxWidth": "816px"
        }
    },
    "radioButton": {
        "size": "24px"
    },
    "text": {
        "xsmall": {
            "size": "14px",
            "height": "20px",
            "maxWidth": "336px"
        },
        "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
        },
        "medium": {
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px"
        },
        "large": {
            "size": "22px",
            "height": "28px",
            "maxWidth": "528px",
        },
        "xlarge": {
            "size": "26px",
            "height": "32px",
            "maxWidth": "624px"
        },
        "xxlarge": {
            "size": "34px",
            "height": "40px",
            "maxWidth": "816px"
        }
    }
}
