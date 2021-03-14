
export default class StringUtils{
    static notNull(o :any){
        if( o === null){
            throw o +"should not be null!"
        }else{
            return o;
        }
    }
}