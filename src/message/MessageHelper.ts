export const tryGetDisplayedDate = (
  thisMessageDate: Date,
  nextMessageDate: Date | undefined,
  out: { displayedDate: string | null },
) : boolean => {
  const now = new Date();
  const isYearDiff = now.getFullYear() - thisMessageDate.getFullYear() > 0;
  // const isMonthDiff = now.getMonth() - date.getMonth() > 0;
  // const isDateDiff = now.getDate() - date.getDate() > 0;
  const isDispalyedDate = nextMessageDate && (
    nextMessageDate.getDate() - thisMessageDate.getDate() > 0
    || nextMessageDate.getMonth() - thisMessageDate.getMonth() > 0
    || nextMessageDate.getFullYear() - thisMessageDate.getFullYear() > 0
  );

  if (isDispalyedDate) {
    const options = { day: 'numeric', month: 'long' };
    if (isYearDiff) {
      //@ts-ignore
      options.year = 'numeric';
    }
    //@ts-ignore
    out.displayedDate = nextMessageDate.toLocaleString('ru-RU', options);
    return true;
  }
  return false;
}
