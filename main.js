let shallo=[1,2,3]
        let copy=shallo
        shallo.push(5)
     console.log(shallo,copy)

        let sha={id:1,
        name:"itachi uchika"}
        let cop=sha;
        cop.id=3;
        console.log(cop,sha)

        let dee=[1,2,3]
        let seco=dee
        dee[1]=5  
        seco.Object=5   
        console.log(dee);
        console.log(seco);    

        // deep-copy
        let x=[1,2,3,4]
        let y=[...x]
        x.push(5)
        console.log(x,y)

        let yy=[1,2,3,4];
        let zz=Object.assign([],yy)
        yy.push(5)
        console.log(yy,zz)

        let aa=[2,4,6]
        let bb=JSON.parse(JSON.stringify(aa))
        aa.push(8)
        console.log(aa,bb)