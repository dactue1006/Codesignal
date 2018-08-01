# Codesignal
function roadSigns(s) {
    let mx = 0;
    s = s.map((t)=>t.toLowerCase().split` `)
    s.filter((t)=>mx = Math.max(mx, t.length));
    s = s.map((t)=>{
        while (t.length<mx)
            t.push('');
        return t;
    })
    let r = '',
        e = true;
    for (let i = 0; i < mx; i++){
        for (let item of s){
            let st = item[i];
                if (st=='')
                    continue;
                if ('?.!'.indexOf(st[st.length-1])>=0&&st.length==1){
                    r += st;
            }
            else {
                if (e)
                    r += ' ' + st[0].toUpperCase() + st.slice(1);
                else
                    r += ' ' + st;
            }
            e =  '?.!'.indexOf(st[st.length-1])>=0;
        }
    }
    return r.trim();
}
