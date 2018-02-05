//quick 1080
//version 2.0
//github.com/msongz
//2018/01/30 21:42
//WTFPL license
{
	function quick1080() {

		app.beginUndoGroup("quick1080")

		function addZero(num) {
			return num < 10 
			?"0" + num 
			:num
		}

		var date = new Date(Date(0));
		var day = date.getDate();
		var mon = date.getMonth() + 1
		var year = date.getFullYear();
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();
		var curDate = year + addZero(mon) + addZero(day) + addZero(hour) + addZero(min) + addZero(sec);

		var compSet = {};
		compSet.h = 1080;
		compSet.w = 1920;
		compSet.fps = ScriptUI.environment.keyboardState.altKey?25:60;
		compSet.fps60 = 60;
		compSet.dur = 10;
		compSet.layer = "";
		compSet.pixel = 1;
		compSet.name = "fuck-" + curDate;
		compSet.layerColor = [0, 0, 0];
		compSet.layerName = "" + curDate;
		compSet.phName = "fuck the world mother fucker";

		var comp = app.project.items.addComp(compSet.name, compSet.w, compSet.h, compSet.pixel, compSet.dur, compSet.fps);
		var layer = comp.layers.addSolid(compSet.layerColor, compSet.layerName, compSet.w, compSet.h, compSet.pixel, compSet.dur);
		var layerSource = layer.source;
			layerSource.setProxyWithPlaceholder(compSet.phName, 4, 4, 1, 1);

		comp.openInViewer();

		app.endUndoGroup();
	}
	quick1080()
}