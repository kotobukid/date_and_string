declare type D = {
    year: number,
    month: number,
    date: number
}

const zero_pad = (v: number | string): string => {
    return ('00' + v).slice(-2);
}

const d_to_string = (d: D, pad?: boolean): string => {
    if (pad) {
        return `${d.year}${zero_pad(d.month)}${zero_pad(d.date)}`
    } else {
        return `${d.year}${d.month}${d.date}`
    }
}

const date_to_d = (d: Date): D => {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();

    return {
        year,
        month,
        date
    }
}

const string8_to_d = (s: string): D => {
    const year: string = s.slice(0, 4);
    const month: string = s.slice(4, 6);
    const date: string = s.slice(6, 8);
    return {
        year: Number(year),
        month: Number(month),
        date: Number(date)
    };
}

const d_plus_d = (a: D, b: D): D => {
    return {
        year: a.year + b.year,
        month: a.month + b.month,
        date: a.date + b.date
    };
}

const today_string = d_to_string(date_to_d(new Date()));
console.log(today_string);
const today_string_p = d_to_string(date_to_d(new Date()), true);
console.log(today_string_p);

console.log(string8_to_d(today_string_p));
console.log(d_plus_d(string8_to_d('00000002'), string8_to_d(today_string_p)))
