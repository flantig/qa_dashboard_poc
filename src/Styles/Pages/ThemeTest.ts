const ThemeProviderParameter = {
    components: {
        Button: {
            appearances: {
                light: {
                    color: 'white',
                    paddingX: 12,
                    paddingY: 8,
                    borderRadius: 5,
                    backgroundColor: 'indianred',
                    _hover: {
                        backgroundColor: 'firebrick',
                    },
                    _active: {
                        backgroundColor: 'darkred',
                    },
                    _focus: {
                        boxShadow: '0 0 0 2px lightcoral',
                    },
                },
                dark: {
                    color: 'white',
                    paddingX: 12,
                    paddingY: 8,
                    borderRadius: 5,
                    backgroundColor: '#878683',
                    _hover: {
                        backgroundColor: 'firebrick',
                    },
                    _active: {
                        backgroundColor: 'darkred',
                    },
                    _focus: {
                        boxShadow: '0 0 0 2px lightcoral',
                    },
                }
            },
        },
        Pane: {
            appearances: {
                light: {
                    backgroundColor:"white"
                },
                dark: {
                    float:"left",
                    backgroundColor:"firebrick",
                    width: 200,
                    height: 120,
                    margin: 24,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                }
            },
        }
    },
}

export {ThemeProviderParameter};