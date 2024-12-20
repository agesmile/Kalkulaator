import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const DrinkCalculator = () => {
  const [guests, setGuests] = useState('');
  const [time, setTime] = useState('');
  const [drinksPerHour, setDrinksPerHour] = useState('');
  const [result, setResult] = useState(null);

  const calculateTotal = () => {
    const g = parseFloat(guests);
    const t = parseFloat(time);
    const dph = parseFloat(drinksPerHour);
    
    if (g && t && dph && g > 0 && t > 0 && dph > 0) {
      const total = Math.round(g * t * dph);
      setResult(total);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Ürituse Kalkulaator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guests">Külaliste arv</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Sisesta külaliste arv"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">Ürituse kestus (tundides)</Label>
            <Input
              id="time"
              type="number"
              min="0.5"
              step="0.5"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Sisesta kestus"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dph">Jookide arv tunnis</Label>
            <Input
              id="dph"
              type="number"
              min="0"
              step="0.5"
              value={drinksPerHour}
              onChange={(e) => setDrinksPerHour(e.target.value)}
              placeholder="Sisesta jookide arv tunnis"
            />
          </div>

          <Button 
            onClick={calculateTotal}
            className="w-full"
          >
            Arvuta kokku
          </Button>

          {result !== null && (
            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
              <p className="text-center text-lg font-medium">
                Soovitatav kogus: {result} jooki
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DrinkCalculator;