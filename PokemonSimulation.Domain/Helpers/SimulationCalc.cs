using System;

namespace PokemonSimulation.Domain.Helpers
{
    public class SimulationCalc
    {
        public int AttackerLevel { get; set; }

        public int MoveBasePower { get; set; }

        public int AttackingStat { get; set; }

        public int DefendingStat { get; set; }

        public decimal Modifier { get; set; }
        
        public SimulationCalc(int attackerLevel, int moveBasePower, int attackingStat, int defendingStat, decimal? modifier)
        {
            AttackerLevel = attackerLevel;
            MoveBasePower = moveBasePower;
            AttackingStat = attackingStat;
            DefendingStat = defendingStat;
            Modifier = modifier ?? 1.0m;
        }

        public int CalculateDamage()
        {
            var levelFactor = ((2*AttackerLevel) / 5) + 2;
            decimal statsFactor = (decimal)AttackingStat / (decimal)DefendingStat;
            var damageNumerator = (levelFactor * MoveBasePower * statsFactor);
            var damageDenominator = 50;
            var damage = ((((decimal)damageNumerator / (decimal)damageDenominator) + 2) * Modifier);
            return Decimal.ToInt32(damage);
        }

        public void AddTypesDataToModifier(bool hasStab, decimal typeAdvantage)
        {
            if (hasStab)
                Modifier *= 1.5m;
            Modifier *= typeAdvantage;
        }
    }
}