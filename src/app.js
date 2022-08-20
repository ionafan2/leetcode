import _ from "lodash";

export function appRunner(tests, solution) {

    for (let i = 0; i < tests.length; i++) {
        let input = tests[i].in; //clone input array (it's going to be changed in place)

        solution(input);

        printResult(input, tests[i].out)
    }
}
function printResult(actual, expected) {

    if (_.isEqual(actual, expected)) {
        console.log("✅ ");
    } else {
        console.log("❌ ");
        console.log("Actual:   ", actual.toString());
        console.log("Expected: ", expected.toString());
    }
}