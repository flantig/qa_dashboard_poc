/**
 * So the thing with typescript is that, evergreen doesn't currently support it correctly. So, I tried implementing a dual theme as shown at the bottom.
 *
 */

const ThemeProviderParameter = {
    components: {
        Pane: {
            baseStyle: {
                elevation: "2",
                float: "left",
                backgroundColor: "white",
                color: "black",
                width: 200,
                height: 120,
                margin: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            },
        },
        Button: {
            baseStyle: {
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
        }
    },
}

// const ThemeProviderParameter = {
//     components: {
//         Pane: {
//             appearances: {
//                 light: {
//                     elevation: "2",
//                     float: "left",
//                     backgroundColor: "white",
//                     color: "black",
//                     width: 200,
//                     height: 120,
//                     margin: 24,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     flexDirection: "column"
//                 },
//                 dark: {
//                     elevation: "2",
//                     float: "left",
//                     backgroundColor: "white",
//                     color: "black",
//                     width: 200,
//                     height: 120,
//                     margin: 24,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     flexDirection: "column"
//                 }
//             },
//         },
//     },
// }


export {ThemeProviderParameter};