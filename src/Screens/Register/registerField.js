export const registerField = [
    {
        name:'name',
        placeholder:'Full Name',
        inputStyle:{
            borderLeftWidth:1,
            borderRightWidth:1,
            borderTopWidth:1,
            borderBottomWidth:0.5,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            color: '#fc5203',
            fontWeight:'bold',
            height:40,
            paddingHorizontal:5,
        }
    },
    {
        name:'email',
        placeholder: 'Email Address',
        inputStyle:{
            borderLeftWidth:1,
            borderRightWidth:1,
            borderTopWidth:0.5,
            borderBottomWidth:0.5,
            color: '#fc5203',
            fontWeight:'bold',
            height:40,
            paddingHorizontal:5,
        },
    },
    {
        name:'mobile',
        placeholder: 'Phone',
        inputStyle:{
            borderLeftWidth:1,
            borderRightWidth:1,
            borderTopWidth:0.5,
            borderBottomWidth:0.5,
            color: '#fc5203',
            fontWeight:'bold',
            height:40,
            paddingHorizontal:5,
        },
    },
    {
        name:'password',
        placeholder: 'Password',
        inputStyle:{
            borderLeftWidth:1,
            borderRightWidth:1,
            borderTopWidth:0.5,
            borderBottomWidth:0.5,
            color: '#fc5203',
            fontWeight:'bold',
            height:40,
            paddingHorizontal:5,
        },
    },
    {
        name:'confirmPassword',
        placeholder: 'Confirm Password',
        inputStyle:{
            borderLeftWidth:1,
            borderRightWidth:1,
            borderTopWidth:0.5,
            borderBottomWidth:1,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            color: '#fc5203',
            fontWeight:'bold',
            height:40,
            paddingHorizontal:5,

        }
    },
]

export const initValue = registerField.reduce((p,c) => ({...p, [c.name]:''}),{});

