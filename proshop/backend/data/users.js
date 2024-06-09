import  bcrypt from 'bcryptjs';

const users =[
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Sonu singh',
        email: 'sonu@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'gaurave',
        email: 'gaurave@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    }
]

export default users;