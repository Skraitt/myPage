class PlayerSentences {
    constructor(html){
        this.sentences = new Array();
        this.selector = 0;
        this.container = html;
    }

    fetchTxt(){
        const data = new XMLHttpRequest();
        data.open("GET", './utils/sentences.txt', false);
        data.send(null);
        return data.responseText;
    }

    getSentences(){
        const txt = this.fetchTxt();
        let sentence = ``;
        for(let i=0; i<=txt.length ;i++){
            if(txt[i] == '\n'){
                this.sentences.push(sentence);
                sentence = ``;
            }else{
                sentence = `${sentence}${txt[i]}`;
                if(i==(txt.length-1)){
                    this.sentences.push(sentence);
                    sentence = ``;
                }
            }
        }
    }

    renderSentence(){
        this.visibility(0);
        setTimeout(()=>{
            this.container.innerHTML = this.sentences[this.selector];
        },1000)
    }

    previousSentence(){
        if(this.selector > 0){
            this.selector--;
            this.animation();
            setTimeout(()=>{
                this.renderSentence();
            },1000)
        }
    }

    nextSentence(){
        if(this.selector < this.sentences.length-1 ){
            this.selector++;
            this.animation();
            setTimeout(()=>{
                this.renderSentence();
            },1000)
        }
    }

    visibility(num){
        this.container.innerHTML = `
            <style>
            .carousel-sentence {
                transition: 450ms all;
                opacity: ${num};
            }
            </style>`;
    }

    animation(){
        this.container.innerHTML = `
        ${this.container.innerHTML}
        <style>
        .carousel-sentence {
            animation-name: byeSentence;
            animation-duration: 2s;
            animation-delay: 0ms;
            animation-iteration-count: 1;
        }
        @keyframes byeSentence{
            30%{
                transform: scale(1.3);
                text-shadow: 10px 10px 5px black;
            }
            40%{
                transform: translate( 0px, 100px);
            }
            70%{
                transform: translate( 0px, 200px);
            }
            100%{
                opacity: 0;
            }
        </style>`;
    }
}

export default PlayerSentences;