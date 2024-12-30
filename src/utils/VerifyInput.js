export const Verifyemail = (value)=>{
     const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     return emailRegx.test(value)
} 

export const passwordverify = (value)=>{
    return value.length === 6
};

export const fileSizeverify = (value)=>{
    return value.size>=100000
};

export const verifyUsername = (value)=>{
    return value.length<=5
};

// console.log(verifyUsername("vishal"))