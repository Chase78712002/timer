const args = process.argv.slice(2);
const beep = () => {
  process.stdout.write('\x07');
};

const beepTimer = (array) => {
  for (let time of array) {
    if (Number(time)) {
      if (time < 0) {
        continue;
      } else {
        time = time * 1000;
        setTimeout(() => {
          beep();
        }, time);
      }
    } else {
      // skip if not a number
      console.log(time);
      continue;
    }
  }
};

beepTimer(args);



