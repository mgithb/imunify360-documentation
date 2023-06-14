import{_ as e,n as a,p as n,a6 as i}from"./framework-43d56897.js";const t={},s=i(`<h1 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h1><h4 id="how-to-stop-imunify360" tabindex="-1"><a class="header-anchor" href="#how-to-stop-imunify360" aria-hidden="true">#</a> How to stop Imunify360</h4><p>For CentOS6/CloudLinux6, run the following command:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service imunify360 stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>For all other operating systems, run the following command:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop imunify360
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h4 id="how-to-uninstall-imunify360" tabindex="-1"><a class="header-anchor" href="#how-to-uninstall-imunify360" aria-hidden="true">#</a> How to uninstall Imunify360</h4><p>To uninstall Imunify360, run:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash i360deploy.sh --uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>If you have already deleted <span class="notranslate"><code>i360deploy.sh</code></span> then download it by running:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>and proceed to the directory with the script.</p><p>For CloudLinux OS, please run the following commands:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/sbin/cagefsctl  --force-update
/usr/sbin/cagefsctl  --remount-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>to remount <span class="notranslate">CageFS</span> and remove files from user&#39;s local directories as after uninstalling these files are not removed automatically and can generate errors to Apache log.</p><p>See also: <a href="https://cloudlinux.zendesk.com/hc/en-us/articles/360016144139-Imunify360-AV-uninstallation-FAQ" target="_blank" rel="noopener noreferrer">Imunify360/AV uninstallation FAQ</a>.</p><h4 id="how-to-disable-updates" tabindex="-1"><a class="header-anchor" href="#how-to-disable-updates" aria-hidden="true">#</a> How to disable updates</h4><p>Starting from Imunify360 v.4.10, if you need to disable Imunify360 then you need to disable updates as well by editing cron file and comment out the update command.</p><p>CloudLinux OS/CentOS</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/cron.daily/imunify360.cron
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>Ubuntu</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/cron.daily/imunify360-firewall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,22),d=[s];function l(r,o){return a(),n("div",null,d)}const c=e(t,[["render",l],["__file","index.html.vue"]]);export{c as default};
