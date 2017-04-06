export interface IQuestionAnswer {
    id: string;
    type: string;
    placeholder: string;
    formControlName: string;
    subject: string;
    questionTopic: string;    
    question: string;
    answer: string;
    errorMessage: string;
}
