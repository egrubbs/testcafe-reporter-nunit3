"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _template = _interopRequireDefault(require("./template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return {
    noColors: true,
    taskData: null,

    reportTaskStart(startTime, userAgents, testCount) {
      this.taskData = new TaskData(startTime.toISOString());
    },

    reportFixtureStart(name, path, meta) {
      this.taskData.handleFixtureStart(this.escapeHtml(name), path, meta);
    },

    // Optional
    reportTestStart(name, meta) {
      this.taskData.handleTestStart(name, meta);
    },

    reportTestDone(name, testRunInfo, meta) {
      const errorDetails = testRunInfo.errs.map(err => this.formatError(err, '-- ')).join('\n\n') || ''; // Screenshot paths are included as attachments

      const withoutScreenshot = errorDetails.replace(/^\s*Screenshot:.*\n/gm, ''); // Prevent well meaning trim()s from disturbing the formatting

      const u2800SpacingHack = withoutScreenshot.replace(/^( *) ([> ] \d+ \|)/gm, '$1⠀$2').replace(/\n\n/g, '\n⠀\n');
      this.taskData.handleTestDone(this.escapeHtml(name), testRunInfo, meta, u2800SpacingHack);
    },

    reportTaskDone(endTime, passed, warnings, result) {
      this.taskData.handleTaskDone(endTime.toISOString(), passed, warnings, result);
      this.write((0, _template.default)(this.taskData));
    }

  };
}

class TaskData {
  constructor(startTime) {
    this.startTime = startTime;
    this.fixtures = [];
  }

  handleFixtureStart(name, path, meta) {
    // TestCafe doesn't report a new fixtureStart until all of the tests in the previous fixture have completed. This can make test durations inaccurate when running with concurrency as test end time isn't marked until after all tests in the previous fixture have completed.
    this.currentFixture = new FixtureData(name, path, meta);
    this.fixtures.push(this.currentFixture);
  }

  handleTestStart(name, meta) {}

  handleTestDone(name, testRunInfo, meta, formattedErrorMessage = '') {
    this.currentFixture.endTime = new Date().toISOString();
    this.currentFixture.testCases.push(new TestCaseData(name, testRunInfo, meta, formattedErrorMessage));
  }

  handleTaskDone(endTime, passed, warnings, result) {
    this.endTime = endTime;
  }

}

class FixtureData {
  constructor(name, path, meta) {
    this.name = name;
    this.path = path;
    this.meta = meta;
    this.startTime = new Date().toISOString();
    this.testCases = [];
  }

}

class TestCaseData {
  constructor(name, testRunInfo, meta, formattedErrorMessage) {
    this.name = name;
    this.testRunInfo = testRunInfo;
    this.meta = meta;
    this.formattedErrorMessage = formattedErrorMessage;
    this.result = testRunInfo.skipped ? 'Skipped' : testRunInfo.errs.length > 0 ? 'Failed' : testRunInfo.unstable ? 'Inconclusive' : 'Passed';
    this.errorMessage = testRunInfo.errs.map(err => err.errMsg).join('\n');

    if (testRunInfo.quarantine && Object.entries(testRunInfo.quarantine).length > 1) {
      if (this.errorMessage) {
        this.errorMessage += '\n\n';
      }

      this.errorMessage += Object.entries(testRunInfo.quarantine).map(([runNumber, passedObject]) => `Run ${runNumber}: ${passedObject.passed ? 'Passed' : 'Failed'}`).join('\n');
    }

    if (testRunInfo.warnings && testRunInfo.warnings.length > 0) {
      this.formattedErrorMessage += '\n' + testRunInfo.warnings.join('\n');
    }

    this.duration = testRunInfo.durationMs / 1000;
    this.hasFailureData = !!this.errorMessage || !!this.formattedErrorMessage;
  }

}

module.exports = exports.default;