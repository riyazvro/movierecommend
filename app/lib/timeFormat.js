const timeFormat=(minutes)=>{
    let hrs=Math.floor(minutes/60)
    let formattedmins=minutes%60
    return ` ${hrs}h ${formattedmins}m`
}
export default timeFormat