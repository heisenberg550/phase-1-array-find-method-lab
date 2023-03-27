// code your solution here

function superbowlWin(record) {
    const winRecord = record.find(x => x.result === "W");
    if (winRecord) {
      return winRecord.year;
    }
    return undefined;
  }