const camelcase = (s: string) => {
    return s.split("").filter(v => v === v.toUpperCase()).length + 1;
}