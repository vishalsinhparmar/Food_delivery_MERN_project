export const Verifyemail = (value)=>{
     const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     return emailRegx.test(value)
} 

export const passwordverify = (value)=>{
    return value.length >=6
};