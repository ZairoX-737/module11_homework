export function getPercent(percent, num) {
    if(percent < 0 || num<0 ){
        return 'Incorrect input';
    } else{
        let result = num / 100 * percent;
	    return result;
    }   
}
