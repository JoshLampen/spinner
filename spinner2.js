for (let i = 0; i < 9; i++) {
  if (i === 0 || i === 4 || i === 8) {
    setTimeout(() => process.stdout.write('\r|   '), 100 + i * 200);
  } else if (i === 1 || i === 5) {
    setTimeout(() => process.stdout.write('\r/   '), 100 + i * 200);
  } else if (i === 2 || i === 6) {
    setTimeout(() => process.stdout.write('\r-   '), 100 + i * 200);
  } else if (i === 3 || i === 7) {
    setTimeout(() => process.stdout.write('\r\\   '), 100 + i * 200);
  }
}