class Interviews{
    constructor(){
        //11.1 Constructor
        this.interviews = [];
    }
    //16.2 metodode la clase que agrega una entrevista
    addInterview(interview){
        this.interviews = [...this.interviews, interview];
        console.log(this.interviews);
    }
}

export default Interviews

