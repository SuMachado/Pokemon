import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {
  transform(types: string[]): string {
    if (!types || types.length === 0) {
      return 'default-background'; // Defina uma classe padrão se não houver tipos
    }
    
    const firstType = types[0].toLowerCase();

    switch (firstType) {
      case 'bug':
        return 'background-bug';
      case 'dark':
        return 'background-dark';
      case 'dragon':
        return 'background-dragon';
      case 'electric':
        return 'background-electric';
      case 'fairy':
        return 'background-fairy';
      case 'fighting':
        return 'background-fighting';
      case 'fire':
        return 'background-fire';
      case 'flying':
        return 'background-flying';
      case 'ghost':
        return 'background-ghost';
      case 'grass':
        return 'background-grass';
      case 'ground':
        return 'background-ground';
      case 'ice':
        return 'background-ice';
      case 'normal':
        return 'background-normal';
      case 'poison':
        return 'background-poison';
      case 'psychic':
        return 'background-psychic';
      case 'rock':
        return 'background-rock';
      case 'steel':
        return 'background-steel';
      case 'water':
        return 'background-water';
      // Adicione mais casos conforme necessário
      default:
        return 'default-background'; // Retorne uma classe padrão se o tipo não estiver mapeado
    }
  }
}
