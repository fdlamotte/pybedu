Blockly.Python['import_Pybricks'] = function(block) {
    var code = '';
	code += 'from pybricks.hubs import MoveHub\n';
	code += 'from pybricks.pupdevices import Motor, ColorDistanceSensor\n';
	code += 'from pybricks.parameters import Button, Color, Direction, Port, Side, Stop\n';
	code += 'from pybricks.robotics import DriveBase\n';
	code += 'from pybricks.tools import wait, StopWatch\n';
    return code;
};

Blockly.Python['Hub_init'] = function(block) {
	var code = '';
    return code;
  };

Blockly.Python['Motor_init'] = function(block) {
	var code = '';
    return code;
  };

Blockly.Python['Motor_run'] = function(block) {
	var code = '';
    return code;
  };


Blockly.Python['wait'] = function(block) {
	var code = 'wait(1000);';
    return code;
  };
