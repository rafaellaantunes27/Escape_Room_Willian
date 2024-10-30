const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.Platform,
		C3.Behaviors.wrap,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.TextBox,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Flash,
		C3.Plugins.UserMedia,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.System.Cnds.ObjectUIDExists,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetIgnoreInput,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.TextBox.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.TextBox.Acts.Destroy,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Text.Acts.TypewriterText
	];
};
self.C3_JsPropNameTable = [
	{cutscene: 0},
	{MovimentoEmGrid: 0},
	{Plataforma: 0},
	{DarAVolta: 0},
	{Willian: 0},
	{Teclado: 0},
	{fundoPlantação: 0},
	{Sólido: 0},
	{RestritoAoLayout: 0},
	{chãoPlantação: 0},
	{casa: 0},
	{dialogo: 0},
	{linha_dialogo: 0},
	{falaNarrador: 0},
	{Intro3: 0},
	{cadeado: 0},
	{Toque: 0},
	{fundoBranco: 0},
	{Navegador: 0},
	{EntradaDeTexto: 0},
	{fundoCasa: 0},
	{bicicleta: 0},
	{mochila: 0},
	{estante: 0},
	{quadro: 0},
	{textoFase4: 0},
	{Intro4: 0},
	{fundoBiblioteca: 0},
	{mesa: 0},
	{secretaria: 0},
	{livros: 0},
	{gabarito: 0},
	{linhaDialogo: 0},
	{falaEsquerda: 0},
	{falaDireita: 0},
	{textoSecretaria: 0},
	{textoWilliam: 0},
	{textoFase1: 0},
	{next: 0},
	{Intro1: 0},
	{Sprite6: 0},
	{redemoinho: 0},
	{TextoCongratulations: 0},
	{willianTriste: 0},
	{williamFeliz: 0},
	{fundoFerro: 0},
	{ArrastarSoltar: 0},
	{lixo: 0},
	{sucata1: 0},
	{pá: 0},
	{sucata2: 0},
	{martelo: 0},
	{lixo2: 0},
	{lixo3: 0},
	{chaveFenda: 0},
	{Piscar: 0},
	{bateria: 0},
	{caixa: 0},
	{arame: 0},
	{alicate: 0},
	{chão: 0},
	{grade: 0},
	{Intro2: 0},
	{play: 0},
	{Escuro: 0},
	{Sprite: 0},
	{Gameover: 0},
	{Botaosaida: 0},
	{Rescomeçar: 0},
	{Exit: 0},
	{E: 0},
	{NSei: 0},
	{Sla: 0},
	{congratulation: 0},
	{TextoInfo1: 0},
	{TextoInfo2: 0},
	{Sprite2: 0},
	{Matematica: 0},
	{Texto: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{fundo: 0}
];

self.InstanceType = {
	Willian: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	fundoPlantação: class extends self.ISpriteInstance {},
	chãoPlantação: class extends self.ISpriteInstance {},
	casa: class extends self.ISpriteInstance {},
	falaNarrador: class extends self.ISpriteInstance {},
	Intro3: class extends self.ITextInstance {},
	cadeado: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	fundoBranco: class extends self.ISpriteInstance {},
	Navegador: class extends self.IInstance {},
	EntradaDeTexto: class extends self.ITextInputInstance {},
	fundoCasa: class extends self.ISpriteInstance {},
	bicicleta: class extends self.ISpriteInstance {},
	mochila: class extends self.ISpriteInstance {},
	estante: class extends self.ISpriteInstance {},
	quadro: class extends self.ISpriteInstance {},
	textoFase4: class extends self.ITextInstance {},
	Intro4: class extends self.ITextInstance {},
	fundoBiblioteca: class extends self.ISpriteInstance {},
	mesa: class extends self.ISpriteInstance {},
	secretaria: class extends self.ISpriteInstance {},
	livros: class extends self.ISpriteInstance {},
	gabarito: class extends self.ISpriteInstance {},
	falaEsquerda: class extends self.ISpriteInstance {},
	falaDireita: class extends self.ISpriteInstance {},
	textoSecretaria: class extends self.ITextInstance {},
	textoWilliam: class extends self.ITextInstance {},
	textoFase1: class extends self.ITextInstance {},
	next: class extends self.ISpriteInstance {},
	Intro1: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	redemoinho: class extends self.ISpriteInstance {},
	TextoCongratulations: class extends self.ITextInstance {},
	willianTriste: class extends self.ISpriteInstance {},
	williamFeliz: class extends self.ISpriteInstance {},
	fundoFerro: class extends self.ISpriteInstance {},
	lixo: class extends self.ISpriteInstance {},
	sucata1: class extends self.ISpriteInstance {},
	pá: class extends self.ISpriteInstance {},
	sucata2: class extends self.ISpriteInstance {},
	martelo: class extends self.ISpriteInstance {},
	lixo2: class extends self.ISpriteInstance {},
	lixo3: class extends self.ISpriteInstance {},
	chaveFenda: class extends self.ISpriteInstance {},
	bateria: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	arame: class extends self.ISpriteInstance {},
	alicate: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	grade: class extends self.ISpriteInstance {},
	Intro2: class extends self.ITextInstance {},
	play: class extends self.ISpriteInstance {},
	Escuro: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Gameover: class extends self.ISpriteInstance {},
	Botaosaida: class extends self.ISpriteInstance {},
	Rescomeçar: class extends self.ISpriteInstance {},
	Exit: class extends self.ISpriteInstance {},
	E: class extends self.ISpriteInstance {},
	NSei: class extends self.IWorldInstance {},
	Sla: class extends self.ISpriteInstance {},
	congratulation: class extends self.ISpriteInstance {},
	TextoInfo1: class extends self.ITextInstance {},
	TextoInfo2: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Matematica: class extends self.ITextInputInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {}
}