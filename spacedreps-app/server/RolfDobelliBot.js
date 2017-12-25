
TelegramBot.token = '488454962:AAHMkDxPhcpE7rtrFzP-luMJIsyj3vyjpsw';

TelegramBot.start(); // start the bot

TelegramBot.addListener('/frage', function(command) { 
	var randomFrage = fragen[Math.floor(Math.random()*fragen.length)];
	return randomFrage;
});

TelegramBot.addListener('/subscribe', function(command, user) { 
	console.log(user)
});

var fragen = [
	'Wären Sie lieber sympathischer oder intelligenter?',
	'Was dürfte in Ihrem Benutzerhandbuch nicht fehlen?',
	'Woran denken Sie, wenn Sie an etwas Schönes denken möchten?',
	'Wenn Sie geliebt werden, erzeugt das Ihrerseits das Bedürfnis zu lieben?',
	'Wären Sie bereit, auf Gefühle zu verzichten, um vernünftiger zu werden?',
	'Worum beneidet man Sie?',
	'Wo sehen Sie sich in 50 Jahren?',
	'Angenommen, Sie würden entführt. Was wäre Ihrer Meinung nach eine vernünftige Lösesumme?',
	'Wie oft gelingt es Ihnen, Tatsachen durch positives Denken zu ändern?',
	'Gibt es einen thematischen Schwerpunkt in Ihrem Leben?',
	'Was wäre Ihnen lieber: \na) Sie fühlen sich jünger als Sie sind? \nb) Sie sind jünger als Sie sich fühlen?',
	'Leiden Sie an der Unfähigkeit, das auszudrücken, was Sie wirklich sagen möchten? Oder empfinden Sie diese Unfähigkeit öfter als Segen, zum Beispiel bei Mitar beiter gesprächen oder Zank in der Partnerschaft?',
	'Möchten Sie sich manchmal lieber beobachten als sich sein?',
	'Wäre es Ihnen lieber, wir würden statt von Affen von anderen Tieren abstammen? Oder fänden Sie es angemessener, verschiedene Menschen würden von verschie denen Tierarten abstammen?',
	'Wie viele Menschenleben müßten gerettet werden können, damit Sie bereit wären, Ihr Leben aufs Spiel zu setzen? Bitte um genaue Angabe.',
	'Wie lähmend ist für Sie Selbsterkenntnis?',
	'Definieren Sie Sinn.',
	'Apropos Sinnsuche: Möchten Sie gerrn in einer Gesellschaft leben, in der der Sinn des Lebens aus ganz klaren, einfachen Handlungen bestünde – etwa dem Aneinanderreihen von Muschelstücken, dem täglichen Singen eines Liedes oder dem Beten zu einem imaginären Wesen?',
	'Würden Sie Ihren Nachkommen Ihr Leben wünschen?',
	'Wie viel öffentlichen Widerstand brauchen Sie, damit Ihnen gewisse Anliegen nicht mehr wichtig erscheinen?',
	'Verleiht Ihnen Anstand das Gefühl von Moral?',
	'Möchten Sie, daß mehr Menschen wären wie Sie (Vereinfachung der Abläufe, Vermeidung von Mißverständnissen), oder würden Sie es begrüßen, wenn weniger so wären (relative Seltenheit, Exklusivität)?',
	'Sind Ihnen Menschen, deren Verhalten Sie an Sie selbst erinnert, eher sympathisch oder unsympathisch?',
	'Welchen Anteil des heutigen Tages möchten Sie nochmals erleben? Angabe in Minuten.',
	'Erfüllt es Sie mit Erleichterung, daß der Mensch dem Menschen ein Rätsel bleibt, daß niemand Sie voll ständig verstehen wird, nicht einmal Sie selbst?',
	'Bedrückt Sie die Tatsache, daß Sie zu 99% aus einfachsten Wasser- und Kohlestoffverbindungen bestehen, oder verspüren Sie Erleichterung anläßlich dieser elementaren Zusammensetzung?',
	'Angenommen, Sie könnten etwas zurücknehmen, was Sie einmal gesagt haben. Was wäre es?',
	'Angenommen, Sie könnten etwas sagen, was Sie einmal nicht gesagt haben. Was wäre es? Bitte um genauen Wortlaut.',
	'Wenn Sie sich zwingend einer Schönheitsoperation unterziehen müßten, die sowohl kostenlos als auch garantiert erfolgreich wäre, was würden Sie an sich operieren lassen?',
	'Möchten Sie wissen, unter welchen Umständen Sie gezeugt worden sind (in welcher Stellung die Zeugung genau erfolgte; ob es sich um einträchtigen Geschlechtsverkehr gehandelt hat oder nicht; ob Alkohol mit im Spiel war, und wenn ja, wieviel; welche Gedanken im Moment der Zeugung gedacht wurden)?',
	'Möchten Sie wissen, wie viele Versuche nötig waren, um Sie zu zeugen?',
	'Sehen Sie sich anders als Sie sind? Falls ja: wie anders?',
	'Wie zufrieden sind Sie mit dem inhaltlichen Angebot des Lebens?',
	'Welches war der Höhepunkt Ihres Lebens? Oder glauben Sie, er kommt noch?',
	'Was sind Sie öfter? a) Der falsche Mann am falschen Ort. b) Der falsche Mann zur falschen Zeit. c) Der falsche Mann.',
	'Können Sie sich gehenlassen? Können Sie andere sich gehenlassen lassen?',
	'Über welche moralische Innenausstattung verfügen Sie?',
	'Was fällt Ihnen im allgemeinen leichter: einen Wunsch zu erzeugen oder einen Wunsch zu verdrängen?',
	'Woran messen Sie die Qualität Ihres Lebensentwurfs?',
	'Nennen Sie die drei peinlichsten Momente Ihres Lebens.',
	'Wie lange, nachdem Sie einen peinlichen Moment erlebt haben, können Sie darüber lachen?',
	'Haben Sie Methoden, wie Sie diese Zeit verkürzen oder verlängern?',
	'Welche peinlichen Momente Ihres Lebens haben Sie nicht menschlicher gemacht?',
	'Hätten Sie sich gern in doppelter Ausführung?',
	'Angenommen, es gäbe Sie tatsächlich in all Ihren Eigenheiten in doppelter Ausführung: Was konkret würden Sie sich von einem Zusammentreffen mit Ihnen erwarten?',
	'Wie oft, wenn Sie am Morgen aufwachen, kommt es vor, daß Sie Ihr Leben gern gegen den Traum der vergangenen Nacht eintauschen würden?',
	'Falls nicht in diesem – in welchem Jahrhundert hätten Sie gern gelebt?',
	'Welche Ziele, Ihr Leben betreffend, behalten Sie für sich – und warum?',
	'Gibt es selbstgesteckte Ziele, die Sie nicht mögen?',
	'Wenn Sie sich einen Brief schreiben müßten, welches wäre der exakte Wortlaut?',
	'Rundheraus, was sind Sie für ein Mensch?',
	'Könnten Sie Ihren gegenwärtigen Lebenspartner weiterempfehlen?',
	'Lieben Sie sich noch, oder mögen Sie sich schon?',
	'Möchten Sie Ihr Chef sein?',
	'Was wäre Ihnen lieber: dass man Sie vermögender schätzt, als Sie sind, oder ärmer?',
	'Was wissen sie mit Sicherheit?',
	'Wie führen Sie zu Hause?',
	'Wessen Feind sind Sie?',
	'Möchten Sie von vornherein wissen, wie sich eine Beziehung entwickeln wird, wie lange Sie dauern und woran Sie scheitern wird? Oder möchten Sie es lieber nicht wissen? Warum?',
	'Angenommen, Sie hätten ein einziges Mal die Möglichkeit gehabt, in der Weltgeschichte zu intervenieren. Wo, wann und wie genau hätten Sie interveniert?',
	'Wie präzise ist Ihre Scham? Gibt es Dinge, für die Sie sich geschämt haben, die sich heute, aus der Distanz betrachtet, als belanglos erweisen?',
	'Wo, glauben Sie, sind die interessanteren Leute zu finden: im Himmel oder in der Hölle?',
	'Können Sie beim Nichtstun nichts tun?',
	'Wie oft geht ihr Hund fremd?',
	'Was genau am Glück macht Sie glücklich?',
	'Lügt das Chamäleon?',
	'Wie alt möchten Sie nicht werden?',
	'Welches minimale Unterhaltungsangebot erwarten sie im Jenseits?',
	'Was fällt Ihnen am schwersten: a) Andere zu überzeugen? b) Sich selbst zu überzeugen? c) Andere von sich zu überzeugen? d) Andere von sich selbst zu überzeugen? e) Sich von sich selbst zu überzeugen?',
	'Gibt es Menschen, die Sie wegen ihrer bescheidenen geistigen Fähigkeiten schätzen?',
	'Wie hat sich die Dauer des Vorspiels im Lauf Ihrer Beziehung entwickelt? a) Weniger Vorspiel (Sie sind effizienter geworden). b) Mehr Vorspiel. c) Nur noch Vorspiel.',
	'Wäre das Leben für Sie einfacher, wenn Macht direkt sichtbar wäre?',
	'Falls Sie und eine Ihnen unbekannte Frau nach einem Schiffbruch allein auf einer Insel gestrandet wären: Wie häßlich oder alt müßte die Frau sein, damit es zu keinem Sex kommt? a) Nach einem Tag? b) Nach einer Woche? c) Nach einem Jahr?',
	'Nach wie vielen Affären beginnen Sie, sich finanztechnisch optimal zu verhalten – in Bezug auf Ihr Haus, das gemeinsame Konto mit Ihrer Frau, das Erbe?',
	'Folgen Sie einem Rezept, mit dem Sie Frauen zum Geschlechtsverkehr überzeugen, oder improvisieren Sie lieber?',
	'Gibt es so viele schlechte Ärzte wie schlechte Manager?',
	'Glauben Sie an die kollektive Vernunft?'
];

