export const randomPassword=()=>{
    return (Math.random()*10).toString(36).replace('.', '');
}