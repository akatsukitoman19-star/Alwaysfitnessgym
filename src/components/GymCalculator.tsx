import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Sparkles, Scale, Heart, Utensils, Zap, HelpCircle, Activity, ChevronRight, RefreshCw, MessageSquare } from 'lucide-react';

interface CalculationResult {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  tdee: number;
  macros: {
    protein: number; // in grams
    carbs: number; // in grams
    fats: number; // in grams
    calories: number;
  };
  recommendedClasses: string[];
}

export default function GymCalculator() {
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [age, setAge] = useState<number>(24);
  const [weight, setWeight] = useState<number>(70); // in kg
  const [height, setHeight] = useState<number>(172); // in cm
  const [activity, setActivity] = useState<string>('Moderate'); // Sedentary, Light, Moderate, Active, Extreme
  const [goal, setGoal] = useState<'FatLoss' | 'MuscleGain' | 'Strength' | 'Conditioning'>('MuscleGain');

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculateBiometrics = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulate 3D scanning telemetry briefly
    setTimeout(() => {
      // Mifflin-St Jeor Equation for BMR
      let calculatedBmr = 0;
      if (gender === 'Male') {
        calculatedBmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        calculatedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      // Convert activity to multiplier
      let activityMultiplier = 1.2;
      switch (activity) {
        case 'Sedentary': activityMultiplier = 1.2; break;
        case 'Light': activityMultiplier = 1.375; break;
        case 'Moderate': activityMultiplier = 1.55; break;
        case 'Active': activityMultiplier = 1.725; break;
        case 'Extreme': activityMultiplier = 1.9; break;
      }

      const calculatedTdee = calculatedBmr * activityMultiplier;

      // Adjust calories based on physical fitness goals
      let targetCalories = calculatedTdee;
      let macroSplit = { proteinRatio: 0.3, carbRatio: 0.4, fatRatio: 0.3 }; // default

      if (goal === 'FatLoss') {
        targetCalories = calculatedTdee - 500; // Caloric deficit
        macroSplit = { proteinRatio: 0.4, carbRatio: 0.3, fatRatio: 0.3 }; // higher protein to preserve lean muscle
      } else if (goal === 'MuscleGain') {
        targetCalories = calculatedTdee + 400; // Caloric surplus
        macroSplit = { proteinRatio: 0.3, carbRatio: 0.5, fatRatio: 0.2 }; // higher carbs for energy
      } else if (goal === 'Strength') {
        targetCalories = calculatedTdee + 200;
        macroSplit = { proteinRatio: 0.35, carbRatio: 0.45, fatRatio: 0.2 };
      } else if (goal === 'Conditioning') {
        targetCalories = calculatedTdee;
        macroSplit = { proteinRatio: 0.3, carbRatio: 0.45, fatRatio: 0.25 };
      }

      // Calculate macros
      // Protein: 4 kcal per gram
      // Carbs: 4 kcal per gram
      // Fats: 9 kcal per gram
      const proteinGrams = Math.round((targetCalories * macroSplit.proteinRatio) / 4);
      const carbGrams = Math.round((targetCalories * macroSplit.carbRatio) / 4);
      const fatGrams = Math.round((targetCalories * macroSplit.fatRatio) / 9);

      // BMI Calculator
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);

      let bmiCat = 'Normal';
      if (calculatedBmi < 18.5) bmiCat = 'Underweight';
      else if (calculatedBmi >= 18.5 && calculatedBmi < 25) bmiCat = 'Normal Weight';
      else if (calculatedBmi >= 25 && calculatedBmi < 30) bmiCat = 'Overweight';
      else bmiCat = 'Obese';

      // Recommended classes based on goal
      let recClasses: string[] = [];
      if (goal === 'FatLoss') {
        recClasses = ['HIIT Exercise Classes', 'Indoor Cycling', 'Zumba & Aerobics'];
      } else if (goal === 'MuscleGain') {
        recClasses = ['Weight Training', 'CrossFit', 'Personal Training'];
      } else if (goal === 'Strength') {
        recClasses = ['Weight Training', 'CrossFit'];
      } else {
        recClasses = ['Yoga Classes', 'HIIT Exercise Classes', 'Spa & Recovery Services'];
      }

      setResult({
        bmi: Math.round(calculatedBmi * 10) / 10,
        bmiCategory: bmiCat,
        bmr: Math.round(calculatedBmr),
        tdee: Math.round(calculatedTdee),
        macros: {
          calories: Math.round(targetCalories),
          protein: proteinGrams,
          carbs: carbGrams,
          fats: fatGrams
        },
        recommendedClasses: recClasses
      });

      setIsCalculating(false);
    }, 1000);
  };

  const getBmiColor = (cat: string) => {
    switch (cat) {
      case 'Underweight': return 'text-yellow-400';
      case 'Normal Weight': return 'text-green-400';
      case 'Overweight': return 'text-orange-400';
      default: return 'text-red-400';
    }
  };

  const whatsappText = result
    ? encodeURIComponent(
        `Hello Always Fitness Gym Banswara! I calculated my body blueprint on your website: BMR: ${result.bmr} kcal, TDEE: ${result.tdee} kcal, recommended daily intake: ${result.macros.calories} kcal (P: ${result.macros.protein}g, C: ${result.macros.carbs}g, F: ${result.macros.fats}g). I would love to test-drive my recommended classes: ${result.recommendedClasses.join(', ')}!`
      )
    : '';

  return (
    <div className="glassmorphism rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
      {/* Absolute faint background indicator */}
      <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none">
        <Calculator className="w-40 h-40" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neon-blue font-bold block">
              Biometric Diagnostics
            </span>
            <h3 className="text-xl sm:text-2xl font-display text-white">
              Calculate Your Body Blueprint
            </h3>
          </div>
        </div>

        <form onSubmit={calculateBiometrics} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Gender Toggle */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(['Male', 'Female'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    id={`calc-sex-${g.toLowerCase()}`}
                    className={`py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                      gender === g
                        ? 'bg-neon-blue/15 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.1)]'
                        : 'bg-[#121217]/50 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Age, Height, Weight row */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5">
                  Age <span className="text-gray-600 font-sans">(Yrs)</span>
                </label>
                <input
                  type="number"
                  min="13"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 24)}
                  id="calc-input-age"
                  className="w-full bg-[#121217]/80 text-white border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue font-semibold text-center"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5">
                  Height <span className="text-gray-600 font-sans">(Cm)</span>
                </label>
                <input
                  type="number"
                  min="100"
                  max="250"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value) || 172)}
                  id="calc-input-height"
                  className="w-full bg-[#121217]/80 text-white border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue font-semibold text-center"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5">
                  Weight <span className="text-gray-600 font-sans">(Kg)</span>
                </label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value) || 70)}
                  id="calc-input-weight"
                  className="w-full bg-[#121217]/80 text-white border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue font-semibold text-center"
                  required
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Physical Activity Level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                id="calc-input-activity"
                className="w-full bg-[#121217]/80 text-white border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-neon-blue"
              >
                <option value="Sedentary">Sedentary (Office job, little/no exercise)</option>
                <option value="Light">Lightly Active (Cardio or training 1-3 days/week)</option>
                <option value="Moderate">Moderately Active (Hypertrophy/cardio 3-5 days/week)</option>
                <option value="Active">Very Active (Heavy training 6-7 days/week)</option>
                <option value="Extreme">Savage Athlete (Heavy physical labor & double-days)</option>
              </select>
            </div>

            {/* Target Goal */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Primary Fitness Objective
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'FatLoss', label: 'Fat Shredding' },
                  { key: 'MuscleGain', label: 'Apex Hypertrophy' },
                  { key: 'Strength', label: 'Maximum Power' },
                  { key: 'Conditioning', label: 'Cardio Vitality' }
                ].map((gItem) => (
                  <button
                    key={gItem.key}
                    type="button"
                    onClick={() => setGoal(gItem.key as any)}
                    id={`calc-goal-${gItem.key.toLowerCase()}`}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border ${
                      goal === gItem.key
                        ? 'bg-neon-purple/15 border-neon-purple text-neon-purple shadow-[0_0_15px_rgba(157,78,223,0.1)]'
                        : 'bg-[#121217]/50 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {gItem.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isCalculating}
              id="calc-submit-btn"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-black font-semibold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg shadow-neon-blue/20 cursor-pointer disabled:opacity-50"
            >
              {isCalculating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  Generating Body Architecture...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-black" />
                  Generate Custom Blueprint
                </>
              )}
            </button>
          </div>

          {/* Results Block */}
          <div className="bg-black/40 rounded-2xl border border-white/5 p-5 flex flex-col justify-between min-h-[320px]">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f3ff]">
                      Diagnostics Captured
                    </span>
                    <button
                      type="button"
                      onClick={() => setResult(null)}
                      id="calc-reset-results"
                      className="text-[10px] font-mono text-gray-500 hover:text-white uppercase flex items-center gap-1 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" /> Clear
                    </button>
                  </div>

                  {/* Core Metrics: BMI / BMR / TDEE */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#121217]/80 rounded-xl p-3 border border-white/5">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Body Mass Index</p>
                      <h4 className="text-xl font-display font-medium text-white">{result.bmi} <span className="text-xs font-sans text-gray-400">BMI</span></h4>
                      <p className={`text-[10px] font-mono leading-none mt-1.5 ${getBmiColor(result.bmiCategory)}`}>
                        {result.bmiCategory}
                      </p>
                    </div>

                    <div className="bg-[#121217]/80 rounded-xl p-3 border border-white/5">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Basal Metabolic Rate</p>
                      <h4 className="text-xl font-display font-medium text-white">{result.bmr} <span className="text-xs font-sans text-gray-400">kCal</span></h4>
                      <p className="text-[9px] font-mono text-gray-500 leading-none mt-1.5">
                        Resting energy consumption
                      </p>
                    </div>
                  </div>

                  {/* Calories recommendation */}
                  <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/5 border border-neon-blue/20 rounded-xl p-3 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono text-neon-blue uppercase font-bold tracking-wider">Recommended Daily Energy Target</p>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                        {result.macros.calories} <span className="text-xs font-sans font-light text-gray-300">kCal / day</span>
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono bg-neon-blue/20 text-neon-blue px-2 py-1 rounded border border-neon-blue/20">
                        {goal === 'FatLoss' ? 'Deficit Mode' : goal === 'MuscleGain' ? 'Surplus Build' : 'Active Balance'}
                      </span>
                    </div>
                  </div>

                  {/* Macro Ratios: Pro / Carbs / Fats */}
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-neon-blue" />
                      Target Macro Nutrients Splits
                    </p>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="text-center bg-[#121217] rounded-xl p-2.5 border border-white/5">
                        <span className="text-[9px] font-mono text-neon-blue uppercase block font-bold mb-1">PROTEIN</span>
                        <span className="text-sm font-semibold text-white">{result.macros.protein}g</span>
                        <span className="text-[9px] font-mono text-gray-600 block mt-0.5">{result.macros.protein * 4} kCal</span>
                      </div>
                      <div className="text-center bg-[#121217] rounded-xl p-2.5 border border-white/5">
                        <span className="text-[9px] font-mono text-neon-purple uppercase block font-bold mb-1">CARBS</span>
                        <span className="text-sm font-semibold text-white">{result.macros.carbs}g</span>
                        <span className="text-[9px] font-mono text-gray-600 block mt-0.5">{result.macros.carbs * 4} kCal</span>
                      </div>
                      <div className="text-center bg-[#121217] rounded-xl p-2.5 border border-white/5">
                        <span className="text-[9px] font-mono text-gray-400 uppercase block font-bold mb-1">FATS</span>
                        <span className="text-sm font-semibold text-white">{result.macros.fats}g</span>
                        <span className="text-[9px] font-mono text-gray-600 block mt-0.5">{result.macros.fats * 9} kCal</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Class List */}
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                      Recommended Classes For You
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {result.recommendedClasses.map((cl, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-white/5 text-white text-[11px] font-medium border border-white/10"
                        >
                          {cl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Consultation */}
                  <a
                    href={`https://wa.me/917297801431?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    id="calc-whatsapp-btn"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-xs uppercase tracking-wide transition-all duration-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-black" />
                    Share Diagnosis & Book Trial on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <div key="placeholder" className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-600">
                    <Calculator className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300">Awaiting Telemetry</h4>
                    <p className="text-xs text-gray-500 max-w-xs mt-1">
                      Enter your physiological variables on the left and click "Generate Custom Blueprint" to plot your anatomical ratios.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
}
