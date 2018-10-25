//quick 1080
//version 3.0
//github.com/msongz
//2018/10/25 11:31
//WTFPL license
(function quick1080()
{
	app.beginUndoGroup("quick1080");

	function addZero(num)
	{
		return num < 10 ? "0" + num : num;
	}
	var date = new Date(Date(0)),
		day = addZero(date.getDate()),
		mon = addZero(date.getMonth() + 1),
		year = date.getFullYear(),
		hour = addZero(date.getHours()),
		min = addZero(date.getMinutes()),
		sec = addZero(date.getSeconds()),
		curDate = year.toString() + mon + day + hour + min + sec;
	var compSet = {};
	compSet.h = 1080;
	compSet.w = 1920;
	compSet.fps = ScriptUI.environment.keyboardState.altKey ? 60 : 25;
	compSet.fps60 = 60;
	compSet.dur = 10;
	compSet.layer = "";
	compSet.pixel = 1;
	compSet.name = "quick1080-" + curDate + Math.random(100).toFixed(3);
	compSet.layerColor = [0.5, 0.5, 0.5];
	compSet.layerName = compSet.name;
	compSet.phName = "quick1080";
	var comp = app.project.items.addComp(compSet.name, compSet.w, compSet.h, compSet.pixel, compSet.dur, compSet.fps),
		layer = comp.layers.addSolid(compSet.layerColor, compSet.layerName, compSet.w, compSet.h, compSet.pixel, compSet.dur),
		layerSource = layer.source;
	layerSource.setProxyWithPlaceholder(compSet.phName, 4, 4, 1, 1);
	comp.openInViewer();
	app.endUndoGroup();
})();