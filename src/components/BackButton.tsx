
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const BackButton = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const isRtl = currentLanguage === 'ar' || currentLanguage === 'ur';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`flex items-center gap-2 text-hajj-primary hover:text-hajj-dark ${isRtl ? 'flex-row-reverse' : ''}`}
    >
      <ArrowLeft className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
      <span>{currentLanguage === 'bn' ? 'পিছনে যান' : 'Back'}</span>
    </Button>
  );
};

export default BackButton;
