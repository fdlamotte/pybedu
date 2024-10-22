Blockly.Blocks['import_Pybricks'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from Pybricks.hubs import MoveHub");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#c51a4a");
      this.setTooltip("Imports Pybricks library.");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['Hub_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("hub"), "hub")
        .appendField(" = MoveHub()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c51a4a");
  this.setTooltip("Initialise MoveHub");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['Motor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("motor"), "motor")
        .appendField(" = Motor()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c51a4a");
  this.setTooltip("Initialise Motor");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['Motor_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("motor"), "motor")
        .appendField(".run")
        .appendField("(");
    this.appendValueInput("time")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c51a4a");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait")
        .appendField("(");
    this.appendValueInput("time")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c51a4a");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
