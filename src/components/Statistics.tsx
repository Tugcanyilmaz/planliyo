import { Users, Calendar, Building2, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Aktif İşletme',
    description: 'Planliyo\'ya güvenen işletme sayısı'
  },
  {
    icon: Users,
    value: '50.000+',
    label: 'Mutlu Müşteri',
    description: 'Her gün randevu alan müşteri sayısı'
  },
  {
    icon: Calendar,
    value: '1M+',
    label: 'Aylık Randevu',
    description: 'Platformumuzda alınan randevu sayısı'
  },
  {
    icon: TrendingUp,
    value: '%40',
    label: 'Verimlilik Artışı',
    description: 'Ortalama operasyonel verimlilik kazancı'
  }
];

function Statistics() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Rakamlarla Planliyo
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Binlerce işletme ve müşteri, randevu yönetiminde Planliyo'yu tercih ediyor
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>

                  <div className="text-lg font-semibold text-gray-300 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="text-3xl font-bold text-blue-400 mb-2">%99.9</div>
            <div className="text-gray-300 font-medium">Uptime Garantisi</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 2 dk</div>
            <div className="text-gray-300 font-medium">Ortalama Kurulum Süresi</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
            <div className="text-gray-300 font-medium">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;

