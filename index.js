const axios = require('axios'),
              jsdom = require('jsdom'),

              {JSDOM} = jsdom,

              url = 'https://www.hurriyet.com.tr';      


axios.get(url)
    .then (response => {
        getNodes(response.data);
    })

    .catch(error => {
        console.error(error);
    })

    const getNodes = html => {
        const data = [], // Bos bir array olusturuyoruz
        dom = new JSDOM(html), //Yeni bir JSDOM instance 'i olusturuyoruz
        news = dom.window.document.querySelectorAll('.flash-four-widget-css a')
        //-->dom'dan gelen nodeler arasında gezerek o modulun icerisindeki a etiketlerini cekiyoruz

        news.forEach(item => { // Secilen ogeleri for icerisnde donuyoruz
            
            data.push({// yukarıdaki bos array'e her elemanın title ve href ozelliklerini atıyoruz

            title : item.getAttribute('title'),
            link: item.getAttribute('href')
            

            })
            
        });
        console.log(data); //Arrayın son halini yazdırıyorum.Burada elinize gelen data ile ne yapacaginiz size kalmis.

    }