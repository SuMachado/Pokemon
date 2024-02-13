import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCaption'
})
export class CaptionFormatPipe implements PipeTransform {
  transform(caption: string): string {
    return `<span style="font-size: 80%; font-weight: bold;">${caption}</span>`;
  }
}
