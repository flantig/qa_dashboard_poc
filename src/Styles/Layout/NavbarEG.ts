const ThemeProviderParameter = {
        components: {
            Button: {
                appearances: {
                    light: {
                        color: 'black',
                        paddingX: "4%",
                        paddingY: "1%",
                        margin: 10,
                        borderRadius: 5,
                        backgroundColor: '#ffffff',
                        _hover: {
                            backgroundColor: '#fafafa',
                        },
                        _active: {
                            backgroundColor: '#c7c7c7',
                        },
                        _focus: {
                            //boxShadow: '0 0 0 2px lightcoral',
                        },
                    },
                    dark: {
                        color: 'white',
                        paddingX: "4%",
                        paddingY: "1%",
                        margin: 10,
                        borderRadius: 5,
                        backgroundColor: '#878683',
                        _hover: {
                            backgroundColor: 'firebrick',
                        },
                        _active: {
                            backgroundColor: 'darkred',
                        },
                        _focus: {
                            //boxShadow: '0 0 0 2px lightcoral',
                        },
                    },
                },
            },
        },
}

export {ThemeProviderParameter};