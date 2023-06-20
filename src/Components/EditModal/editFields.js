export const editFields = [
    {
        name:'name',
        placeholder:'Full Name',
    },
    {
        name:'email',
        placeholder: 'Email Address',
    },
    {
        name:'mobile',
        placeholder: 'Phone',
    },
    {
        name:'password',
        placeholder: 'Password',
    },
    {
        name:'confirmPassword',
        placeholder: 'Confirm Password',
    },
]

export const initValue = editFields.reduce((p,c) => ({...p, [c.name]:''}),{});

