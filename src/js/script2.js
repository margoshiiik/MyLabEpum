function printProduct() {
    unique.forEach((unique) => {
        document.write(`<details>
                <summary>
                    <a href="#okno"> <img src="${unique.picture_large}" alt="pic" class="photo1"></a>
                    <span class="name">${unique.full_name}</span>
                    <span class="country">${unique.country}</span>
                </summary>

            </details>`);
    });
    document.write(` <div id="okno" class="container">
    <a href="#" class="x"><img src="X.png" class="x" alt=""></a>
    <div class="winText">Teacher Info</div>
    <img src="${unique.picture_large}" alt="" class="winPhoto">
    <img src="s.png" class="starWin" id="s" alt="">
    <div class="wrapper2">
        <span class="winName">${unique.full_name}</span>
        <span class="info">${unique.city}, ${unique.country}</span>
        <span class="info">${unique.age}, ${unique.gender}</span>
        <span class="infoE">${unique.email}</span>
        <span class="info">${unique.phone}</span>
    </div>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus commodo massa ac ultricies. Phasellus quis leo ex. Donec erat dolor, commodo sed porttitor sed, blandit vitae ex. Nullam auctor quam quis dolor condimentum sodales.
        Quisque auctor luctus arcu, ut auctor leo gravida vitae. Donec velit dolor...</div>
    <span class="more">toggle map</span>
    <div class="horizontal_dotted_line"></div>
    </div>`);
};

printProduct();

document.getElementById('s').addEventListener('click', isFav);