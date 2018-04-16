
export default function forgetCurve(repetitions) {

	// the half value time is in general a function of all the repetitions in the past
	// my assumption: new half value time is the old divided by the probability at which the repetition took place
	// not sure if it makes sense, but it has nice properties and is very simple

	initialHalfValueTime = 3;		// hours

	if(repetitions.length <= 1) return function(time) {
		var t_star = initialHalfValueTime;
		return Math.exp(-Math.log(2)/t_star * time);
	}

	halfValueTime = [initialHalfValueTime];

	for(var i=1; i<repetitions.length; i++){
		var dT = (new Date(repetitions[i]) - new Date(repetitions[i-1]))/1000/3600 // gives time interval in hours
		P = Math.exp(-Math.log(2)*dT/halfValueTime[i-1]);
		halfValueTime[i] = halfValueTime[i-1]/(0.94*P+0.04);
	}

	return function(time) {
		var t_star = halfValueTime[halfValueTime.length-1];
		return Math.exp(-Math.log(2)/t_star * time);
	}
}
