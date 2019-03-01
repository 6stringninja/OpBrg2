import { Utility } from './Utility';

export class Token {
    constructor(
        public name = '',
        public hash = '',
        public timestamp = Utility.getTimeStamp()
    ) {}

}