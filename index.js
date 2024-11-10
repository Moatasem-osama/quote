var article = [
    {"quote":"Be yourself; everyone else is already taken.","author":" Oscar Wilde"},
{"quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","author":" Albert Einstein"},
{"quote":"You only live once, but if you do it right, once is enough.","author":" Harper Lee"},
 {"quote":"It's not what happens to you, but how you react to it that matters.","author":" George Orwell"},
 {"quote":"The only way to do great work is to love what you do.","author":" Steve Jobs"},
 {"quote":"Believe you can and you're halfway there.","author":" Mark Twain"},
 {"quote":"You miss 100% of the shots you don't take.","author":" Wayne Gretzy"},
 {"quote":"It's not what happens to you, but how you react to it that matters.","author":" Epictetus"},
 {"quote":"The best revenge is massive success.","author":" Frank Sinatra"},
]
var previousRandom;
function getarticle() {
    var random ;
    do {
       random= Math.floor(Math.random() *article.length);
       // var random = Math.floor(Math.random() *(9))
    } while (random === previousRandom);
    previousRandom = random; // تحديث الرقم السابق بالرقم الجديد
    console.log(random);
    console.log(previousRandom);
    // عشان يجيب بالفلور  اقل روند ليها عشان يطلع الإنديكس زيرو
    document.getElementById('quote').innerHTML =`\“${article[random].quote }\”`;
    // عشان يدخل على البراجراف اللي واحد id = quote و سكتب جواه article اللي واخد index راندوم الي هي من 1و 9 و بعدين يدخل عالindex ده ويكتب انه الأوبجيت اللي جواه
    document.getElementById('author').innerHTML =`--${article[random].author }`;
}