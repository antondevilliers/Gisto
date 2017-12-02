import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })

export class GistSearchPipe implements PipeTransform {
  transform(gists, string) {
    if (!string) {
      return gists;
    }

    return gists.filter(gist => gist.description.match(string));
  }
}
