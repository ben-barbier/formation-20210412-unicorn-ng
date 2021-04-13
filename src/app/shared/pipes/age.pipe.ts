import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age',
})
export class AgePipe implements PipeTransform {
    transform(birthYear: number): string {
        const age = new Date().getFullYear() - birthYear;
        return age > 60 ? '👴' : age + ' an(s)';
    }
}
