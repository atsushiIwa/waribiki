var r=new Ractive({
    el:'#container',
    template:'#template'
})
r.on({
    'clicked':()=>{
        var genka=r.get('genka')
        var zaiko=r.get('zaiko')
        var siire=r.get('siire')
        var urine=r.get('urine')
        var sosiire=(genka*siire)
        var uriage=(urine*(siire-zaiko))
        var waribiki=((1-(((sosiire-uriage)/zaiko)/urine))*100)
        r.set('waribiki',waribiki)
    }
})